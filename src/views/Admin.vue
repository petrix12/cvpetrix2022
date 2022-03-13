<template>
    <div>
        <div class="container-scroller">
            <!-- partial:partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item profile">
                        <div class="profile-desc">
                            <div class="profile-pic">
                                <div class="count-indicator">
                                    <img class="img-xs rounded-circle " src="img/apple-touch-icon.png" alt="Logo">
                                    <span class="count bg-success"></span>
                                </div>
                                <div class="profile-name">
                                    <h5 class="mb-0 font-weight-normal">{{ datos.empresa }}</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item nav-category">
                        <span class="nav-link">Personalizar</span>
                    </li>
                    <!-- datos - contact - footer -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-account-check"></i>
                            </span>
                            <span class="menu-title">Datos generales</span>
                        </a>
                    </li>
                    <!-- intro -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-account-card-details"></i>
                            </span>
                            <span class="menu-title">Datos introductorios</span>
                        </a>
                    </li>
                    <!-- destacados - servicios -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-playlist-play"></i>
                            </span>
                            <span class="menu-title">Servicios</span>
                        </a>
                    </li>
                    <!-- calidad -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-table-large"></i>
                            </span>
                            <span class="menu-title">Política de calidad</span>
                        </a>
                    </li>
                    <!-- accion -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-chart-bar"></i>
                            </span>
                            <span class="menu-title">Call To Action</span>
                        </a>
                    </li>
                    <!-- skills -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-application"></i>
                            </span>
                            <span class="menu-title">Principales Stacks</span>
                        </a>
                    </li>
                    <!-- facts - cursos -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-security"></i>
                            </span>
                            <span class="menu-title">Cursos</span>
                            <i class="menu-arrow"></i>
                        </a>
                    </li>
                    <!-- portafolio -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-file-document-box"></i>
                            </span>
                            <span class="menu-title">Portafolio</span>
                        </a>
                    </li>
                    <!-- clients -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-altimeter"></i>
                            </span>
                            <span class="menu-title">Logo de empresas</span>
                        </a>
                    </li>
                    <!-- testimonials -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-account-multiple-plus"></i>
                            </span>
                            <span class="menu-title">Testimoniales</span>
                        </a>
                    </li>
                    <!-- formacion -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-book-open-page-variant"></i>
                            </span>
                            <span class="menu-title">Estudios</span>
                        </a>
                    </li>
                    <!-- sociales -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-emoticon-cool"></i>
                            </span>
                            <span class="menu-title">Redes sociales</span>
                        </a>
                    </li>
                    <!-- imagenes -->
                    <li class="nav-item menu-items">
                        <a class="nav-link" href="#">
                            <span class="menu-icon">
                                <i class="mdi mdi-file-image"></i>
                            </span>
                            <span class="menu-title">Imagenes</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- partial -->
            <div class="container-fluid page-body-wrapper bg-dark">
                <!-- partial:partials/_navbar.html -->
                <nav class="navbar p-0 fixed-top d-flex flex-row">
                    <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                        <ul class="navbar-nav navbar-nav-right">
                            <li class="nav-item dropdown">
                                <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                                    <div class="navbar-profile">
                                        <img class="img-xs rounded-circle" src="img/autor.jpg" alt="">
                                        <p class="mb-0 d-none d-sm-block navbar-profile-name">{{ datos.nombre1 }} {{ datos.apellido1 }}</p>
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
                                            <p class="preview-subject mb-1 text-perfil">Salir</p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- partial -->
                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="row">
                            <div class="col-12 grid-margin stretch-card">
                                <div class="card corona-gradient-card">
                                    <div class="card-body py-0 px-0 px-sm-3">
                                        <div class="row align-items-center">
                                            <div class="col-4 col-sm-3 col-xl-2">
                                                <img src="img/desarrollo-web.png" class="gradient-corona-img img-fluid" alt="Imagen Desarrollo Web">
                                            </div>
                                            <div class="col-5 col-sm-7 col-xl-8 p-0">
                                                <h4 class="mb-1 mb-sm-0 color-empresa">{{ datos.empresa }}</h4>
                                                <p class="mb-0 font-weight-normal d-none d-sm-block color-empresa">{{ datos.frase }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-12 grid-margin">
                                <div class="card bg-dark">
                                    <div class="card-body">
                                        <h4 class="card-title">Order Status</h4>
                                        <div class="table-responsive">
                                            <table class="table text-white">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </th>
                                                        <th class="text-warning"> Client Name </th>
                                                        <th class="text-warning"> Order No </th>
                                                        <th class="text-warning"> Product Cost </th>
                                                        <th class="text-warning"> Project </th>
                                                        <th class="text-warning"> Payment Mode </th>
                                                        <th class="text-warning"> Start Date </th>
                                                        <th class="text-warning"> Payment Status </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="assets/images/faces/face1.jpg" alt="image" />
                                                            <span class="pl-2">Henry Klein</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Dashboard </td>
                                                        <td> Credit card </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-success">Approved</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check form-check-muted m-0">
                                                                <label class="form-check-label">
                                                                <input type="checkbox" class="form-check-input">
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img src="assets/images/faces/face2.jpg" alt="image" />
                                                            <span class="pl-2">Estella Bryan</span>
                                                        </td>
                                                        <td> 02312 </td>
                                                        <td> $14,500 </td>
                                                        <td> Website </td>
                                                        <td> Cash on delivered </td>
                                                        <td> 04 Dec 2019 </td>
                                                        <td>
                                                            <div class="badge badge-outline-warning">Pending</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="footer">
                        <div class="d-sm-flex justify-content-center justify-content-sm-between">
                            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
                                &copy; Copyright <strong>{{ footer.empresa }}</strong>. All Rights Reserved
                            </span>
                            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                                Una muy buena opción para el <router-link to="/">{{ footer.actividad }}</router-link>
                            </span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Admin',
    computed: {
        ...mapState(['datos', 'footer'])
    }
}
</script>

<style scoped>
    .text-perfil{
        color: rgb(44, 41, 41) !important;
    }
    .text-perfil:hover{
        color: rgb(49, 49, 110) !important;
    }
    .color-empresa{
        color: white;
    }
</style>