import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Términos y Condiciones del Servicio - Comunidad del Saber Supercomplejo",
};

export default function TermsAndConditions() {
	return (
		<div className="text-neutral-800">
			<Navbar style="light" />

			<div className="py-32 max-w-2xl px-4 mx-auto">
				<h1 className="text-4xl font-bold text-neutral-950 font-source">Condiciones del Servicio</h1>
				<p className="mt-4">Última actualización: 25 de julio de 2024</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">1. Introducción</h2>
				<p className="mt-4">Bienvenido a Comunidad del Saber Supercomplejo. Al utilizar nuestro sitio web, aceptas cumplir con las siguientes Condiciones del Servicio. Te recomendamos leer atentamente estos términos antes de usar nuestros servicios.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">2. Servicios Ofrecidos</h2>
				<p className="mt-4">Ofrecemos acceso a contenido y la posibilidad de participar en el blog de nuestro sitio web. El uso de estos servicios está sujeto a las siguientes condiciones.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">3. Uso Permitido</h2>
				<p className="mt-4">Está prohibido publicar contenido ofensivo, amenazante o irrespetuoso hacia otros usuarios. Nos reservamos el derecho de eliminar cualquier contenido que viole estas normas y de tomar las acciones necesarias para mantener un ambiente respetuoso.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">4. Responsabilidad</h2>
				<p className="mt-4">No nos hacemos responsables por los comentarios o contenido publicado por terceros en nuestro sitio. Sin embargo, estamos dispuestos a intermediar para resolver cualquier conflicto y eliminar contenido ofensivo cuando sea necesario.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">5. Modificaciones al Servicio</h2>
				<p className="mt-4">Podemos modificar los servicios ofrecidos en cualquier momento, a nuestra discreción. Nos reservamos el derecho de hacer cambios en el contenido, características y disponibilidad de nuestros servicios según lo consideremos necesario.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">6. Terminación del Servicio</h2>
				<p className="mt-4">Nos reservamos el derecho de suspender o terminar el acceso de un usuario a nuestros servicios por incumplimiento de estas Condiciones del Servicio o por motivos que consideremos pertinentes.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">7. Propiedad Intelectual</h2>
				<p className="mt-4">Todo el contenido publicado en nuestro sitio web, incluyendo texto, gráficos y diseño, es propiedad de la Comunidad del Saber Supercomplejo, salvo los comentarios o aportes de terceros. Los usuarios no pueden usar este contenido sin nuestra autorización.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">8. Legislación Aplicable</h2>
				<p className="mt-4">Estas Condiciones del Servicio se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con estos términos se resolverá en los tribunales de dicha jurisdicción.</p>

				<h2 className="mt-12 text-2xl font-bold text-neutral-950 font-source">9. Información de Contacto</h2>
				<p className="mt-4">Si tienes preguntas o inquietudes acerca de nuestras Condiciones del Servicio, puedes ponerte en contacto con nosotros a través de los medios disponibles en la página o al correo electrónico: <a className="text-secondary-700 underline" href="mailto:sabersupercomplejo@gmail.com">sabersupercomplejo@gmail.com</a>.</p>
			</div>
		</div>
	)
}
