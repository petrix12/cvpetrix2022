<template>
	<div>
        <section id="about">
            <div class="container">
                <header class="section-header">
                    <h3>Política de calidad</h3>
                    <p>{{ calidad.texto }}</p>
                </header>
                <div class="row about-cols">
                    <div class="col-md-4 wow fadeInUp">
                        <div class="about-col">
                            <div class="img">
                                <img src="img/about-mission.jpg" alt="" class="img-fluid">
                                <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                            </div>
                            <h2 class="title"><a href="#">Misión</a></h2>
                            <p class="alto">{{ calidad.mision }}</p>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="about-col">
                            <div class="img">
                                <img src="img/about-plan.jpg" alt="" class="img-fluid">
                                <div class="icon"><i class="ion-ios-list-outline"></i></div>
                            </div>
                            <h2 class="title"><a href="#">Valores</a></h2>
                            <p class="alto">{{ calidad.valores }}</p>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="about-col">
                            <div class="img">
                                <img src="img/about-vision.jpg" alt="" class="img-fluid">
                                <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                            </div>
                            <h2 class="title"><a href="#">Visión</a></h2>
                            <p class="alto">{{ calidad.vision }}</p>
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
	name: 'PoliticasCalidad',
    computed: {
        ...mapState(['calidad'])
    },
}
</script>

<style scoped>
    .alto {
        height: 175px;
    }
</style>