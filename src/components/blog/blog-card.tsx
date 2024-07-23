import { MEDIA } from "@/utils/constants";
import { FullLogo } from "../svgs";

export default function BlogCard() {
	return (
		<div className="rounded-md p-8 bg-secondary-500/15">
			<div className="w-[260px] lg:w-[220px]"><FullLogo /></div>
			<p className="mt-6">Bienvenido al blog de la comunidad. Este es un espacio dedicado a blabla. Omnis similique consectetur ipsam qui velit ratione facilis deleniti aperiam dolores recusandae.</p>
			<div className="flex gap-2 mt-6 text-neutral-800">
				<a className="p-2" title="Instagram" aria-label="Instagram" href={MEDIA.INSTAGRAM} target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
				</a>
				<a className="p-2" title="Facebook" aria-label="Facebook" href={MEDIA.FACEBOOK} target="_blank" rel="noopener noreferrer">
					<svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
				</a>
				<a className="p-2" title="YouTube" aria-label="YouTube" href={MEDIA.YOUTUBE} target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
				</a>
				<a className="p-2" title="LinkedIn" aria-label="LinkedIn" href={MEDIA.LINKEDIN} target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
				</a>
			</div>
		</div>
	)
}