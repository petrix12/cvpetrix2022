<template>
	<div>
		<footer id="footer">
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 footer-info">
							<h3><img src="img/logo-completo-sm.png" alt="Logo de la aplicación" title="" height="30" /></h3>
							<p>{{ footer.texto }}</p>
						</div>
						<div class="col-lg-3 col-md-6 footer-links">
							<h4>Enlaces de utilidad</h4>
							<ul>
								<li><i class="ion-ios-arrow-right"></i> <a href="#intro">Inicio</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#portfolio">Portafolio</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#services">Servicios</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#clients">Experiencia</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#team">Estudios</a></li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-6 footer-contact">
							<h4>Contáctame</h4>
							<p>
								{{ contact.direccion }} <br>
								<strong>Teléfono:</strong> {{ contact.movil }}<br>
								<strong>Email:</strong> {{ contact.mail }}<br>
							</p>

							<div class="social-links">
								<a :href="social.enlace" target="_blank" class="twitter" v-for="social in sociales" :key="social.id">
									<i :class="social.icon"></i>
								</a>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 footer-newsletter">
							<h4>Propósito</h4>
							<p>{{ footer.proposito }}</p>
							<!-- <form action="" method="post">
								<input type="email" name="email"><input type="submit"  value="Subscribe">
							</form> -->
							<a href="cvpedrobazo.pdf" target="_blank" class="form-control text-center boton_cv">Ver mi CV</a>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="copyright">
					&copy; Copyright <strong>{{ footer.empresa }}</strong>. All Rights Reserved
				</div>
				<div class="credits">
					Una muy buena opción para el <a href="#portfolio">{{ footer.actividad }}</a>
				</div>
				<router-link to="/admin">Prueba 2 - borrar</router-link>
			</div>
		</footer>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Footer',
    computed: {
        ...mapState(['contact', 'sociales', 'footer'])
    },
}
</script>

<style scoped>
	.boton_cv{
        color: white;
        background: #18d26e;
	}
	.boton_cv:hover{
        color: #18d26e;
        background: white;
	}
</style>