'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { AuthError, User } from '@supabase/supabase-js'

export default function useUser() {
	const [user, setUser] = useState<User | null>(null)
	const [error, setError] = useState<AuthError | null>(null);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getUser = async () => {
			const supabase = createClient()
			const { data: { user }, error } = await supabase.auth.getUser()

			if (error) {
				setError(error)
				setIsLoading(false)
			}
			if (user) {
				setUser(user)
				setIsLoading(false)
			}

		}

		getUser()
	}, [])

	return { user, error, isLoading }
}