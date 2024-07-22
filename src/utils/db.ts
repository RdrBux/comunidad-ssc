'use server'

import { cache } from "react";
import { createClient } from "./supabase/server";

const supabase = createClient();

export const getUser = cache(async () => {

	const { data: { user }, error } = await supabase.auth.getUser();

	return { user, error }
})

export async function getUserData() {
	const { user: userAuth, error: errorAuth } = await getUser()

	if (!userAuth) return { user: null, error: errorAuth }

	const { data: user, error } = await supabase.from('profiles').select('*').eq('id', userAuth.id).single();

	return { user, error }
}

export async function getCategories() {
	const { data: categories, error } = await supabase.from('categories').select('*');

	return { categories, error }
}