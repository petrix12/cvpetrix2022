<template>
    <div>
        <section id="featured-services">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 box" v-for="destacado in destacados" :key="destacado.id">
                        <i :class="destacado.icon"></i>
                        <h4 class="title"><a :href="destacado.enlace" target="_blank">{{ destacado.servicio }}</a></h4>
                        <p class="description">{{ destacado.descripcion }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'FeaturedServicesSection',
    computed: {
        ...mapState(['destacados'])
    },
}
</script>