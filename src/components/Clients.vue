<template>
	<div>
        <section id="clients" class="wow fadeInUp">
            <div class="container">
                <header class="section-header">
                    <h3>Experiencia profesional</h3>
                </header>
                <div class="owl-carousel clients-carousel">
                    <img class="p-2" v-for="ente in clients.entes" :key="ente.id" :src="`img/clients/${ente.nombre}.png`" :alt="ente.nombre">
                </div>
            </div>
        </section>

        <section id="experiencia">
            <div class="container">
                <div class="row about-cols">
                    <div v-for="(experiencia, item) in clients.experiencias" :key="item" class="col-md-4 col-lg-3 wow fadeInUp" :data-wow-delay="estiloCard(item + 1)">
                        <div class="about-col">
                            <div class="img">
                                <img :src="`img/experiencias/${experiencia.id}.png`" :alt="`Imagen ${experiencia.cargo}`" class="img-fluid">
                            </div>
                            <h2 class="cargo">{{ experiencia.cargo }}</h2>
                            <p class="descripcion p-2">{{ experiencia.descripcion }}</p>
                            <p class="empresa p-2">
                                {{ experiencia.empresa }}
                            </p>

                            <div class="d-flex justify-content-between align-items-center p-2 lapso">
                                <small class="text-muted"><strong>{{ `${experiencia.inicio_mes} ${experiencia.inicio_anho}` }}</strong></small>
                                <img v-for="(logo, i) in experiencia.logos" :key="i"
                                    :src="`img/logos/${logo}.png`" width="20" height="20"
                                    :alt="`Logo ${logo}`" :title="logo">
                                <small class="text-muted"><strong>{{ experiencia.fin_anho === 'Actual' ? 'Actual' : `${experiencia.fin_mes} ${experiencia.fin_anho}` }}</strong></small>
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
	name: 'Clients',
    computed: {
        ...mapState(['clients'])
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
    #experiencia {
        background-size: cover;
        padding: 60px 0 40px 0;
        position: relative;
    }

    #experiencia::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.92);
        z-index: 9;
    }

    #experiencia .container {
        position: relative;
        z-index: 10;
    }

    #experiencia .about-col {
        background: #fff;
        border-radius: 0 0 4px 4px;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
        margin-bottom: 20px;
    }

    #experiencia .about-col .img {
        position: relative;
    }

    #experiencia .about-col .img img {
        border-radius: 4px 4px 0 0;
    }

    #experiencia .about-col .icon {
        width: 32px;
        height: 32px;
        padding-top: 0px;
        text-align: center;
        position: absolute;
        border-radius: 50%;
        text-align: center;
        border: 2px solid #fff;
        left: 40%;
        bottom: 7px;
        transition: 0.3s;
    }

    #experiencia .about-col h2 {
        color: #000;
        text-align: center;
        font-weight: 700;
        font-size: 20px;
        padding: 0;
        margin: 40px 0 12px 0;
    }

    #experiencia .about-col h2 a {
        color: #000;
    }

    #experiencia .about-col h2 a:hover {
        color: #18d26e;
    }

    #experiencia .about-col p {
        font-size: 14px;
        line-height: 24px;
        color: #333;
        margin-bottom: 0;
        padding: 0 20px 20px 20px;
    }

    .cargo {
        height: 20px !important;
        font-size: 80% !important;
        margin-top: 0.5rem !important;
        line-height: 1.5em !important;
    }

    .descripcion {
        height: 100px !important;
        font-size: 70% !important;
        margin-top: 1.3rem !important;
        line-height: 1.5em !important;
        text-align: justify;
    }

    .empresa {
        height: 65px !important;
        font-size: 55% !important;
        margin-top: 0.5rem !important;
        line-height: 1.5em !important;
        font-weight: bold;
    }

    .lapso {
        height: 30px !important;
        font-size: 70% !important;
    }
</style>