<template>
	<div>
        <section id="testimonials" class="section-bg wow fadeInUp">
            <div class="container">
                <header class="section-header">
                    <h3>Testimoniales</h3>
                </header>
                <div class="owl-carousel testimonials-carousel">
                    <div v-for="testimonio in testimonios" :key="testimonio.id">
                        <div class="testimonial-item">
                            <img :src="`img/testimonials/${testimonio.id}.jpg`" class="testimonial-img" :alt="testimonio.testigo">
                            <h3>{{ testimonio.testigo }}</h3>
                            <h4>{{ testimonio.ocupacion }}</h4>
                            <p>
                                <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
                                {{ testimonio.testimonio }}
                                <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Testimonials',
    computed: {
        ...mapState(['testimonials']),
        testimonios () {
            return this.testimonials.filter(item => item.activo)
        }
    }
}
</script>