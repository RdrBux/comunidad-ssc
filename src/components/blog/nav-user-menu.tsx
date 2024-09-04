import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { FilePlus, LogOut, User } from "lucide-react";
import LoginButton from "./login-button";
import { logoutUser } from "@/utils/actions";
import { getUserData } from "@/utils/db";
import { getTranslations } from "next-intl/server";

export default async function NavUserMenu({ style }: { style: 'light' | 'dark' }) {
	const { user, error } = await getUserData()
	const t = await getTranslations('blog.user-menu')

	if (!user) return <LoginButton style={style} />

	return (
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
						{t('profile')}
					</DropdownMenuItem>
				</Link>

				{user.user_role === 'admin' && (
					<Link href={`/blog/create`}>
						<DropdownMenuItem className="flex items-center gap-3">
							<FilePlus size={16} />
							{t('create-post')}
						</DropdownMenuItem>
					</Link>
				)}

				<form action={logoutUser}>
					<button className="w-full" type="submit">
						<DropdownMenuItem className="flex items-center gap-3">
							<LogOut size={16} />
							{t('logout')}
						</DropdownMenuItem>
					</button>
				</form>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}