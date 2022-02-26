<template>
	<div>
        <section id="facts"  class="wow fadeIn">
            <div class="container">
                <header class="section-header">
                    <h3>Autoaprendizaje</h3>
                    <p>{{ facts.texto }}</p>
                </header>
                <div class="row counters">
                    <div class="col-lg-6 col-6 text-center">
                        <span data-toggle="counter-up">{{ facts.cursos }}</span>
                        <p>Cursos realizados</p>
                    </div>
                    <div class="col-lg-6 col-6 text-center">
                        <span data-toggle="counter-up">{{ facts.horas }}</span>
                        <p>Horas invertidas</p>
                    </div>
                </div>
                <div class="facts-img">
                    <img src="img/facts-img.png" alt="" class="img-fluid">
                </div>
            </div>
        </section>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Facts',
    computed: {
        ...mapState(['facts'])
    },
}
</script>