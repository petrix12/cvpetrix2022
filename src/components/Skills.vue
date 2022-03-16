<template>
	<div>
        <section id="skills">
            <div class="container">
                <header class="section-header">
                    <h3>Tecnologías trabajadas</h3>
                    <p>{{ skills.texto }}</p>
                </header>
                <div class="skills-content">  
                    <div class="progress" v-for="stack in skills.stacks" :key="stack.id">
                        <div class="progress-bar" :class="stack.color_bootstrap" role="progressbar" :aria-valuenow="stack.progressbar" aria-valuemin="0" aria-valuemax="100">
                            <span class="skill">{{ stack.stack }}<i class="val">{{ stack.progressbar }}%</i></span>
                        </div>
                    </div>
                    
					<div class="row mt-5">
						<div class="col-lg-3 col-md-6 sm-col-12 text-center mt-5" v-for="stack in skills.stacks" :key="stack.id">
                            <img :src="`img/stacks/${stack.img}`" :alt="'Stack ' + stack.stack" height="140">
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
	name: 'Skills',
    computed: {
        ...mapState(['skills'])
    },
}
</script>