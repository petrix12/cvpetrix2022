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
		},
		portafolio: { 
			proyectos: [
				{
					id: 28,
					titulo: 'Aplicación Laravel con base de datos MongoDB',
					descripcion: 'Creación de una aplicación en Laravel que conecta con una base de datos MongoDB. La aplicación se publicó en Heroku mientras que la base de datos se alojó en Atlas MongoDB.',
					img: 'laravel_mongodb.png',
					enlace: 'http://laravelmongo.herokuapp.com/',
					repositorio: 'https://github.com/petrix12/laravel_mongodb_2021',
					data_filter: 'filter-web',
					anho: 2021,
					tecnologias: ['laravel', 'mongo', 'atlas', 'heroku']
				},
				{
					id: 27,
					titulo: 'CRUD Laravel - Vue.js con Sweetalert2, Toastr y Axios',
					descripcion: 'Creación de un CRUD en Laravel y Vue.js, que conecta con una API Rest y utiliza las tecnologías de Sweetalert2, Toastr para la creación de formularios y mensajes, y Axios para consumir la API.',
					img: 'laravel_vue20021.png',
					enlace: 'http://laravelvue-2021.herokuapp.com/',
					repositorio: 'https://github.com/petrix12/laravel_vue_2021.git',
					data_filter: 'filter-web',
					anho: 2021,
					tecnologias: ['laravel', 'vuejs', 'axios', 'sweetalert2']
				},
				{
					id: 26,
					titulo: 'Creación de proyectos en Vue.js',
					descripcion: 'En este apartado se pretende mostrar varios tipos de proyectos realizados en Vue.js, con la intención de explorar el potencial de unos de los framework de FrontEnd más demandados de la actualidad.',
					img: 'vuejs2021.png',
					enlace: 'https://solucionespp-vuejs.netlify.app/',
					repositorio: 'https://github.com/petrix12/vue2021',
					data_filter: 'filter-web',
					anho: 2021,
					tecnologias: ['vuejs', 'netlify', 'net_core', 'git']
				},
				{
					id: 25,
					titulo: 'Creación de una pasarela de pagos en Laravel 8',
					descripcion: 'En este proyecto se creó una pasarela de pagos en Laravel 8. La aplicación se implementó con Laravel Cashier, y se utilizó como API de pagos a la plataforma de Stripe. Las vistas se desarrollaron principalmente con Tailwind CSS.',
					img: 'paymet.png',
					enlace: 'http://paymet.herokuapp.com/tutorial',
					repositorio: 'https://github.com/petrix12/pasarela_pago.git',
					data_filter: 'filter-web filter-destacados',
					anho: 2021,
					tecnologias: ['laravel', 'tailwindcss', 'stripe', 'git']
				},
				{
					id: 24,
					titulo: 'Creación de una API RESTful en Laravel 8',
					descripcion: 'En este proyecto se creó una API RESTful en Laravel 8, con un sistema de autenticación generado por Laravel Passport, un sistema de roles y permisos generados por Laravel Permission, también se utilizó Vue Js y Axios.',
					img: 'apirestful.png',
					enlace: 'https://github.com/petrix12/apirestful_laravel8/blob/main/apuntes.md',
					repositorio: 'https://github.com/petrix12/apirestful_laravel8/blob/main/apuntes.md',
					data_filter: 'filter-web',
					anho: 2021,
					tecnologias: ['laravel', 'vuejs', 'github', 'git']
				},
				{
					id: 23,
					titulo: 'Creación de un Curriculum Vitae desarrollado en Laravel 8',
					descripcion: 'Creación de un Curriculum Vitae Online personalizado y administrable, desarrollado en Laravel 8, alojado en Heroku y con deploy automático desde GitHub.',
					img: 'cvonline.png',
					enlace: 'https://cvpetrix.herokuapp.com',
					repositorio: 'https://github.com/petrix12/cvpetrix',
					data_filter: 'filter-web',
					anho: 2021,
					tecnologias: ['laravel', 'heroku', 'github', 'git']
				},
				{
					id: 22,
					titulo: 'Instalación de un proyecto Laravel en AWS',
					descripcion: 'Instalación de un proyecto Laravel 8 en Amazon Web Services, en una instancia de máquina virtual EC2 y un servicio RDS para instalación de una instancia de base de datos MariaDB.',
					img: 'aws_laravel.png',
					enlace: 'https://github.com/petrix12/awsejemplo/blob/main/apuntes.md',
					repositorio: 'https://github.com/petrix12/awsejemplo/blob/main/apuntes.md',
					data_filter: 'filter-web',
					anho: 2021,
					tecnologias: ['aws', 'laravel', 'github', 'git']
				},
				{
					id: 21,
					titulo: 'Creación de una plataforma de cursos online con Laravel 8',
					descripcion: 'Creación de una aplicación en Laravel Jetstream, que permite adiministrar una plataforma de cursos online, en donde se consume una API de PayPal para dar acceso a los cursos de pago.',
					img: 'cursos_laravel.png',
					enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel/blob/main/000%20Soportes/apuntes.md',
					repositorio: 'https://github.com/petrix12/PlataformaDeCursosLaravel/blob/main/000%20Soportes/apuntes.md',
					data_filter: 'filter-web filter-destacados',
					anho: 2021,
					tecnologias: ['laravel', 'paypal', 'livewire', 'git']
				},
				{
					id: 20,
					titulo: 'Creación de una plataforma de información genealógica desarrollado en Laravel 8',
					descripcion: 'Creación de una plataforma para administrar la carga de información genealógica de la empresa Sefar Universal, desarrollado en Laravel 8 con Jetstream y Livewire. Alojada en GoDaddy.',
					img: 'app_sefar.png',
					enlace: 'https://github.com/petrix12/AppSefarUniversal',
					repositorio: 'https://github.com/petrix12/AppSefarUniversal',
					data_filter: 'filter-web filter-destacados',
					anho: 2021,
					tecnologias: ['laravel', 'tailwindcss', 'github', 'godaddy']
				},
				{
					id: 19,
					titulo: 'Creación de un sistema base de roles y permisos',
					descripcion: 'Creación de una aplicación con un sistema de roles y permisos que sirve de base para el desarrollo de otras aplicaciones que requieran de esta modalidad. Esta aplicación se desarrollo principalmente con Larevel 8, Jetstream y Livewire.',
					img: 'roles_permisos2021.png',
					enlace: 'http://laravel-permission-2021.herokuapp.com/',
					repositorio: 'https://github.com/petrix12/laravel-permission2021',
					data_filter: 'filter-web filter-destacados',
					anho: 2021,
					tecnologias: ['laravel', 'jetstream', 'livewire', 'github']
				},
				{
					id: 18,
					titulo: 'Creación de una aplicación de árbol genealógico en Laravel 7',
					descripcion: 'Creación de una aplicación para consultar árboles genealógico. Aplicación desarrollada en Laravel 7 para la empresa Sefar Universal. Repositorios: ftm_sefar y arbol_sefar. Sitio web: App Genealogía Sefar',
					img: 'genealogia_sefar.png',
					enlace: 'https://www.youtube.com/watch?v=2VsGfquR7KU',
					enlace2: 'https://genealogiasefar.com/',
					repositorio: 'https://github.com/petrix12/ftm_sefar',
					repositorio2: 'https://github.com/petrix12/arbol_sefar',
					data_filter: 'filter-web filter-destacados',
					anho: 2020,
					tecnologias: ['laravel', 'php', 'html5', 'github']
				},
				{
					id: 17,
					titulo: 'Soluciones++: Creación de una página web con Blogger',
					descripcion: 'Desarrollo de un blog con tecnología Blogger, titulado Soluciones++, que trata sobre temas relacionados con propuestas de soluciones a problemas principalmente de desarrollo web y de aplicaciones informáticas.',
					img: 'solucionespp.png',
					enlace: 'https://solplusplus.blogspot.com',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2020,
					tecnologias: ['blogger', 'html5']
				},
				{
					id: 16,
					titulo: 'Subir archivos a la red con Laravel y almacenar sus datos en MySQL',
					descripcion: 'Desarrollo de una aplicación en Laravel para subir multiples archivos al sitio en donde se encuentra alojado el proyecto. Con este programa no solo se pretende subir multiples archivos, sino llevar un control de estos en una base de datos MySQL.',
					img: 'subir_archivos.png',
					enlace: 'https://solucionespp-file.herokuapp.com/',
					repositorio: '#',
					data_filter: 'filter-web',
					anho: 2020,
					tecnologias: ['laravel', 'php', 'mysql', 'heroku']
				},
				{
					id: 15,
					titulo: 'Soluciones Office: Creación de una página web con Facebook',
					descripcion: 'Desarrollo de una página web con Facebook, titulado Soluciones Office, que trata principalmente sobre temas relacionados con el desarrollo web y el desarrollo aplicaciones aplicaciones informáticas en general.',
					img: 'pag_facebook.png',
					enlace: 'https://www.facebook.com/solplusplus',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2020,
					tecnologias: ['facebook']
				},
				{
					id: 14,
					titulo: 'Aplicación Árbol Genealógico en Excel',
					descripcion: 'Aplicación desarrollada en Microsoft Excel y Visual Basic para Aplicaciones, para cargar un árbol genealógico.',
					img: 'app_excel.png',
					enlace: 'http://cvpetrix.herokuapp.com/descargas/arbol_excel/arbol.xlsm',
					repositorio: 'https://github.com/petrix12/arbol_excel2019',
					data_filter: 'filter-otros',
					anho: 2019,
					tecnologias: ['excel', 'vba']
				},
				{
					id: 13,
					titulo: 'Herramientas y Soluciones Office: Creación de una página web con Blogger',
					descripcion: 'Desarrollo de un blog con tecnología Blogger, titulado Herramientas y Soluciones Office, que trata principalmente temas relacionados con Microsoft Excel y Visual Basic para Aplicaciones.',
					img: 'hysoffice.png',
					enlace: 'https://toolssolucionesoffice.blogspot.com/',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2019,
					tecnologias: ['blogger', 'html5']
				},
				{
					id: 12,
					titulo: 'Edición y revisión de redacción del libro Color Esperanza',
					descripcion: 'Edición y redacción del libro Color Esperanza escrito por Isabel Bazó, en este proyecto se editó el libro con Microsoft Word, la caratula se trabajó en Microsoft PowerPoint, y finalmente se ensambló con Adobe Acrobat.',
					img: 'esperanza.png',
					enlace: 'http://cvpetrix.herokuapp.com/descargas/portafolio/Color%20Esperanza.pdf',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2019,
					tecnologias: ['word', 'powerpoint', 'pdf']
				},
				{
					id: 11,
					titulo: 'Automatización reportes PDVSA Comercio y Suministro',
					descripcion: 'Automatización de reportes de la Gerencia de Administración y Finanzas de PDVSA Comercio y Suministo con Microsoft Excel y Visual Basic para Aplicaciones.',
					img: 'pdvsa_cys.png',
					enlace: 'https://www.youtube.com/watch?v=TUydu-_D_yE',
					repositorio: 'https://github.com/petrix12/automatizacion_vba_2017',
					data_filter: 'filter-otros',
					anho: 2017,
					tecnologias: ['excel', 'vba', 'vb6']
				},
				{
					id: 10,
					titulo: 'Automatización reportes PDVSA Planificación Distrito San Tomé',
					descripcion: 'Automatización de reportes de guardias de la Superintendencia de Planificación, Presupuesto y Gestión del Distrito San Tomé con Microsoft Excel y Visual Basic para Aplicaciones.',
					img: 'guardia_stm.png',
					enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2015,
					tecnologias: ['excel', 'vba', 'vb6']
				},
				{
					id: 9,
					titulo: 'Edición y producción de un video sobre gestión de la calidad',
					descripcion: 'Edición y producción de un mini documental sobre la implementación de un sistema de gestión de la calidad en la Gerencia de Infraestructura y Procesos de Superficie de PDVSA San Tomé, desarrollado en Adobe Premiere, After Effects y Photoshop.',
					img: 'video_gips.png',
					enlace: 'https://www.youtube.com/watch?v=Bm49wbe4vdY',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2011,
					tecnologias: ['premiere', 'after_effects', 'photoshop']
				},
				{
					id: 8,
					titulo: 'Animación 3D actividades de la Gcia. Procesos de Superficie PDVSA San Tomé',
					descripcion: 'Video sobre las actividades de la Gerencia de Procesos de Superficie PDVSA San Tomé, el cual desarrollé y edité con mi compañero Félix Santaella por el año 2009. Pido disculpa por la política incluida, pero eso escapaba de mis manos. Espero que les guste.',
					img: 'gps.png',
					enlace: 'https://www.youtube.com/watch?v=T4K_YjPMG2s',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2009,
					tecnologias: ['3dsmax', 'premiere', 'after_effects', 'photoshop']
				},
				{
					id: 7,
					titulo: 'Animación 3D presentación del Templo de Media Legua',
					descripcion: 'Animación 3D para la recaudación de fondos para la construcción de la Iglesia San Juan María Vianney en Media Legua. Para el desarrollo de esta animación se utilizó principalmente AutoCAD, 3DS Max y la Suite de Adobe Creative.',
					img: 'media_legua.png',
					enlace: 'https://www.youtube.com/watch?v=lhEiIR0jjq4',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2009,
					tecnologias: ['3dsmax', 'premiere', 'photoshop', 'autocad']
				},
				{
					id: 6,
					titulo: 'Animación 3D video navideño Infraestructura Dacion',
					descripcion: 'Video navideño de la Superintendencia de Infraestructura Dacion PDVSA San Tomé, el cual desarrollé y edité en diciembre del año 2007 apoyandome en los programas de la Suite de Adobe Creative.',
					img: 'navidad2007.png',
					enlace: 'https://www.youtube.com/watch?v=tqk6xrtbNdY',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2007,
					tecnologias: ['3dsmax', 'premiere', 'after_effects', 'photoshop']
				},
				{
					id: 5,
					titulo: 'Automatización memorias descriptivas de líneas de flujo y de transferencia',
					descripcion: 'Automatización de memorias descriptivas de líneas de flujo y de transferencia del campo Dacion de PDVSA Distrito San Tomé con Microsoft Excel y Visual Basic para Aplicaciones.',
					img: 'memorias.png',
					enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2007,
					tecnologias: ['excel', 'vba', 'vb6']
				},
				{
					id: 4,
					titulo: 'Aplicación para el ajuste de datos experimentales con modelos no lineales',
					descripcion: 'En este trabajo se desarrolló una aplicación en Microsoft Visual C++ 6.0 junto con Digital Visual Fortran 6.0 el cual permite optimizar parámetros de modelos matemáticos lineales y no lineales de diversas complejidades.',
					img: 'tesis.png',
					enlace: 'http://cvpetrix.herokuapp.com/descargas/portafolio/tesis_ing.zip',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 2002,
					tecnologias: ['vcpp6', 'vf6', 'word', 'powerpoint']
				},
				{
					id: 3,
					titulo: 'Testimonio sobre la tragedia de Vargas del 15 de diciembre de 1999',
					descripcion: 'Escrito relatado en modo cronológico sobre mis vivencias durante la tragedia de Vargas del 15 de diciembre de 1999. Este escrito se realizó a pocos días de lo ocurrido para evitar olvidar detalles que luego se podrían borrar con el tiempo.',
					img: 'tragedia99.png',
					enlace: 'https://petrix12.github.io/tragedia99',
					repositorio: 'https://petrix12.github.io/tragedia99',
					data_filter: 'filter-otros filter-destacados',
					anho: 1999,
					tecnologias: ['word']
				},
				{
					id: 2,
					titulo: 'Resolución de problemas de programación en Pascal, C, C++ y Visual Basic 6.0',
					descripcion: 'En este apartado se presentan repositorios en GitHub con problemas de programación orientado a estudiantes de ingenieria, con la finalidad de ejercitar la lógica de programación.',
					img: 'logica.png',
					enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 1995,
					tecnologias: ['pascal', 'c', 'cpp', 'vb6']
				},
				{
					id: 1,
					titulo: 'Resolución de problemas en el lenguaje UserRPL',
					descripcion: 'En este apartado se presentan repositorios en GitHub con problemas resueltos en el lenguaje UserRPL, que es el empleado en las calculadoras gráficas HP48G.',
					img: 'user_rpl.png',
					enlace: 'http://cvpetrix.herokuapp.com/en_construccion',
					repositorio: '#',
					data_filter: 'filter-otros',
					anho: 1993,
					tecnologias: ['hp']
				}
			]
		},
		clients: {
			entes: [
				{
					id: 15,
					nombre: 'sefar'
				},
				{
					id: 14,
					nombre: 'pdvsa'
				},
				{
					id: 13,
					nombre: 'ugma'
				},
				{
					id: 12,
					nombre: 'digit'
				},
				{
					id: 11,
					nombre: 'agrotecnica'
				},
				{
					id: 10,
					nombre: 'costa_consultores'
				},
				{
					id: 9,
					nombre: 'proynca'
				},
				{
					id: 8,
					nombre: 'eni'
				},
				{
					id: 7,
					nombre: 'dacion'
				},
				{
					id: 6,
					nombre: 'los_arcos'
				},
				{
					id: 5,
					nombre: 'verbal'
				},
				{
					id: 4,
					nombre: 'ucv'
				},
				{
					id: 3,
					nombre: 'ing_ucv'
				},
				{
					id: 2,
					nombre: 'dioc'
				},
				{
					id: 1,
					nombre: 'ucv_petroleo'
				}
			],
			experiencias: [
				{
					id: 17,
					inicio_mes: 'Ago',
					inicio_anho: '2019',
					fin_mes: 'Actual',
					fin_anho: 'Actual',
					cargo: 'Líder de Control y Seguimiento y Desarrollador Web',
					descripcion: 'Realizar seguimiento a los procesos de captación de clientes y desarrollo de aplicaciones web, usando Laravel y Vue.js como principales Framework de desarrollo.',
					empresa: 'Sefar Universal S.L. Modalidad remoto.',
					img: '',
					logos: ['sefar']
				},
				{
					id: 16,
					inicio_mes: 'May',
					inicio_anho: '2016',
					fin_mes: 'Jul',
					fin_anho: '2021',
					cargo: 'Analista Mayor de Presupuesto',
					descripcion: 'Consolidar ejercicios presupuestarios de operaciones, inversiones y compras. Automatización de reportes con VBA, Delphi, Access y MySQL. Cargar en SAP las cifras de los resultados obtenidos.',
					empresa: 'Petróleos de Venezuela C.A. (PDVSA). Gerencia de Administración y Finanzas PDVSA Comercio y Suministro. La Campiña. Caracas.',
					img: '',
					logos: ['pdvsa']
				},
				{
					id: 15,
					inicio_mes: 'Mar',
					inicio_anho: '2014',
					fin_mes: 'May',
					fin_anho: '2016',
					cargo: 'Analista de Presupuesto',
					descripcion: 'Asignación del presupuesto de operaciones e inversiones, optimizando el uso de los recursos asignados, y automatización de reportes con VBA, VB6, SQL Server y Access.',
					empresa: 'Petróleos de Venezuela C.A. (PDVSA). Gerencia de Planificación Presupuesto y Gestión. Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['pdvsa']
				},
				{
					id: 14,
					inicio_mes: 'Mar',
					inicio_anho: '2008',
					fin_mes: 'Feb',
					fin_anho: '2015',
					cargo: 'Profesor de Programación',
					descripcion: 'Impartir clases de programación en Visual Basic 6, Visual Basic para Aplicaciones y su conexión con bases de datos.',
					empresa: 'Universidad Gran Mariscal de Ayacucho (UGMA). El Tigre. Estado Anzoátegui.',
					img: '',
					logos: ['ugma']
				},
				{
					id: 13,
					inicio_mes: 'Ene',
					inicio_anho: '2010',
					fin_mes: 'Mar',
					fin_anho: '2014',
					cargo: 'Supervisor de Presupuesto',
					descripcion: 'Verificar el cumplimiento de la correcta aplicación de los cargos al presupuesto de inversión y de gastos. Evaluar, recomendar, alertar acciones y automatización de reportes con VBA y Access.',
					empresa: 'Petróleos de Venezuela C.A. (PDVSA). Gerencia de Procesos de Superficie. Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['pdvsa']
				},
				{
					id: 12,
					inicio_mes: 'Ene',
					inicio_anho: '2009',
					fin_mes: 'Ene',
					fin_anho: '2010',
					cargo: 'Planificador de proyectos',
					descripcion: 'Aplicar procedimientos para planificar proyectos de inversiones y realizar el seguimiento físico y financiero en sus diferentes fases, y automatización de reportes con Delphi y VBA.',
					empresa: 'Petróleos de Venezuela C.A. (PDVSA). Superintendencia de Construcción de Obras Electromecánicas. Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['pdvsa']
				},
				{
					id: 11,
					inicio_mes: 'Feb',
					inicio_anho: '2008',
					fin_mes: 'Ene',
					fin_anho: '2009',
					cargo: 'Planificador de proyectos',
					descripcion: 'Aplicar procedimientos para planificar proyectos de inversiones y realizar el seguimiento físico y financiero en sus diferentes fases.',
					empresa: 'Digit Automatización. Superintendencia de Construcción de Obras Electromecánicas. Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['digit', 'pdvsa']
				},
				{
					id: 10,
					inicio_mes: 'Jul',
					inicio_anho: '2007',
					fin_mes: 'Feb',
					fin_anho: '2008',
					cargo: 'Controlador físico de proyectos',
					descripcion: 'Control y seguimiento a las actividades de los proyectos. Consolidar y analizar los reportes de avance de obras de proyectos.',
					empresa: 'Agrotécnica Aguilera C.A. Superintendencia de Infraestructura Mediano. Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['agrotecnica', 'pdvsa']
				},
				{
					id: 9,
					inicio_mes: 'Sep',
					inicio_anho: '2006',
					fin_mes: 'Jul',
					fin_anho: '2007',
					cargo: 'Inspector de Construcción',
					descripcion: 'Diseñar y supervisar la construcción de líneas de flujo y transferencia. Elaborar Memorias Descriptivas asociadas a los proyectos de líneas de flujo.',
					empresa: 'Costa Consultores 2030 C.A. Departamento de Infraestructura Dacion. Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['costa_consultores', 'pdvsa', 'dacion']
				},
				{
					id: 8,
					inicio_mes: 'Abr',
					inicio_anho: '2006',
					fin_mes: 'Sep',
					fin_anho: '2006',
					cargo: 'Líder de Construcción',
					descripcion: 'Diseño y simulación de líneas de flujo (Hysys ‐ Pipephase). Elaboración de Memorias Descriptivas para construcción de líneas y Evaluaciones Económicas para los Proyectos de líneas de flujo.',
					empresa: 'PROYNCA. Procesos y Negocios Integrales C.A. Departamento de Infraestructura Dacion Distrito San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['proynca', 'pdvsa', 'dacion']
				},
				{
					id: 7,
					inicio_mes: 'Ago',
					inicio_anho: '2004',
					fin_mes: 'Abr',
					fin_anho: '2006',
					cargo: 'Ingeniero de Procesos',
					descripcion: 'Seguimiento a los proyectos de Ingeniería. Elaboración de Manuales de Operación de estaciones petroleras. Elaboración de planos de procesos (PFD). Sugerencias de mejoras al proceso de tratamiento de crudo.',
					empresa: 'PROYNCA. Procesos y Negocios Integrales C.A. Departamento de Ingenieria ENI Dacion. San Tomé. Estado Anzoátegui.',
					img: '',
					logos: ['proynca', 'eni', 'dacion']
				},
				{
					id: 6,
					inicio_mes: 'Ene',
					inicio_anho: '2004',
					fin_mes: 'Ago',
					fin_anho: '2004',
					cargo: 'Profesor de Matemáticas',
					descripcion: 'Encargado de dictar clases de matemáticas a cuatro secciones de estudiantes de 8vo grado.',
					empresa: 'U. E. Colegio Los Arcos. Urb. La Esmeralda. Baruta.',
					img: '',
					logos: ['los_arcos']
				},
				{
					id: 5,
					inicio_mes: 'Ago',
					inicio_anho: '2002',
					fin_mes: 'Sep',
					fin_anho: '2004',
					cargo: 'Instructor de cursos preuniversitarios',
					descripcion: 'Encargado de dictar clases de habilidad numérica, física, química y razonamiento mecánico en algunas unidades educativas de Venezuela, como el Colegio “Los Arcos” (Edo. Miranda), Colegio “La Concepción” (Edo. Miranda) y Colegio “Guayamurí” (Margarita).',
					empresa: 'VERBAL. Corporación Educativa. Chacao.',
					img: '',
					logos: ['verbal']
				},
				{
					id: 4,
					inicio_mes: 'Mar',
					inicio_anho: '2003',
					fin_mes: 'Sep',
					fin_anho: '2003',
					cargo: 'Supervisor de obras de mantenimiento',
					descripcion: 'Supervisar y velar que las instalaciones de algunas organizaciones y viviendas se encontrasen en perfecto estado de funcionamiento.',
					empresa: 'Valle de Aramín S.L.U. Empresa de Construcción y Mantenimiento. Oviedo. España.',
					img: '',
					logos: ['generico']
				},
				{
					id: 3,
					inicio_mes: 'Mar',
					inicio_anho: '1996',
					fin_mes: 'Dic',
					fin_anho: '2002',
					cargo: 'Preparador de programación',
					descripcion: 'Asistir a los estudiantes en los laboratorios de microcomputadores, en Programación (C/C++, Pascal y Delphi), AutoCAD, Access, Excel y Word.',
					empresa: 'Departamento de Investigación de Operaciones y Computación (DIOC). Escuela Básica. Facultad de Ingenieria. Universidad Central de Venezuela. Ciudad Universitaria. Caracas.',
					img: '',
					logos: ['ucv', 'ing_ucv', 'dioc']
				},
				{
					id: 2,
					inicio_mes: 'Mar',
					inicio_anho: '1995',
					fin_mes: 'Mar',
					fin_anho: '1996',
					cargo: 'Encargado de sala de computadoras',
					descripcion: 'Encargado de asistir técnicamente a los usuarios de la sala de micros, y procurar el correcto funcionamiento de los equipos mediante el mantenimiento de software y hardware.',
					empresa: 'Dirección de Petróleo y Sala de Micros. Escuela de Ingeniería de Petróleo. Facultad de Ingenieria. Universidad Central de Venezuela. Ciudad Universitaria. Caracas.',
					img: '',
					logos: ['ucv', 'ucv_ing_pet']
				},
				{
					id: 1,
					inicio_mes: 'Ago',
					inicio_anho: '1993',
					fin_mes: 'Sep',
					fin_anho: '1995',
					cargo: 'Preparador de matemáticas y asistente en talleres vacacionales',
					descripcion: 'Asistente de los eventos en los talleres vacacionales para niños y niñas entre 7 y 12 años y encargado de dictar clases de reparación de matemáticas a estudiantes de 7mo a 9no grado de algunas unidades educativas del Estado Vargas.',
					empresa: 'APROFAM (Asociación Promoción Familia). Institución financiada por PDVSA. Macuto. Estado Vargas.',
					img: '',
					logos: ['pdvsa']
				}
			]
		},
		testimonials: [
			{
				id: 1,
				testigo: 'Wiston Rodríguez',
				testimonio: 'Mi experiencia con Pedro ha sido inmejorable. Es muy profesional y absolutamente comprometido con todos los temas que le hemos encargado. De hecho, es la referencia principal para nuestros clientes en materia de desarrollo Web y de aplicaciones.',
				ocupacion: 'Ingeniero de Procesos',
				activo: true
			},
			{
				id: 2,
				testigo: 'Jorge Kaffure',
				testimonio: 'Personalmente, pienso que gracias a su estrategia para automatizar toda la información presupuestaria, hemos logrado ahorrar una gran cantidad de horas hombres.',
				ocupacion: 'Analista de Presupuesto',
				activo: true
			},
			{
				id: 3,
				testigo: 'Leticia Rodríguez',
				testimonio: 'Lo considero serio, eficiente, creativo y siempre al servicio del cliente ante cualquier duda o consulta, con un trato y una amabilidad que valoro increiblemente. En definitiva es un muy buen profesional.',
				ocupacion: 'Analista de Genealogía',
				activo: true
			},
			{
				id: 4,
				testigo: 'Jorge Aparicio',
				testimonio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat fugit nulla quas nemo ipsa sequi vero beatae sapiente aliquam, officia atque ullam cumque, aperiam in dolorem quidem eos saepe esse.',
				ocupacion: 'Gerente de Comercio y Suministro',
				activo: false
			},
			{
				id: 5,
				testigo: 'Rosa Canelón',
				testimonio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum harum accusantium quasi aperiam, qui provident odio fugit commodi, cumque voluptates, ex blanditiis? Ipsum minima neque aliquid illum laboriosam voluptatum vero.',
				ocupacion: 'Profesora de Matemáticas',
				activo: false
			},
			{
				id: 6,
				testigo: 'Carlos Zanella',
				testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero ullam explicabo amet porro earum assumenda voluptatem facilis quis minima unde, eius dolorem voluptatum iure corporis vel maiores accusamus fugiat.',
				ocupacion: 'Analista de Presupuesto',
				activo: false
			},
			{
				id: 7,
				testigo: 'Marielys Sánchez',
				testimonio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aspernatur ducimus qui, pariatur placeat ipsam sunt, aut corrupti rem enim fugit veniam dolorum repudiandae eveniet, error omnis quos quis voluptates!',
				ocupacion: 'Gerente de Administración y Finanzas',
				activo: false
			},
			{
				id: 8,
				testigo: 'Guillermo Bazó',
				testimonio: 'Todo un ingeniero. Cuenta con muchos recursos adquiridos en la vida (Liceo Militar, Escuela Básica de FFAANN, Escuela de Aviación Militar: Subordinación y disciplina), sobreviviente de la Tragedia de Vargas y un excelente matrimonio. Lo recomiendo con los ojos cerrados. Q.D.L.B.',
				ocupacion: 'Jubilado de la Electricidad de Caracas',
				activo: true
			},
			{
				id: 9,
				testigo: 'Felix Santaella',
				testimonio: 'Necesitábamos una aplicación que cubriera las necesidades de gestión de mi empresa para llevar un mejor control interno. El trato y la calidad a lo largo de todo el proceso fue perfecto. Cuesta encontrar profesionales que se adapten tan bien a lo que necesitas!',
				ocupacion: 'Gerente de Planificación, Presupuesto y Gestión',
				activo: true
			},
			{
				id: 10,
				testigo: 'Penélope Laucho',
				testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora, deleniti delectus repellat unde maxime nemo, pariatur hic iste eius placeat corrupti. Fuga sed at esse facere fugit, asperiores pariatur.',
				ocupacion: 'Superintendente de Presupuesto',
				activo: false
			},
			{
				id: 11,
				testigo: 'Isabel Bazó',
				testimonio: 'Dejé en sus manos la creación de mi página web, sin duda ha sido un acierto. Su asesoramiento y profesionalidad nos han dotado de un gran valor agregado. Una imagen que es la mejor tarjeta de presentación.',
				ocupacion: 'Community Manager',
				activo: true
			},
			{
				id: 12,
				testigo: 'Miguel Herrera',
				testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea ab. Omnis atque vero ea laudantium, nihil dolore inventore reiciendis dignissimos, maiores amet dolor ab repellendus suscipit perferendis nulla nostrum.',
				ocupacion: 'Gerente IT Sefar Universal',
				activo: false
			},
			{
				id: 13,
				testigo: 'David Farias',
				testimonio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt excepturi rerum ipsum accusamus et tempore ab magni asperiores libero vero consequuntur dolor nobis facere itaque ea quidem, sed ipsa quasi.',
				ocupacion: 'Desarrollador Web',
				activo: false
			},
			{
				id: 14,
				testigo: 'Dickison Pataquero',
				testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque numquam sequi ut. Et minima pariatur laudantium sequi eos iusto ipsum qui harum, quia ullam eligendi ad, distinctio consequuntur quaerat?',
				ocupacion: 'Desarrollador WordPress',
				activo: false
			},
			{
				id: 15,
				testigo: 'Nayibi Primera',
				testimonio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quo consequatur molestias voluptates officia laborum quis quibusdam aperiam! Quasi excepturi recusandae saepe perferendis eligendi veritatis similique aut praesentium nemo deserunt?',
				ocupacion: 'Gerente de Operaciones',
				activo: false
			},
			{
				id: 16,
				testigo: 'Abelardo Bazó',
				testimonio: 'De mi experiencia con Pedro destacaría su rigor profesional, eficiencia y extraordinaria capacidad de adaptarse e identificar lo que el cliente necesita y desea, y que a veces ni siquiera sabe cómo plantear.',
				ocupacion: 'Párroco de Diócesis de La Guaira',
				activo: true
			},
			{
				id: 17,
				testigo: 'David Rodríguez',
				testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque minima et voluptatibus dolores mollitia provident repellendus, iure tempora tenetur deleniti neque in cum aliquid quas nisi voluptate, iusto necessitatibus?',
				ocupacion: 'Bibliotecólogo',
				activo: false
			},
			{
				id: 18,
				testigo: 'Emily Morón',
				testimonio: 'La creación de nuestra página web ha sido todo un éxito gracias a Pedro, una persona muy responsable y fiel con sus clientes. Nos ha hecho un gran trabajo sin duda.',
				ocupacion: 'Comunicadora Social',
				activo: true
			}
		]
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})