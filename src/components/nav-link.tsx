import { AppRoute } from "@/utils/constants";
import Link from "next/link";

interface Props {
	style: 'dark' | 'light';
	text: string;
	route: AppRoute;
}

export default function NavLink({ style, text, route }: Props) {
	return (
		<Link className={`nav-link ${style === 'dark' ? '' : 'hover:text-neutral-800'} px-6 uppercase py-3 duration-300 flex items-center gap-2.5`} href={route}>
			<div aria-hidden="true" className="scene pointer-events-none">
				<div className="cube">
					<div className="cube__face cube__face--front"></div>
					<div className="cube__face cube__face--left"></div>
					<div className="cube__face cube__face--top"></div>
				</div>
			</div>
			{text}
		</Link>
	)
}