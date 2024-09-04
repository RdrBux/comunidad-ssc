import { getCategoriesCount } from "@/utils/db"
import { getLocale, getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"

export default async function CategoriesList() {
	const t = await getTranslations('blog')
	const locale = await getLocale()
	const { data, error } = await getCategoriesCount(locale)

	if (error) return
	if (!data) return

	const filteredData = data.filter((category) => category.post_count > 0)

	return (
		<section>
			<h4 className={`font-source text-3xl tracking-tight font-bold leading-none`}>{t('categories.title')}</h4>
			<div className="flex gap-2 flex-wrap mt-6">

				{
					filteredData.map(category => (
						<Link key={category.category_name} href={`/blog/category/${category.category_name}`} className="bg-neutral-200 hover:bg-neutral-300 duration-300 flex gap-2 items-center p-2 rounded text-sm font-medium">
							<span className="capitalize">{category.category_name}</span>
							<div className="bg-white rounded px-1.5">{category.post_count}</div>
						</Link>
					))
				}

			</div>
		</section>
	)
}