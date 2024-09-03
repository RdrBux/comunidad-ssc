'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CommentBoxButton() {
	const { pending } = useFormStatus();
	const t = useTranslations('blog.comments')

	if (pending) {
		return <Button disabled>{t('comment')} <LoaderCircle className="animate-spin ml-1.5 h-4 w-4" /></Button>
	}
	return <Button type="submit">{t('comment')}</Button>

}