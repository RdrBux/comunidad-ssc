'use client'

import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import LoginButton from "./login-button";
import useUser from "@/hooks/useUser";
import { createClient } from "@/utils/supabase/client";
import { logoutUser } from "@/lib/actions";

export default function NavUserMenu({ style }: { style: 'light' | 'dark' }) {
	const { user, isLoading } = useUser();

	if (isLoading) return null

	if (!user) return <LoginButton style={style} />

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button aria-label="Abrir menú de usuario" className="w-10 h-10 rounded-full bg-neutral-300">
						<img className="w-10 h-10 rounded-full" src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name} />
					</button>
				</DropdownMenuTrigger>

				<DropdownMenuContent align="end">
					<DropdownMenuLabel>
						<div className="leading-none">{user.user_metadata.full_name}</div>
						<div className="text-xs text-neutral-500 leading-none mt-1">{user.email}</div>
					</DropdownMenuLabel>

					<DropdownMenuSeparator />

					<Link href={`/blog/users/${user.id}`}>
						<DropdownMenuItem className="flex items-center gap-3">
							<User size={16} />
							Perfil
						</DropdownMenuItem>
					</Link>
					<form action={logoutUser}>
						<button type="submit">
							<DropdownMenuItem className="flex items-center gap-3">
								<LogOut size={16} />
								Cerrar sesión
							</DropdownMenuItem>
						</button>
					</form>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}