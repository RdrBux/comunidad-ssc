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

export async function getRecentPosts(id: Tables<'posts'>['id']) {
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
		.neq('id', id)
    .limit(5);

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

export async function getPostsBlogHome() {
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
    .neq('highlighted', true);

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

export async function getCategoriesCount() {
	const supabase = createClient()

	const { data, error } = await supabase.rpc('get_category_counts');

  if (error) console.error(error)

  return {data, error};
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
  });

}