'use client'

export default function PDFViewer() {
	return (
		<div className="mt-24">
			<h3 className="text-xl font-source font-semibold mb-4">Vista previa (prólogo y tercer capítulo)</h3>

			<iframe
				src="https://docs.google.com/viewer?url=https://www.sabersupercomplejo.com/pdf/saber-supercomplejo-preview.pdf&embedded=true"
				width="100%"
				height="600"
				title="Vista previa del libro"
				frameBorder={0}
				className="border border-gray-300 rounded-lg shadow-lg"
			/>
		</div>
	)
}