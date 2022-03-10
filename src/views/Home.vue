<template>
	<div>
		<Header />
		<IntroSection />
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
			<Contact />
		</main>
		<Footer />
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
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
		Cursos,
		Contact,
		Footer
	}
}
</script>