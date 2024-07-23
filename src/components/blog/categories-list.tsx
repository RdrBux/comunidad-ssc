import { getCategoriesCount } from "@/utils/db"
import Link from "next/link"

export default async function CategoriesList() {
	const { data, error } = await getCategoriesCount()

	if (error) return <div>Error</div>
	if (!data) return <div>No data</div>

	const filteredData = data.filter((category) => category.post_count > 0)

	return (
		<div>
			<h4 className="text-2xl tracking-tight font-bold leading-none">Explorar categorías</h4>
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
		</div>
	)
}