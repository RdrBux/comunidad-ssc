import { createClient } from "@/utils/supabase/server"

export async function logoutUser() {
	const supabase = createClient()
	await supabase.auth.signOut()
}