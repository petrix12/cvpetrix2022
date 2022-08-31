<template>
	<div>
        <section id="team">
            <div class="container text-center">
                <div class="section-header wow fadeInUp w-auto">
                    <h3>Acerca de mi experiencia</h3>
                    <iframe width="597" height="336" src="https://www.youtube.com/embed/0aNLLpvYVio" title="Video presentación Ing. Pedro Bazó" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a href="cppedrobazo.pdf" target="_blank" class="form-control boton_cp mt-5" >Mi carta de presentación</a>
                </div>
            </div>
        </section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'PoliticasCalidad',
    computed: {
        ...mapState(['calidad'])
    },
}
</script>

<style scoped>
	.boton_cp{
        /* align-content: center; */
        /* width: 20rem; */
        margin: 20px;
        color: #18d26e;
        background: white;
	}
	.boton_cp:hover{
        color: white;
        background: #18d26e;
	}
</style>