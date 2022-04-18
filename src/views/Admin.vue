<template>
    <div class="container-scroller">
		<nav class="sidebar sidebar-offcanvas" id="sidebar">
			<div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
				<a href="index.html" class="sidebar-brand brand-logo">
					<img src="img/logo-completo-sm.png" alt="logo" class="logo" />
				</a>
				<a href="index.html" class="sidebar-brand brand-logo-mini">
					<img src="img/apple-touch-icon.png" alt="logo" class="logo" />
				</a>
			</div>
			<ul class="nav">
				<li class="nav-item profile">
					<div class="profile-desc">
						<div class="profile-pic">
							<div class="count-indicator">
								<img class="img-xs rounded-circle " src="img/autor.jpg" alt="Autor">
								<span class="count bg-success"></span>
							</div>
							<div class="profile-name">
								<h5 class="mb-0 font-weight-normal">{{ datos.nombre1 }} {{ datos.apellido1 }}</h5>
								<span>Administrador</span>
							</div>
						</div>
					</div>
				</li>
				<li class="nav-item nav-category">
					<span class="nav-link">Personalizar</span>
				</li>
				<!-- datos - contact - footer -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('datos')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-account-check"></i>
						</span>
						<span class="menu-title">Datos generales</span>
					</a>
				</li>
				<!-- intro -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('intro')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-account-card-details"></i>
						</span>
						<span class="menu-title">Datos introductorios</span>
					</a>
				</li>
				<!-- destacados - servicios -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('servicios')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-playlist-play"></i>
						</span>
						<span class="menu-title">Servicios</span>
					</a>
				</li>
				<!-- calidad -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('calidad')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-table-large"></i>
						</span>
						<span class="menu-title">Política de calidad</span>
					</a>
				</li>
				<!-- accion -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('accion')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-chart-bar"></i>
						</span>
						<span class="menu-title">Call To Action</span>
					</a>
				</li>
				<!-- skills -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('skills')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-application"></i>
						</span>
						<span class="menu-title">Principales Stacks</span>
					</a>
				</li>
				<!-- facts - cursos -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('cursos')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-security"></i>
						</span>
						<span class="menu-title">Cursos</span>
						<i class="menu-arrow"></i>
					</a>
				</li>
				<!-- portafolio -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('portafolio')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-file-document-box"></i>
						</span>
						<span class="menu-title">Portafolio</span>
					</a>
				</li>
				<!-- clients -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('clients')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-altimeter"></i>
						</span>
						<span class="menu-title">Logos de empresas</span>
					</a>
				</li>
				<!-- testimonials -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('testimonials')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-account-multiple-plus"></i>
						</span>
						<span class="menu-title">Testimoniales</span>
					</a>
				</li>
				<!-- formacion -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('formacion')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-book-open-page-variant"></i>
						</span>
						<span class="menu-title">Estudios</span>
					</a>
				</li>
				<!-- sociales -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('sociales')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-emoticon-cool"></i>
						</span>
						<span class="menu-title">Redes sociales</span>
					</a>
				</li>
				<!-- imagenes -->
				<li class="nav-item menu-items">
					<a class="nav-link" @click="vista('imagenes')" style="cursor: pointer">
						<span class="menu-icon">
							<i class="mdi mdi-file-image"></i>
						</span>
						<span class="menu-title">Imagenes</span>
					</a>
				</li>
			</ul>
		</nav>
		<div class="container-fluid page-body-wrapper">
			<nav class="navbar p-0 fixed-top d-flex flex-row">
				<div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
					<a href="index.html" class="navbar-brand brand-logo-mini">
						<img src="/img/apple-touch-icon.png" alt="logo" class="logo" />
					</a>
				</div>
				<div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
					<button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
						<span class="mdi mdi-menu"></span>
					</button>
					<ul class="navbar-nav navbar-nav-right">
						<li class="nav-item dropdown">
							<a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
								<div class="navbar-profile">
									<img class="img-xs rounded-circle" src="img/autor.jpg" alt="autor">
									<p class="mb-0 d-none d-sm-block navbar-profile-name">
										{{ datos.nombre1 }} {{ datos.apellido1 }}
									</p>
									<i class="mdi mdi-menu-down d-none d-sm-block"></i>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
								<div class="dropdown-divider"></div>
								<a class="dropdown-item preview-item">
									<div class="preview-thumbnail">
										<div class="preview-icon bg-dark rounded-circle">
											<i class="mdi mdi-logout text-danger"></i>
										</div>
									</div>
									<div class="preview-item-content">
										<p class="preview-subject mb-1">Salir</p>
									</div>
								</a>
							</div>
						</li>
					</ul>
					<button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
						<span class="mdi mdi-format-line-spacing"></span>
					</button>
				</div>
			</nav>
			<div class="main-panel">
				<div class="content-wrapper">
					<div class="row">
						<div class="col-12 grid-margin stretch-card">
							<div class="card corona-gradient-card">
								<div class="card-body py-0 px-0 px-sm-3">
									<div class="row align-items-center">
										<div class="col-4 col-sm-3 col-xl-2">
											<img src="img/desarrollo-web.png" class="gradient-corona-img img-fluid" alt="imagen de desarrollo web">
										</div>
										<div class="col-5 col-sm-7 col-xl-8 p-0">
											<h4 class="mb-1 mb-sm-0">{{ datos.empresa }}</h4>
											<p class="mb-0 font-weight-normal d-none d-sm-block">{{ datos.frase }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- AQUÍ VA LA VISTA -->
					<div v-if="vista_actual === 'datos'">
						Datos generales
					</div>
					<div v-else-if="vista_actual === 'intro'">
						Datos introductorios
					</div>
					<div v-else-if="vista_actual === 'servicios'">
						Servicios
					</div>
					<div v-else-if="vista_actual === 'calidad'">
						Política de calidad
					</div>
					<div v-else-if="vista_actual === 'accion'">
						Call To Action
					</div>
					<div v-else-if="vista_actual === 'skills'">
						Principales Stacks
					</div>
					<div v-else-if="vista_actual === 'cursos'">
						<Cursos />
					</div>
					<div v-else-if="vista_actual === 'portafolio'">
						Portafolio
					</div>
					<div v-else-if="vista_actual === 'clients'">
						Logos de empresas
					</div>
					<div v-else-if="vista_actual === 'testimonials'">
						Testimoniales
					</div>
					<div v-else-if="vista_actual === 'formacion'">
						Estudios
					</div>
					<div v-else-if="vista_actual === 'sociales'">
						Redes sociales
					</div>
					<div v-else-if="vista_actual === 'imagenes'">
						Imagenes
					</div>
					<div v-else>
						Vista por defecto
					</div>
				</div>
				<footer class="footer">
					<div class="d-sm-flex justify-content-center justify-content-sm-between">
						<span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
							&copy; Copyright <strong>{{ footer.empresa }}</strong>. All Rights Reserved
						</span>
						<span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
							<!-- Una muy buena opción para el <router-link to="/">{{ footer.actividad }}</router-link> -->
							Una muy buena opción para el <a href="index.html">{{ footer.actividad }}</a>
						</span>
					</div>
				</footer>
			</div>
		</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
/* import '@/assets/admin/vendors/js/vendor.bundle.base.js' */
import '@/assets/admin/vendors/chart.js/Chart.min.js'
import '@/assets/admin/vendors/jvectormap/jquery-jvectormap.min.js'
import '@/assets/admin/vendors/jvectormap/jquery-jvectormap-world-mill-en.js'
import '@/assets/admin/vendors/progressbar.js/progressbar.min.js'
import '@/assets/admin/vendors/owl-carousel-2/owl.carousel.min.js'
import '@/assets/admin/js/off-canvas.js'
import '@/assets/admin/js/hoverable-collapse.js'
import '@/assets/admin/js/misc.js'
import '@/assets/admin/js/settings.js'
import '@/assets/admin/js/todolist.js'
/* import '@/assets/admin/js/dashboard.js' */

import Cursos from '@/components/Admin/Cursos'

export default {
	name: 'Admin',
	data() {
		return {
			vista_actual: 'vista'
		}
	},
	components: {
		Cursos
	},
    computed: {
        ...mapState(['datos', 'footer'])
    },
	methods: {
		vista(modo){
			this.vista_actual = modo
		}
	}
}
</script>

<style scoped>
    @import '../assets/admin/vendors/mdi/css/materialdesignicons.min.css';
    @import '../assets/admin/vendors/css/vendor.bundle.base.css';
    @import '../assets/admin/vendors/jvectormap/jquery-jvectormap.css';
    @import '../assets/admin/vendors/flag-icon-css/css/flag-icon.min.css';
    @import '../assets/admin/vendors/owl-carousel-2/owl.carousel.min.css';
    @import '../assets/admin/vendors/owl-carousel-2/owl.theme.default.min.css';
    @import '../assets/admin/css/style.css';

	.logo {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
</style>