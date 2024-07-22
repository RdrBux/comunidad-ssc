'use client'

import { Label } from "../ui/label";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import CategoriesForm from "./categories-form";
import React, { useEffect, useState } from "react";
import { Tables } from "@/utils/supabase/types-supabase";
import { createClient } from "@/utils/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";

export default function CategoriesToggler({ setSelectedCategories }: { setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>> }) {
	const [categories, setCategories] = useState<Tables<'categories'>[] | null>(null)
	const [error, setError] = useState<PostgrestError | null>(null)

	useEffect(() => {
		const supabase = createClient();
		async function getCategories() {
			const { data, error } = await supabase.from('categories').select('*')

			if (error) {
				setError(error)
			}
			if (data) {
				setCategories(data)
			}
		}

		getCategories()

	}, [])

	if (error) return <p>{error.message}</p>

	function handleChange(e: string[]) {
		setSelectedCategories(e)
	}

	return (
		<div className="grid gap-3 mt-20">
			<Label>Categorías</Label>

			{!categories && <p className="font-bold">No hay categorías</p>}

			{
				categories && categories.length > 0 && (
					<ToggleGroup onValueChange={handleChange} className="flex gap-2 flex-wrap justify-start" variant="outline" type="multiple">
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