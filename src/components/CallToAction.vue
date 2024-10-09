<template>
	<div>
        <section id="call-to-action" class="wow fadeIn">
            <div class="container text-center">
                <h3>Call To Action</h3>
                <p>{{ accion.texto }}</p>
                <a class="cta-btn" href="#portfolio">Call To Action</a>
            </div>
        </section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'CallToAction',
    computed: {
        ...mapState(['accion'])
    },
}
</script>