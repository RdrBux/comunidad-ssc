'use client'

import { useLocale } from "next-intl"

export default function PDFViewer() {
	const locale = useLocale();

	const title = locale === 'en' ? "Preview (prologue and third chapter)" : "Vista previa (prólogo y tercer capítulo)"
	const source = locale === 'en' ? "https://docs.google.com/viewer?url=https://www.sabersupercomplejo.com/pdf/supercomplex-knowledge-preview.pdf&embedded=true" : "https://docs.google.com/viewer?url=https://www.sabersupercomplejo.com/pdf/saber-supercomplejo-preview.pdf&embedded=true"

	return (
		<div className="mt-24">
			<h3 className="text-xl font-source font-semibold mb-4">
				{title}
			</h3>

			<iframe
				src={source}
				width="100%"
				height="600"
				title="Vista previa del libro"
				frameBorder={0}
				className="border border-gray-300 rounded-lg shadow-lg"
			/>
		</div>
	)
}