import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import spainFlag from '../assets/spain-flag.png'
import ukFlag from '../assets/uk-flag.png'
import Image from "next/image";
import { Languages } from "lucide-react";

export default function LangSelector({ style }: { style: 'dark' | 'light' }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className={`${style === 'dark' ? 'bg-neutral-950/30' : 'bg-neutral-600'} flex divide-x divide-white/10 items-center gap-2 py-1.5 px-3 text-sm font-medium text-tertiary-50 rounded-md`}>
					<Languages className="w-5" /> <div className="pl-2 py-1">Español</div>
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Idioma</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<div className="flex items-center gap-2">
						<Image className="w-5" src={ukFlag} alt="Ícono bandera de Reino Unido" width={32} height={32} />
						English
					</div>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<div className="flex items-center gap-2">
						<Image className="w-5" src={spainFlag} alt="Ícono bandera de España" width={32} height={32} />
						Español
					</div>
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>
	)
}