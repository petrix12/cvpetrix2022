<template>
	<div>
        <section id="team">
            <div class="container">
                <div class="section-header wow fadeInUp">
                    <h3>Estudios</h3>
                    <p>{{ formacion.texto }}</p>
                </div>
            </div>
        </section>

        <section id="estudios">
            <div class="container">
                <div class="row estudios-cols">
                    <div class="col-md-6 col-lg-4 wow fadeInUp" v-for="(estudio, item) in formacion.estudios" :key="item" :data-wow-delay="estiloCard(item + 1)">
                        <div class="estudios-col">
                            <div class="img">
                                <img :src="`img/estudios/${estudio.id}.png`" alt="" class="img-fluid">
                            </div>
                            <h2 class="title">{{ estudio.ente }}</h2>
                            <div class="alto">
                                <p><strong>Lugar:</strong> {{ estudio.lugar }}</p>
                                <p><strong>Logro:</strong> {{ estudio.logro }}</p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center p-2">
                                <small class="text-muted"><strong>{{ estudio.anho }}</strong></small>
                                <img :src="`img/logos/${estudio.logo}.png`" width="30" height="30"
                                    :alt="`Logo ${estudio.logo}`" :title="estudio.logo">
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
	name: 'Estudios',
    computed: {
        ...mapState(['formacion'])
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
    #estudios {
        background-size: cover;
        padding: 60px 0 40px 0;
        position: relative;
        margin-top: -7rem;
    }

    #estudios::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.92);
        z-index: 9;
    }

    #estudios .container {
        position: relative;
        z-index: 10;
    }

    #estudios .about-col {
        background: #fff;
        border-radius: 0 0 4px 4px;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
        margin-bottom: 20px;
    }

    #estudios .about-col .img {
        position: relative;
    }

    #estudios .about-col .img img {
        border-radius: 4px 4px 0 0;
    }

    #estudios .estudios-col h2 {
        color: #000;
        text-align: center;
        font-weight: 700;
        font-size: 15px;
        padding: 0 5px;
        margin: 10px 0 12px 0;
    }

    #estudios .estudios-col p {
        font-size: 12px;
        line-height: 24px;
        color: #333;
        margin-bottom: 0;
        padding: 0px 10px;
    }

    .alto {
        height: 80px !important;
    }
</style>