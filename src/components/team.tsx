import Image from 'next/image';
import Juan from '../assets/juan.jpg';
import Facundo from '../assets/facundo.jpg';
import { useTranslations } from 'next-intl';

export default function Team() {
	const t = useTranslations('community.members')

	return (
		<div className="mt-16">
			<div className="p-6 pb-8 border rounded-md shadow">
				<div className="flex items-center gap-4">
					<div className="w-20 h-20 shrink-0 overflow-hidden rounded-md bg-secondary-300">
						<Image src={Juan} alt='Juan Pedro Rodríguez' width={400} height={400} />
					</div>
					<div>
						<p className={`font-source text-xl font-bold tracking-tight text-neutral-950`}>Juan Pedro Rodríguez</p>
						<p className="text-base">{t('director.role')}</p>
					</div>
				</div>

				<div className="text-sm lg:text-base px-2 mt-6 text-neutral-600">
					<p>{t('director.description.paragraph-first')}</p>
					<p className="mt-2">{t('director.description.paragraph-second')}</p>
					<p className="mt-2">{t('director.description.paragraph-third')}</p>
				</div>
			</div>

			<div className="mt-8 p-6 pb-8 border rounded-md shadow">
				<div className="flex items-center gap-4">
					<div className="w-20 h-20 overflow-hidden shrink-0 rounded-md bg-secondary-300">
						<Image src={Facundo} alt='Facundo Osuna' width={400} height={400} />
					</div>
					<div>
						<p className={`font-source text-xl font-bold tracking-tight text-neutral-950`}>Facundo Osuna</p>
						<p className="text-base">{t('co-director.role')}</p>
					</div>
				</div>

				<div className="text-sm lg:text-base px-2 mt-6 text-neutral-600">
					<p>{t('co-director.description.paragraph-first')}</p>
					<p className="mt-2">{t('co-director.description.paragraph-second')}</p>
				</div>
			</div>
		</div>
	)
}