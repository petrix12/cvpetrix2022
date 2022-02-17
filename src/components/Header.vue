<template>
    <div>
		<header id="header">
			<div class="container-fluid">
				<div id="logo" class="pull-left">
                    <!-- Descomente a continuación si prefiere usar un logotipo de texto -->
					<!-- <h1><a href="#intro" class="scrollto">Soluciones++</a></h1> -->
					<!-- Descomente a continuación si prefiere usar un logotipo de imagen -->
					<a href="#intro"><img src="img/logo-completo-sm.png" alt="Logo de la aplicación" title="" height="35" /></a>
				</div>
				<nav id="nav-menu-container">
					<ul class="nav-menu">
						<li class="menu-active"><a href="#intro">Inicio</a></li>
						<li><a href="#portfolio">Portafolio</a></li>
						<li><a href="#services">Servicios</a></li>
						<li><a href="#about">Experiencia</a></li>
						<li><a href="#team">Estudios</a></li>
						<!--
                        <li class="menu-has-children"><a href="">Drop Down</a>
							<ul>
								<li><a href="#">Drop Down 1</a></li>
								<li><a href="#">Drop Down 3</a></li>
								<li><a href="#">Drop Down 4</a></li>
								<li><a href="#">Drop Down 5</a></li>
							</ul>
						</li>
                        -->
						<li><a href="#contact">Contáctame</a></li>
					</ul>
				</nav>
			</div>
		</header>
    </div>
</template>

<script>
export default {
	name: 'Header'
}
</script>