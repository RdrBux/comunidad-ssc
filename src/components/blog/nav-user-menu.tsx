import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FilePlus, LogOut, User } from "lucide-react";
import LoginButton from "./login-button";
import { logoutUser } from "@/utils/actions";
import { getUserData } from "@/utils/db";

export default async function NavUserMenu({ style }: { style: 'light' | 'dark' }) {
	const { user, error } = await getUserData()

	if (!user) return <LoginButton style={style} />

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button aria-label="Abrir menú de usuario" className="w-10 h-10 rounded-full bg-neutral-300">
						<img className="w-10 h-10 rounded-full" src={user.avatar_url!} alt={user.full_name} />
					</button>
				</DropdownMenuTrigger>

				<DropdownMenuContent align="end">
					<DropdownMenuLabel>
						<div className="leading-none">{user.full_name}</div>
						<div className="text-xs text-neutral-500 leading-none mt-1">{user.email}</div>
					</DropdownMenuLabel>

					<DropdownMenuSeparator />

					<Link href={`/blog/user/${user.id}`}>
						<DropdownMenuItem className="flex items-center gap-3">
							<User size={16} />
							Perfil
						</DropdownMenuItem>
					</Link>

					{user.user_role === 'admin' && (
						<Link href={`/blog/create`}>
							<DropdownMenuItem className="flex items-center gap-3">
								<FilePlus size={16} />
								Crear post
							</DropdownMenuItem>
						</Link>
					)}

					<form action={logoutUser}>
						<button className="w-full" type="submit">
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