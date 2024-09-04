import { AppRoute } from "@/utils/constants";
import { Link } from "@/i18n/routing";

interface Props {
	route: AppRoute;
	text: string;
}

export default function ButtonSection({ route, text }: Props) {
	return (
		<Link href={route} className="whitespace-nowrap rounded bg-secondary-400 hover:bg-secondary-300 duration-300 text-neutral-950 text-lg px-6 font-medium py-2 mt-8 block w-fit">{text}</Link>
	)
}