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

	return { data, error }
}