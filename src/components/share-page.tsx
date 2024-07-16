interface Props {
	url: string;
	text: string;
}

export default function SharePage({ url, text }: Props) {
	const encodedUrl = encodeURIComponent(url);
	const encodedText = encodeURIComponent(text);

	return (
		<div className="w-full flex justify-center items-center gap-2">
			<a title="Compartir en Facebook" aria-label="Compartir en Facebook" className="w-10 aspect-square grid place-content-center rounded-full text-neutral-900 hover:bg-[#0866FF] hover:text-white duration-100" href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
			</a>

			<a title="Compartir en X" aria-label="Compartir en X" className="w-10 aspect-square grid place-content-center rounded-full text-neutral-900 hover:bg-black hover:text-white duration-100" href={`https://twitter.com/intent/tweet?text=${encodedUrl}&amp;url=${encodedText}`} target="_blank" rel="noopener noreferrer">
				<svg aria-hidden="true" className="w-5 h-fit" xmlns="http://www.w3.org/2000/svg" width="300" height="271" viewBox="0 0 300 271" fill="currentColor"><path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" /></svg>
			</a>

			<a title="Compartir por WhatsApp" aria-label="Compartir por WhatsApp" className="w-10 aspect-square grid place-content-center rounded-full text-neutral-900 hover:bg-[#24CC63] hover:text-white duration-100" href={`whatsapp://send?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer">
				<svg aria-hidden="true" className="w-5 h-fit" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 308 308" xmlSpace="preserve">
					<g id="XMLID_468_">
						<path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z" />
						<path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z" />
					</g>
				</svg>
			</a>

			<a title="Compartir en LinkedIn" aria-label="Compartir en LinkedIn" className="w-10 aspect-square grid place-content-center rounded-full text-neutral-900 hover:bg-[#0077B5] hover:text-white duration-100" href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${encodedUrl}&amp;title=${encodedText}&amp;summary=${encodedText}&amp;source=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
			</a>

			<a title="Compartir por Correo" aria-label="Compartir por Correo" className="w-10 aspect-square grid place-content-center rounded-full text-neutral-900 hover:bg-neutral-600 hover:text-white duration-100" href={`mailto:?subject=${encodedText}&body=${encodedUrl}`} target="_blank" rel="noopener noreferrer">
				<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
			</a>
		</div>
	)
}