<template>
	<div>
        <section id="services">
            <div class="container">
                <header class="section-header wow fadeInUp">
                    <h3>Servicios</h3>
                    <p>{{ servicios.texto }}</p>
                </header>
                <div class="row">
                    <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s" v-for="servicio in servicios.items" :key="servicio.id">
                        <div class="icon"><i :class="servicio.icon"></i></div>
                        <h4 class="title"><a :href="servicio.enlace" target="_blank">{{ servicio.servicio }}</a></h4>
                        <p class="description">{{ servicio.descripcion }}</p>
                    </div>
                </div>
            </div>
        </section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Servicios',
    computed: {
        ...mapState(['servicios'])
    },
}
</script>