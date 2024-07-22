import { getCategories } from "@/utils/db";
import { Label } from "../ui/label";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import CategoriesForm from "./categories-form";

export default async function CategoriesToggler() {
	const { categories, error } = await getCategories()

	if (error) return <p>{error.message}</p>

	return (
		<div className="grid gap-3 mt-12">
			<Label>Categorías</Label>

			{!categories && <p className="font-bold">No hay categorías</p>}

			{
				categories && categories.length > 0 && (
					<ToggleGroup className="flex gap-2 flex-wrap justify-start" variant="outline" type="multiple">
						{
							categories.map((category) => (
								<ToggleGroupItem key={category.id} className="capitalize" value={String(category.id)}>{category.name}</ToggleGroupItem>
							))
						}
					</ToggleGroup>
				)

			}

			<CategoriesForm />
		</div>
	)
}