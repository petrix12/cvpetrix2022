<template>
	<div>
		<Header />
		<IntroSection />

		<!-- *** Cuerpo Principal *** -->
		<main id="main">
			<FeaturedServicesSection />
			<PoliticasCalidad />
			<Servicios />
			<CallToAction />
			<Skills />
			<Facts />
			<Portfolio />
            <Clients />
            <Testimonials />
            <Estudios />
			<Cursos />

			<!-- *** Contact Section *** -->
			<section id="contact" class="section-bg wow fadeInUp">
				<div class="container">
					<div class="section-header">
						<h3>Contact Us</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
					</div>
					<div class="row contact-info">
						<div class="col-md-4">
							<div class="contact-address">
								<i class="ion-ios-location-outline"></i>
								<h3>Address</h3>
								<address>A108 Adam Street, NY 535022, USA</address>
							</div>
						</div>
						<div class="col-md-4">
							<div class="contact-phone">
								<i class="ion-ios-telephone-outline"></i>
								<h3>Phone Number</h3>
								<p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="contact-email">
								<i class="ion-ios-email-outline"></i>
								<h3>Email</h3>
								<p><a href="mailto:info@example.com">info@example.com</a></p>
							</div>
						</div>
					</div>
					<div class="form">
						<div id="sendmessage">Your message has been sent. Thank you!</div>
						<div id="errormessage"></div>
						<form action="" method="post" role="form" class="contactForm">
							<div class="form-row">
								<div class="form-group col-md-6">
									<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
									<div class="validation"></div>
								</div>
								<div class="form-group col-md-6">
									<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
									<div class="validation"></div>
								</div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
								<div class="validation"></div>
							</div>
							<div class="form-group">
								<textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
								<div class="validation"></div>
							</div>
							<div class="text-center"><button type="submit">Send Message</button></div>
						</form>
					</div>
				</div>
			</section>
		</main>
		
		<!-- *** Footer *** -->
		<footer id="footer">
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 footer-info">
							<h3>BizPage</h3>
							<p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
						</div>
						<div class="col-lg-3 col-md-6 footer-links">
							<h4>Useful Links</h4>
							<ul>
								<li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
								<li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-6 footer-contact">
							<h4>Contact Us</h4>
							<p>
								A108 Adam Street <br>
								New York, NY 535022<br>
								United States <br>
								<strong>Phone:</strong> +1 5589 55488 55<br>
								<strong>Email:</strong> info@example.com<br>
							</p>

							<div class="social-links">
								<a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
								<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
								<a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
								<a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
								<a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 footer-newsletter">
							<h4>Our Newsletter</h4>
							<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
							<form action="" method="post">
								<input type="email" name="email"><input type="submit"  value="Subscribe">
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="copyright">
					&copy; Copyright <strong>BizPage</strong>. All Rights Reserved
				</div>
				<div class="credits">
					<!--
					All the links in the footer should remain intact.
					You can delete the links only if you purchased the pro version.
					Licensing information: https://bootstrapmade.com/license/
					Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
					-->
					Best <a href="https://bootstrapmade.com/">Bootstrap Templates</a> by BootstrapMade
				</div>
			</div>
		</footer>
		<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		
	</div>
</template>

<script>
import Header from '@/components/Header'
import IntroSection from '@/components/IntroSection'
import FeaturedServicesSection from '@/components/FeaturedServicesSection'
import PoliticasCalidad from '@/components/PoliticasCalidad'
import Servicios from '@/components/Servicios'
import CallToAction from '@/components/CallToAction'
import Skills from '@/components/Skills'
import Facts from '@/components/Facts'
import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import Estudios from '@/components/Estudios'
import Cursos from '@/components/Cursos'

export default {
	name: 'Home',
	components: {
		Header,
		IntroSection,
		FeaturedServicesSection,
		PoliticasCalidad,
		Servicios,
		CallToAction,
		Skills,
		Facts,
		Portfolio,
		Clients,
		Testimonials,
		Estudios,
		Cursos
	}
}
</script>