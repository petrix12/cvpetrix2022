<template>
	<div>
        <section id="portfolio"  class="section-bg" >
            <div class="container">
                <header class="section-header">
                    <h3 class="section-title">Portfolio</h3>
                </header>
                <div class="row">
                    <div class="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*">Todos</li>
                            <li data-filter=".filter-destacados" class="filter-active">Destacados</li>
                            <li data-filter=".filter-web">App Web</li>
                            <li data-filter=".filter-otros">Otros</li>
                        </ul>
                    </div>
                </div>

                <div class="row portfolio-container">
                    <div v-for="(proyecto, item) in portafolio.proyectos" :key="item" class="col-lg-4 col-md-6 portfolio-item wow fadeInUp" :class="proyecto.data_filter" :data-wow-delay="estiloCard(item + 1)">
                        <div class="portfolio-wrap">
                            <figure>
                                <img :src="`img/portfolio/${proyecto.img}`" class="img-fluid" :alt="proyecto.img">
                                <a :href="`img/portfolio/${proyecto.img}`" data-lightbox="portfolio" :data-title="proyecto.titulo" class="link-preview" title="Ver"><i class="ion ion-eye"></i></a>
                                <a :href="proyecto.repositorio" target="_blank" class="link-details" title="Ir a repositorio"><i class="ion ion-android-open"></i></a>
                            </figure>

                            <div class="titulo p-2">
                                <h4><a :href="proyecto.enlace" target="_blank">{{ proyecto.titulo }}</a></h4>
                            </div>

                            <div class="descripcion p-2">
                                <p><small>{{ proyecto.descripcion }}</small></p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center p-2">
                                <img v-for="(tecnologia, index) in proyecto.tecnologias" :key="index"
                                    :src="`img/logos/${tecnologia}.png`" width="45" height="45"
                                    :alt="`Logo ${tecnologia}`" title="Visual Basic 6.0">
                                <small class="text-muted"><strong>{{ proyecto.anho }}</strong></small>
                            </div>
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
	name: 'Portfolio',
    computed: {
        ...mapState(['portafolio'])
    },
    methods: {
        estiloCard(item){
            const tiempo = item % 3
            switch (tiempo) {
            case 1:
                return '0.0s'
            case 2:
                return '0.1s'
            case 0:
                return '0.2s'
            default:
                return '0.0s'
            }
        }
    }
}
</script>

<style scoped>
    .titulo {
        height: 60px;
        text-align: center;
    }

    .titulo a {
        color: grey;
        font-size: 55%;
        font-weight: bold;
        line-height: 20% !important;
    }

    .titulo a:hover {
        color: rgb(28, 28, 85);
    }

    figure {
        height: 234px !important;
    }

    .descripcion {
        height: 120px !important;
        font-size: 85%;
        text-align: justify;
    }
</style>