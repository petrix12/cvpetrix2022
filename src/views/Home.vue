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
			
			<!-- *** Portfolio Section *** -->
			<section id="portfolio"  class="section-bg" >
				<div class="container">
					<header class="section-header">
						<h3 class="section-title">Our Portfolio</h3>
					</header>
					<div class="row">
						<div class="col-lg-12">
							<ul id="portfolio-flters">
								<li data-filter="*" class="filter-active">All</li>
								<li data-filter=".filter-app">App</li>
								<li data-filter=".filter-card">Card</li>
								<li data-filter=".filter-web">Web</li>
							</ul>
						</div>
					</div>
					<div class="row portfolio-container">
						<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/app1.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>

								<div class="portfolio-info">
									<h4><a href="#">App 1</a></h4>
									<p>App</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/web3.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>

								<div class="portfolio-info">
									<h4><a href="#">Web 3</a></h4>
									<p>Web</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/app2.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>

								<div class="portfolio-info">
									<h4><a href="#">App 2</a></h4>
									<p>App</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/card2.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>

								<div class="portfolio-info">
									<h4><a href="#">Card 2</a></h4>
									<p>Card</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/web2.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>
								<div class="portfolio-info">
									<h4><a href="#">Web 2</a></h4>
									<p>Web</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/app3.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>

								<div class="portfolio-info">
									<h4><a href="#">App 3</a></h4>
									<p>App</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/card1.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>
								<div class="portfolio-info">
									<h4><a href="#">Card 1</a></h4>
									<p>Card</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/card3.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>
								<div class="portfolio-info">
									<h4><a href="#">Card 3</a></h4>
									<p>Card</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
							<div class="portfolio-wrap">
								<figure>
									<img src="img/portfolio/web1.jpg" class="img-fluid" alt="">
									<a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
									<a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
								</figure>
								<div class="portfolio-info">
									<h4><a href="#">Web 1</a></h4>
									<p>Web</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<!-- *** Clients Section *** -->
			<section id="clients" class="wow fadeInUp">
				<div class="container">
					<header class="section-header">
						<h3>Our Clients</h3>
					</header>
					<div class="owl-carousel clients-carousel">
						<img src="img/clients/client-1.png" alt="">
						<img src="img/clients/client-2.png" alt="">
						<img src="img/clients/client-3.png" alt="">
						<img src="img/clients/client-4.png" alt="">
						<img src="img/clients/client-5.png" alt="">
						<img src="img/clients/client-6.png" alt="">
						<img src="img/clients/client-7.png" alt="">
						<img src="img/clients/client-8.png" alt="">
					</div>
				</div>
			</section>
			
			<!-- *** Clients Section *** -->
			<section id="testimonials" class="section-bg wow fadeInUp">
				<div class="container">
					<header class="section-header">
						<h3>Testimonials</h3>
					</header>
					<div class="owl-carousel testimonials-carousel">
						<div class="testimonial-item">
							<img src="img/testimonial-1.jpg" class="testimonial-img" alt="">
							<h3>Saul Goodman</h3>
							<h4>Ceo &amp; Founder</h4>
							<p>
								<img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
								Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
								<img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
							</p>
						</div>
						<div class="testimonial-item">
							<img src="img/testimonial-2.jpg" class="testimonial-img" alt="">
							<h3>Sara Wilsson</h3>
							<h4>Designer</h4>
							<p>
								<img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
								Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
								<img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
							</p>
						</div>
						<div class="testimonial-item">
							<img src="img/testimonial-3.jpg" class="testimonial-img" alt="">
							<h3>Jena Karlis</h3>
							<h4>Store Owner</h4>
							<p>
								<img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
								Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
								<img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
							</p>
						</div>
						<div class="testimonial-item">
							<img src="img/testimonial-4.jpg" class="testimonial-img" alt="">
							<h3>Matt Brandon</h3>
							<h4>Freelancer</h4>
							<p>
								<img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
								Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
								<img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
							</p>
						</div>
						<div class="testimonial-item">
							<img src="img/testimonial-5.jpg" class="testimonial-img" alt="">
							<h3>John Larson</h3>
							<h4>Entrepreneur</h4>
							<p>
								<img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
								Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
								<img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
							</p>
						</div>
					</div>
				</div>
			</section>
			
			<!-- *** Team Section *** -->
			<section id="team">
				<div class="container">
					<div class="section-header wow fadeInUp">
						<h3>Team</h3>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6 wow fadeInUp">
							<div class="member">
								<img src="img/team-1.jpg" class="img-fluid" alt="">
								<div class="member-info">
									<div class="member-info-content">
										<h4>Walter White</h4>
										<span>Chief Executive Officer</span>
										<div class="social">
											<a href=""><i class="fa fa-twitter"></i></a>
											<a href=""><i class="fa fa-facebook"></i></a>
											<a href=""><i class="fa fa-google-plus"></i></a>
											<a href=""><i class="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<div class="member">
								<img src="img/team-2.jpg" class="img-fluid" alt="">
								<div class="member-info">
									<div class="member-info-content">
										<h4>Sarah Jhonson</h4>
										<span>Product Manager</span>
										<div class="social">
											<a href=""><i class="fa fa-twitter"></i></a>
											<a href=""><i class="fa fa-facebook"></i></a>
											<a href=""><i class="fa fa-google-plus"></i></a>
											<a href=""><i class="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
							<div class="member">
								<img src="img/team-3.jpg" class="img-fluid" alt="">
								<div class="member-info">
									<div class="member-info-content">
										<h4>William Anderson</h4>
										<span>CTO</span>
										<div class="social">
											<a href=""><i class="fa fa-twitter"></i></a>
											<a href=""><i class="fa fa-facebook"></i></a>
											<a href=""><i class="fa fa-google-plus"></i></a>
											<a href=""><i class="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
							<div class="member">
								<img src="img/team-4.jpg" class="img-fluid" alt="">
								<div class="member-info">
									<div class="member-info-content">
										<h4>Amanda Jepson</h4>
										<span>Accountant</span>
										<div class="social">
											<a href=""><i class="fa fa-twitter"></i></a>
											<a href=""><i class="fa fa-facebook"></i></a>
											<a href=""><i class="fa fa-google-plus"></i></a>
											<a href=""><i class="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

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
		Facts
	}
}
</script>