'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function logoutUser() {
	const supabase = createClient()
	await supabase.auth.signOut()
}