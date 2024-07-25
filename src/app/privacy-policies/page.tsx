import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Política de Privacidad - Comunidad del Saber Supercomplejo",
};

export default function PrivacyPolicies() {
	return (
		<div className="text-neutral-800">
			<Navbar style="light" />

			<div className="py-32 max-w-2xl px-4 mx-auto">
				<h1 className="text-4xl font-bold text-neutral-950 font-source">Política de Privacidad</h1>
				<p className="mt-4">Última actualización: 25 de julio de 2024</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">1. Introducción</h2>
				<p className="mt-4">Bienvenido a Comunidad del Saber Supercomplejo. En esta Política de Privacidad, te explicamos cómo recopilamos, usamos, compartimos y protegemos la información personal que obtienen los usuarios a través de nuestro sitio web.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">2. Información Recopilada</h2>
				<p className="mt-4">Recopilamos la siguiente información personal a través del inicio de sesión de Google:</p>
				<ul>
					<li>Correo electrónico del usuario</li>
					<li>Nombre del usuario</li>
					<li>Información del perfil del usuario</li>
					<li>Identificador de OpenID</li>
				</ul>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">3. Uso de la Información</h2>
				<p className="mt-4">La información recopilada se utiliza exclusivamente para fines internos para mejorar nuestro servicio. El nombre de los usuarios se muestra en su página de perfil y en los comentarios que realicen en el blog.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">4. Divulgación de Información</h2>
				<p className="mt-4">No compartimos la información personal de los usuarios con terceros. La información recopilada se mantiene privada y se usa exclusivamente dentro de nuestra plataforma.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">5. Seguridad de la Información</h2>
				<p className="mt-4">La información personal se almacena en una base de datos privada y protegida. Implementamos medidas de seguridad para proteger tu información contra acceso no autorizado y divulgación.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">6. Cookies y Tecnologías Similares</h2>
				<p className="mt-4">No utilizamos cookies ni otras tecnologías similares para recopilar información en nuestro sitio web.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">7. Derechos de los Usuarios</h2>
				<p className="mt-4">Los usuarios tienen el derecho de eliminar su cuenta y los comentarios que hayan realizado en el blog. Para ello, pueden contactar con nosotros a través de los medios disponibles en la página o al correo electrónico proporcionado.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">8. Modificaciones a la Política de Privacidad</h2>
				<p className="mt-4">Cualquier cambio en nuestra Política de Privacidad se notificará mediante un anuncio en el blog de la página y de manera directa a través de correo electrónico.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">9. Información de Contacto</h2>
				<p className="mt-4">Si tienes preguntas o inquietudes acerca de nuestra Política de Privacidad, puedes ponerte en contacto con nosotros a través de los medios disponibles en la página o al correo electrónico: <a className="text-secondary-700 underline" href="mailto:sabersupercomplejo@gmail.com">sabersupercomplejo@gmail.com</a>.</p>
			</div>
		</div>
	)
}
