import { ROUTES } from "@/utils/constants";
import NavLink from "./nav-link";
import { Logo } from "./svgs";
import LangSelector from "./lang-selector";
import NavMobile from "./nav-mobile";
import NavBlog from "./blog/nav-blog";
import NavUserMenu from "./blog/nav-user-menu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface Props {
	style: 'light' | 'dark';
}

export default function Navbar({ style }: Props) {
	const t = useTranslations('navigation')

	return (
		<div className={`${style === 'dark' ? 'border-b border-white/15 text-neutral-950' : 'border-b border-neutral-200'}  absolute z-20 top-0 left-0 right-0 `}>
			<nav className="container mx-auto px-4 lg:px-16 flex items-center justify-between py-3 relative">
				<Link className="w-10" aria-label="Inicio" href="/">
					<Logo />
				</Link>

				<ul className={`${style === 'dark' ? 'text-tertiary-50' : 'text-neutral-600'} hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-1 font-medium`}>
					<li><NavLink route={ROUTES.TEORIA} text={t('teoria')} style={style} /></li>
					<li><NavLink route={ROUTES.COMUNIDAD} text={t('comunidad')} style={style} /></li>
					<li><NavLink route={ROUTES.CAMINO} text={t('camino')} style={style} /></li>
					<li><NavLink route={ROUTES.BLOG} text={t('blog')} style={style} /></li>
				</ul>

				<div className="flex gap-2">
					<LangSelector style={style} />
					<div className=""></div>
					<NavBlog>
						<NavUserMenu style={style} />
					</NavBlog>
					<NavMobile style={style} />
				</div>

			</nav>
		</div>
	)
}