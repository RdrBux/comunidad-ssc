import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

export default function NavUserMenu({ style }: { style: 'light' | 'dark' }) {
	return (
		<div>
			<button className={`${style === 'light' ? 'text-neutral-900 bg-neutral-200 hover:bg-neutral-300' : 'text-tertiary-50 bg-neutral-950/50 hover:bg-neutral-950'} px-3 py-2.5 flex items-center gap-2.5 font-medium text-sm rounded-md duration-300`}>
				Iniciar sesión
			</button>

			<div className="hidden">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button aria-label="Abrir menú de usuario" className="w-10 h-10 rounded-full bg-secondary-300"></button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuLabel>
							<div className="leading-none">Saber Supercomplejo</div>
							<div className="text-xs text-neutral-500 leading-none mt-1">sabersupercomplejo@gmail.com</div>
						</DropdownMenuLabel>

						<DropdownMenuSeparator />

						<Link href='/perfil'>
							<DropdownMenuItem className="flex items-center gap-3">
								<User size={16} />
								Perfil
							</DropdownMenuItem>
						</Link>
						<DropdownMenuItem className="flex items-center gap-3">
							<LogOut size={16} />
							Cerrar sesión
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}