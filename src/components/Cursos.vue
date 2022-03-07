<template>
	<div>
        <section id="course"  class="section-bg" >
            <div class="container">
                <header class="section-header">
                    <h3 class="section-title">Cursos</h3>
                </header>
                <div class="row">
                    <div class="col-lg-12">
                        <ul id="course-flters">
                            <li :class="tipoCurso == 'todos' ? 'filter-active' : ''" @click="tipoCurso = 'todos'">Todos</li>
                            <li :class="tipoCurso == 'destacados' ? 'filter-active' : ''" @click="tipoCurso = 'destacados'">Destacados</li>
                        </ul>
                    </div>
                </div>

                <div class="row course-container">
                    <div v-for="(curso, item) in cursosCulminados" :key="item" class="col-lg-4 col-md-6 course-item wow fadeInUp" :data-wow-delay="estiloCard(item + 1)">
                        <div class="course-wrap">
                            <figure>
                                <img :src="`img/cursos/${curso.id}.png`" class="img-fluid" :alt="curso.nombre">
                                <a :href="`img/cursos/${curso.id}.png`" data-lightbox="course" :data-title="curso.name" class="link-preview" title="Ver"><i class="ion ion-eye"></i></a>
                                <a :href="curso.repositorio" target="_blank" class="link-details" title="Ir a repositorio"><i class="ion ion-android-open"></i></a>
                            </figure>

                            <div class="titulo px-2">
                                <h4 :title="curso.name">
                                    <img :src="`img/logos/${curso.logo_platform}.png`" alt="" width="20" height="20">
                                    <a :href="curso.url" target="_blank" class="mx-2">{{ truncate(curso.name, 35) }}</a>
                                </h4>
                            </div>

                            <div class="descripcion px-2">
                                <p :title="curso.description">
                                    <strong>Descripción:</strong> {{ truncate(curso.description, 200) }} <br>
                                    <strong>Autor:</strong> {{ curso.instructor }} <br>
                                    <strong>Finalizado:</strong> {{ curso.culminado }} <br>
                                    <strong>Duración:</strong> {{ (curso.minutos / 60).toFixed(2) }} horas
                                </p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center p-2">
                                <img v-for="(tecnologia, index) in curso.logo_technologies" :key="index"
                                    :src="`img/logos/${tecnologia}.png`" width="45" height="45"
                                    :alt="`Logo ${tecnologia}`" :title="tecnologia">
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
	name: 'Cursos',
    data() {
        return {
            tipoCurso: 'destacados'
        }
    },
    computed: {
        ...mapState(['cursos']),
        cursosCulminados() {
            if(this.tipoCurso == 'destacados'){
                return this.cursos.filter(item => item.culminado && item.mostrar).sort(this.ordenarPorCulminado)
            }
            return this.cursos.filter(item => item.culminado).sort(this.ordenarPorCulminado)
        }
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
        },
        truncate(input, largo) { 
            if (input.length > largo) { 
                return input.substring(0, largo) + '...'
            } 
            return input
        },
        ordenarPorCulminado(x, y){
            return x.culminado < y.culminado ? 1: -1
        }
    }
}
</script>

<style scoped>
    #course {
        padding: 60px 0;
    }

    #course #course-flters {
        padding: 0;
        margin: 5px 0 35px 0;
        list-style: none;
        text-align: center;
    }

    #course #course-flters li {
        cursor: pointer;
        margin: 15px 15px 15px 0;
        display: inline-block;
        padding: 10px 20px;
        font-size: 12px;
        line-height: 20px;
        color: #666666;
        border-radius: 4px;
        text-transform: uppercase;
        background: #fff;
        margin-bottom: 5px;
        transition: all 0.3s ease-in-out;
    }

    #course #course-flters li:hover, #course #course-flters li.filter-active {
        background: #18d26e;
        color: #fff;
    }

    #course #course-flters li:last-child {
        margin-right: 0;
    }

    #course .course-wrap {
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
        transition: 0.3s;
    }

    #course .course-wrap:hover {
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
    }

    #course .course-item {
        position: relative;
        height: 500px;
        overflow: hidden;
    }

    #course .course-item figure {
        background: #000;
        overflow: hidden;
        height: 200px;
        position: relative;
        border-radius: 4px 4px 0 0;
        margin: 0;
    }

    figure img {   
        width: 450px;
        height: 200px;
    }

    #course .course-item figure:hover img {
        opacity: 0.4;
        transition: 0.3s;
    }

    #course .course-item figure .link-preview, #course .course-item figure .link-details {
        position: absolute;
        display: inline-block;
        visibility: hidden;
        line-height: 1;
        text-align: center;
        width: 36px;
        height: 36px;
        background: #fff;
        border-radius: 50%;
        transition: 0.2s;
    }

    #course .course-item figure .link-preview i, #course .course-item figure .link-details i {
        padding-top: 6px;
        font-size: 22px;
        color: #333;
    }

    #course .course-item figure .link-preview:hover, #course .course-item figure .link-details:hover {
        background: #18d26e;
    }

    #course .course-item figure .link-preview:hover i, #course .course-item figure .link-details:hover i {
        color: #fff;
    }

    #course .course-item figure .link-preview {
        left: calc(50% - 38px);
        top: calc(50% - 18px);
    }

    #course .course-item figure .link-details {
        right: calc(50% - 38px);
        top: calc(50% - 18px);
    }

    #course .course-item figure:hover .link-preview {
        visibility: visible;
        left: calc(50% - 44px);
    }

    #course .course-item figure:hover .link-details {
        visibility: visible;
        right: calc(50% - 44px);
    }

    #course .course-item .course-info {
        background: #fff;
        text-align: center;
        padding: 30px;
        height: 90px;
        border-radius: 0 0 3px 3px;
    }

    #course .course-item .course-info h4 {
        font-size: 18px;
        line-height: 1px;
        font-weight: 700;
        margin-bottom: 18px;
        padding-bottom: 0;
    }

    #course .course-item .course-info h4 a {
        color: #333;
    }

    #course .course-item .course-info h4 a:hover {
        color: #18d26e;
    }

    #course .course-item .course-info p {
        padding: 0;
        margin: 0;
        color: #b8b8b8;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
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

    .titulo {
        height: 20px;
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

    .descripcion {
        height: 115px !important;
        font-size: 85%;
        text-align: justify;
    }
</style>