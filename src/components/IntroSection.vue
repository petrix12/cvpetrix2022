<template>
	<div>
		<section id="intro">
			<div class="intro-container">
				<div id="introCarousel" class="carousel slide carousel-fade" data-ride="carousel">
					<ol class="carousel-indicators"></ol>
					<div class="carousel-inner" role="listbox">
						<div class="carousel-item active" style="background-image: url('img/intro-carousel/1.jpg');">
							<div class="carousel-container">
								<div class="carousel-content">
									
									<div class="slider-info banner-view text-center">
										<div class="banner-info container">
											<img src="img/autor.jpg" alt="Autor de la página" class="img-fluid rounded-circle border border-white">
										</div>
									</div>

									<h2>{{ intro.titulo1 }}</h2>
									<p>{{ intro.descripcion1 }}</p>
									<a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
								</div>
							</div>
						</div>
						<div class="carousel-item" style="background-image: url('img/intro-carousel/2.jpg');">
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>{{ intro.titulo2 }}</h2>
									<p>{{ intro.descripcion2 }}</p>
									<a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
								</div>
							</div>
						</div>
						<div class="carousel-item" style="background-image: url('img/intro-carousel/3.jpg');">
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>{{ intro.titulo3 }}</h2>
									<p>{{ intro.descripcion3 }}</p>
									<a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
								</div>
							</div>
						</div>
						<div class="carousel-item" style="background-image: url('img/intro-carousel/4.jpg');">
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>{{ intro.titulo4 }}</h2>
									<p>{{ intro.descripcion4 }}</p>
									<a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
								</div>
							</div>
						</div>
						<div class="carousel-item" style="background-image: url('img/intro-carousel/5.jpg');">
							<div class="carousel-container">
								<div class="carousel-content">
									<h2>{{ intro.titulo5 }}</h2>
									<p>{{ intro.descripcion5 }}</p>
									<a href="#featured-services" class="btn-get-started scrollto">Empezar</a>
								</div>
							</div>
						</div>
					</div>

					<a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Anterior</span>
					</a>

					<a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
						<span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Siguiente</span>
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'IntroSection',
    computed: {
        ...mapState(['intro'])
    },
}
</script>