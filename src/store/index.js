import { createStore } from 'vuex'

export default createStore({
	state: {
		intro: {
			titulo1: '¡Hola, soy Pedro Bazó!',
			descripcion1: 'Desarrollador Web, principalmente en los stacks MERN, MEVN, MEAN y Laravel',
			titulo2: 'Objetivos y propósitos',
			descripcion2: 'Me considero una persona que consigue lo que se propone, ya que estoy convencido de que los logros son los resultados de las decisiones que se toman y de las metas que nos establecemos. Estoy consciente de mis limitaciones, no lo sé todo ni lo domino todo, pero procuro siempre hallar una solución eficiente a los problemas.',
			titulo3: 'Tecnologías',
			descripcion3: 'Procuro mantenerme actualizado con las diferentes tecnologías para el desarrollo web, así como en el uso de los distintos lenguajes de programación.',
			titulo4: 'Capacitación',
			descripcion4: 'Aprovecho muchos recursos que me ofrece internet para capacitarme continuamente, con la intención de adquirir nuevas competencias o mejorar las que ya tengo.',
			titulo5: 'Fortaleza',
			descripcion5: 'Mi punto fuerte es mi entusiasmo para resolver problemas, y me apropio de aquella frase de Thomas Edison: “Nuestra más grande debilidad yace en rendirnos. El camino más seguro hacia el éxito es siempre intentarlo una vez más”'
		},
		destacados: [
			// Los iconos se pueden obtener de: https://infinitered.github.io/ionicons-version-3-search
			{
				id: 1,
				icon: 'ion-ios-albums',
				servicio: 'Sistema de Historia Clínica o similar',
				descripcion: 'Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.',
				enlace: 'https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel'
			},
			{
				id: 2,
				icon: 'ion-ios-cloud-upload',
				servicio: 'Publicación de aplicaciones web',
				descripcion: 'Alojar webs a Hosting o VPS, creadas con HTML, CSS, JavaScript, PHP, MySQL, Angular, Node, Mongo, Laravel, Symfony, WP, Python y Django.',
				enlace: 'https://github.com/petrix12/deploy_2022'
			},
			{
				id: 3,
				icon: 'ion-ios-book',
				servicio: 'Plataforma de cursos',
				descripcion: 'Desarrollo de una plataforma de cursos, con un sistema completo de roles y servicios.',
				enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel'
			},
			{
				id: 4,
				icon: 'ion-ios-browsers',
				servicio: 'Crea una pasarela de pagos',
				descripcion: 'Implementación de una pasarela de pagos con Stripe y PayPal completa para un negocio virtual o tienda online.',
				enlace: 'https://github.com/petrix12/pasarela_pago'
			},
			{
				id: 5,
				icon: 'ion-ios-cart',
				servicio: 'Crea una ecommerce',
				descripcion: 'Desarrollo de una aplicación ecommerce completamente funcional.',
				enlace: 'https://github.com/petrix12/2021_ecommerce'
			}
		],
		calidad: {
			texto: 'La mejor razón para iniciar una empresa es que esta tenga sentido, sentido para crear un producto o servicio que la sociedad necesite, y de esta forma hacer un mundo mejor. "Guy Kawasaki"',
			mision: 'Ofrecer herramientas y soluciones de trabajo que disminuyan las horas hombres a partir de la automatización de procesos informáticos, a través de un servicio de alta calidad, tecnologías de vanguardia y gran pasión por el desarrollo web.',
			valores: 'Espíritu de servicio, pasión por el trabajo, superación constante, honestidad, lealtad, respeto y creatividad.',
			vision: 'Ser un desarrollador de aplicaciones web, reconocido por la innovación, simpleza y generación de soluciones, con una alta productividad y gran espíritu de servicio.'
		},
		servicios: {
			texto: 'Hagas lo que hagas, hazlo tan bien para que vuelvan y además traigan a sus amigos. "Walt Disney"',
			items: [
				// Los iconos se pueden obtener de: https://infinitered.github.io/ionicons-version-3-search
				{
					id: 1,
					icon: 'ion-ios-albums',
					servicio: 'Sistema de Historia Clínica o similar',
					descripcion: 'Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.',
					enlace: 'https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel'
				},
				{
					id: 2,
					icon: 'ion-ios-cloud-upload',
					servicio: 'Publicación de aplicaciones web',
					descripcion: 'Alojar webs a Hosting o VPS, creadas con HTML, CSS, JavaScript, PHP, MySQL, Angular, Node, Mongo, Laravel, Symfony, WP, Python y Django.',
					enlace: 'https://github.com/petrix12/deploy_2022'
				},
				{
					id: 3,
					icon: 'ion-ios-book',
					servicio: 'Plataforma de cursos',
					descripcion: 'Desarrollo de una plataforma de cursos, con un sistema completo de roles y servicios.',
					enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel'
				},
				{
					id: 4,
					icon: 'ion-ios-browsers',
					servicio: 'Pasarela de pagos',
					descripcion: 'Implementación de una pasarela de pagos con Stripe y PayPal completa para un negocio virtual o tienda online.',
					enlace: 'https://github.com/petrix12/pasarela_pago'
				},
				{
					id: 5,
					icon: 'ion-ios-cart',
					servicio: 'Ecommerce',
					descripcion: 'Desarrollo de una aplicación ecommerce completamente funcional.',
					enlace: 'https://github.com/petrix12/2021_ecommerce'
				},
				{
					id: 6,
					icon: 'ion-ios-cog',
					servicio: 'Front-end',
					descripcion: 'Desarrollo de aplicaciones Front-end principalmente mediante el uso de las siguientes tecnologías: HTML5, CSS3 y Javascript.',
					enlace: '#'
				},
				{
					id: 7,
					icon: 'ion-ios-photos',
					servicio: 'Back-end',
					descripcion: 'Desarrollo de aplicaciones Back-end principalmente mediante el uso de las siguientes tecnologías: PHP, Node.js, MySQL y MongoDB.',
					enlace: '#'
				},
				{
					id: 8,
					icon: 'ion-ios-barcode',
					servicio: 'Aplicaciones de escritorio',
					descripcion: 'Desarrollo de aplicaciones de escritorio principalmente mediante el uso de los siguientes lenguajes de programación: Delphi, C++ Builder, Visual Basic, Microsoft C#.',
					enlace: '#'
				},
				{
					id: 9,
					icon: 'ion-ios-analytics',
					servicio: 'Hojas de cálculo',
					descripcion: 'Diseño de Hojas de Cálculo de Microsoft Excel, aplicando funcionalidad mediante el uso de VBA.',
					enlace: '#'
				}
			]
		},
		accion: {
			texto: 'Estoy consciente de mis limitaciones, no lo sé todo ni lo domino todo, pero estoy convencido de que encontraremos una muy buena solución.'
		},
		skills: {
			texto: 'Principales stacks web con los que he tenido el placer de trabajar.',
			stacks: [
				{
					id: 1,
					stack: 'Laravel - Vue.js',
					color_bootstrap: 'bg-dark',
					progressbar: 90,
					img: 'laravel-vue.png'
				},
				{
					id: 2,
					stack: 'MEVN',
					color_bootstrap: 'bg-success',
					progressbar: 80,
					img: 'mevn.png'
				},
				{
					id: 3,
					stack: 'MERN',
					color_bootstrap: 'bg-info',
					progressbar: 75,
					img: 'mern.png'
				},
				{
					id: 4,
					stack: 'MEAN',
					color_bootstrap: 'bg-danger',
					progressbar: 55,
					img: 'mean.png'
				}
			]
		},
		facts: {
			texto: '“Vive como si fueses a morir mañana. Aprende como si fueses a vivir para siempre”. — Mahatma Gandhi',
			cursos: 85,
			horas: 824
		}
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})