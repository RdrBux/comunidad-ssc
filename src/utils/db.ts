'use server'

import { cache } from "react";
import { createClient } from "./supabase/server";
import { Tables } from "./supabase/types-supabase";

export const getUser = cache(async () => {
	const supabase = createClient();

	const { data: { user }, error } = await supabase.auth.getUser();

	return { user, error }
})

export async function getUserData() {
	const supabase = createClient();

	const { user: userAuth, error: errorAuth } = await getUser()

	if (!userAuth) return { user: null, error: errorAuth }

	const { data: user, error } = await supabase.from('profiles').select('*').eq('id', userAuth.id).single();

	return { user, error }
}

export async function getCategories() {
	const supabase = createClient();

	const { data: categories, error } = await supabase.from('categories').select('*');

	if (error) console.error(error)

	return { categories, error }
}

export async function getRecentPosts(id: Tables<'posts'>['id'], locale: string) {
	const supabase = createClient();

	const { data, error } = await supabase
    .from('posts')
    .select(`
      id,
			user_id,
      title,
      img_url,
      created_at,
      profiles (full_name)
    `)
		.eq('lang', locale)
		.neq('id', id)
		.order('created_at', { ascending: false })
    .limit(5);

	if (error) console.error(error)

	return { data, error }
}

export async function getSitemapPosts() {
	const supabase = createClient();

	const { data, error } = await supabase
	.from('posts')
	.select(`
		id,
		lang,
		updated_at
		`)

	if (error) console.error(error)

		return { data, error }
}

export async function getHighlightedPost() {
	const supabase = createClient();

	const { data, error } = await supabase
	.from('posts')
	.select(`
		id,
		title,
		description,
		img_url,
		created_at,
		profiles (full_name),
		post_categories (
			categories (name)
		)
	`)
	.eq('highlighted', true)
	.single();

	if (error) console.error(error)

	return { data, error }
}

export async function getPostsBlogHome(locale: string) {
	const supabase = createClient();

	const { data, error } = await supabase
    .from('posts')
    .select(`
      id,
			user_id,
      title,
      img_url,
      created_at,
      profiles (full_name),
      post_categories (
        categories (name)
      )
    `)
		.eq('lang', locale)
    .neq('highlighted', true)
		.order('created_at', { ascending: false })

		if (error) console.error(error)

		return { data, error }
}

export async function getPostById(id: Tables<'posts'>['id']) {
	const supabase = createClient();

	const { data, error } = await supabase
		.from('posts')
		.select(`
			*,
			profiles (full_name, avatar_url),
			post_categories (
				categories (name)
			)
		`)
		.eq('id', id)
		.single();

	if (error) console.error(error)

	return { data, error }
}

export async function getCategoriesCount(locale: string) {
	const supabase = createClient()

	const { data, error } = await supabase.rpc('get_category_counts');
	console.log({data, error})

  if (error) console.error(error)

  return {data: data?.filter((category) => category.lang === locale), error};
}

export async function getCommentsByPostId(postId: Tables<'posts'>['id']) {
	const supabase = createClient();

	const { data, error } = await supabase
    .from('comments')
    .select(`
      id,
      content,
      created_at,
			answer_to_id,
      parent_id,
      user_id,
      profiles (full_name, avatar_url)
    `)
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

	if (error) console.error(error)

	return { data, error }

}

export async function getPostsByCategoryName(categoryName: Tables<'categories'>['name']) {
	const supabase = createClient();
	const { data, error } = await supabase.rpc('fetch_posts_by_category_name', {
    category_name: categoryName,
  })

	return { data, error }

}

export async function getUserById(userId: Tables<'profiles'>['id']) {
	const supabase = createClient();

	const { data, error } = await supabase
    .from('profiles')
    .select('avatar_url, full_name')
    .eq('id', userId)
    .single()

	if (error) console.error(error)

	return { data, error }

}

export async function getPostsByUserId(userId: Tables<'profiles'>['id'], locale: string) {
	const supabase = createClient();

	const { data, error } = await supabase
	.from('posts')
	.select(`
		id,
		img_url,
		user_id,
		profiles (full_name),
		title,
		created_at
	`)
	.eq('user_id', userId)
	.eq('lang', locale)
	.order('created_at', { ascending: false })

	if (error) console.error(error)

	return { data, error }
}

export async function getCommentsByUserId(userId: Tables<'profiles'>['id']) {
	const supabase = createClient();
	const { data, error } = await supabase
    .from('comments')
    .select(`
			id,
      content,
      created_at,
      posts (id, title),
      profiles (full_name)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

	if (error) console.error(error)

	return { data, error }

}

export async function getLastComments() {
	const supabase = createClient();

	const { data, error } = await supabase
    .from('comments')
    .select(`
			id,
      created_at,
      user_id,
      profiles (full_name, avatar_url),
      post_id,
      posts (title)
    `)
    .order('created_at', { ascending: false })
    .limit(5)

	if (error) console.error(error)

	return { data, error }
}

export async function getCommentById(commentId: Tables<'comments'>['id']) {
	const supabase = createClient();
	const { data, error } = await supabase
		.from('comments')
		.select(`
			id,
			user_id,
			post_id
		`)
		.eq('id', commentId)
		.single()

	if (error) console.error(error)

	return { data, error }
}