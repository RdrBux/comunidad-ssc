import { ROUTES } from "@/utils/constants";
import NavLink from "./nav-link";
import { Logo } from "./svgs";
import NavMenu from "./nav-menu";

interface Props {
	style: 'light' | 'dark';
}

export default function Navbar({ style }: Props) {
	return (
		<nav className={`${style === 'dark' ? 'border-b border-neutral-950/30 text-neutral-950' : 'border-b border-neutral-300'} container mx-auto px-4 lg:px-16 flex items-center justify-between absolute z-20 top-0 left-0 right-0 py-3`}>
			<a className="w-10" aria-label="Inicio" href="/">
				<Logo />
			</a>

			<ul className={`${style === 'dark' ? 'text-tertiary-50' : 'text-neutral-600'} hidden lg:flex gap-1 font-medium`}>
				<li><NavLink route={ROUTES.TEORIA} text='La teoría' style={style} /></li>
				<li><NavLink route={ROUTES.ACTORES} text='Los actores' style={style} /></li>
				<li><NavLink route={ROUTES.CAMINO} text='El camino' style={style} /></li>
				<li><NavLink route={ROUTES.BLOG} text='Blog' style={style} /></li>
			</ul>

			<button className={`${style === 'dark' ? 'bg-neutral-950/30' : 'bg-neutral-600'} hidden lg:block py-2 px-4 text-tertiary-50  rounded-full`}>ES / EN</button>

			<NavMenu style={style} />
		</nav>
	)
}