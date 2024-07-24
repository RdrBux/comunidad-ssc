'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { getCommentById, getUserData } from "./db"
import { BUCKETS_PUBLIC_URL } from "./constants"
import { redirect } from "next/navigation"
import { Tables } from "./supabase/types-supabase"

export async function signInWithGoogle(nextPath: string) {
	const supabase = createClient()
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `http://localhost:3000/auth/callback?next=${encodeURIComponent(nextPath)}`,
		},
	})

	if (data.url) {
		redirect(data.url) // use the redirect API for your server framework
	}
}

export async function logoutUser() {
	const supabase = createClient()
	await supabase.auth.signOut()
}

export async function addCategory(prevState: any, formData: FormData) {
	const { user } = await getUserData()

	if (!user || user.user_role !== 'admin') {
		return { error: 'Unauthorized' }
	}

	const name = String(formData.get('name')).toLowerCase()

	if (name.length < 1) {
		return { error: 'El nombre es obligatorio' }
	}

	const supabase = createClient()
	const { data, error } = await supabase.from('categories').insert({ name })

	if (error) {
		return { error: 'Ha habido un error. Intentalo de nuevo' }
	}

	revalidatePath('/blog/create')
	return { error: null }

}

export async function addPost(prevState: any, formData: FormData) {
	const supabase = createClient()

	//Validate inputs

	const { user } = await getUserData()
	if (!user || user.user_role !== 'admin') {
		return { error: 'Unauthorized' }
	}

	const title = String(formData.get('title'))

	if (title.length < 1) {
		return { error: 'El titúlo es obligatorio' }
	}

	const description = String(formData.get('description'))

	const content = String(formData.get('content'))

	if (content.length < 1) {
		return { error: 'El contenido es obligatorio' }
	}
	const img = formData.get('img') as File;

	if (!img) {
		return { error: 'La imagen es obligatoria' }
	}

	const categories = String(formData.get('categories'))

	if (categories.length < 1) {
		return { error: 'El menos una categoría es obligatoria' }
	}

	// Upload image first to get the URL

	const { data: imgData, error: imgError } = await supabase.storage.from('blog-images').upload(`${img.name}${Math.random()}`, img)

	if (imgError || !imgData) {
		return { error: "Ha habido un error subiendo la imagen. Intentalo de nuevo." }
	}

	const imgUrl = `${BUCKETS_PUBLIC_URL}${imgData.fullPath}`

	// Insert post

	const { data, error } = await supabase.from('posts').insert({ user_id: user.id, title, description, content, img_url: imgUrl }).select()

	if (error) {
		return { error: 'Ha habido un error. Intentalo de nuevo' }
	}

	// Add categories to post_categories joined table
	const categoriesArray = await JSON.parse(categories)

	const { data: categoriesData, error: categoriesError } = await supabase.from('post_categories').insert(categoriesArray.map((category: string) => ({ post_id: Number(data[0].id), category_id: Number(category) })))

	redirect(`/blog/post/${data[0].id}`)
	return { error: null }
}

export async function addComment(postId: Tables<'posts'>['id'], parentId: Tables<'comments'>['id'] | null, answerToId: Tables<'comments'>['id'] | null, prevState: any, formData: FormData) {
	const supabase = createClient()

	const { user } = await getUserData()
	if (!user) {
		return { error: 'Necesitas iniciar sesión' }
	}

	const comment = formData.get('comment')

	if (!comment) {
		return { error: 'El comentario es obligatorio' }
	}

	const stringComment = String(comment)
	if (stringComment.length < 1) {
		return { error: 'El comentario es obligatorio' }
	}

	const { data, error } = await supabase
    .from('comments')
    .insert([
      {
        post_id: postId,
        user_id: user.id,
        content: stringComment,
				answer_to_id: answerToId,
        parent_id: parentId,
      },
    ]);

	if (error) {
		console.error(error)
		return { error: 'Ha habido un error. Intentalo de nuevo' }
	}

	revalidatePath(`/blog/post/${postId}`)
	return { error: null }
}

export async function deleteComment(id: Tables<'comments'>['id'], prevState: any) {
	const supabase = createClient()
	const { user, error } = await getUserData()
	const { data, error: commentError } = await getCommentById(id)

	if (error || commentError) {
		return { error: 'Ha habido un error' }
	}

	if (!data) {
		return { error: 'El comentario no existe' }
	}

	if (!user) {
		return { error: 'Unauthorized' }
	}

	if (user.user_role === 'admin' || user.id === data.user_id) {
		const { error } = await supabase.from('comments').delete().eq('id', id)

		if (error) {
			return { error: 'Ha habido un error. Intentalo de nuevo' }
		}

		revalidatePath(`/blog/post/${data.post_id}`)
		return { error: null }
	}

	return { error: 'Ha habido un error. Intentalo de nuevo' }
}

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
	const email = formData.get('email')
	const name = formData.get('name')

	if (!name) {
		return { error: 'El nombre es obligatorio' }
	}
	const nameString = String(name)

	if (nameString.length < 1) {
		return { error: 'El nombre es obligatorio' }
	}

	if (!email) {
		return { error: 'El correo electrónico es obligatorio' }
	}
	const emailString = String(email)
	if (emailString.length < 1) {
		return { error: 'El correo electrónico es obligatorio' }
	}

	const supabase = createClient()
	const { data, error } = await supabase
		.from('newsletter')
		.insert({ email: emailString, name: nameString })

	if (error) {
		return { error: 'Ha habido un error. Intentalo de nuevo' }
	}

	return { error: null }

}