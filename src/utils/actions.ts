'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function logoutUser() {
	const supabase = createClient()
	await supabase.auth.signOut()
}

export async function addCategory(prevState: any, formData: FormData) {
	const name = String(formData.get('name')).toLowerCase()

	if (name.length < 1) {
		return { message: '', error: 'El nombre es obligatorio' }
	}

	const supabase = createClient()
	const { data, error } = await supabase.from('categories').insert({ name })

	if (error) {
		return { message: '', error: 'Ha habido un error. Intentalo de nuevo' }
	}

	revalidatePath('/blog/create')
	return { message: 'Categoría agregada', error: null }

}

export async function addPost(formData: FormData) {
	const title = String(formData.get('title'))
	const description = String(formData.get('description'))
	const content = String(formData.get('content'))
	const categories = String(formData.get('categories'))
	console.log({title, description, content, categories})


}