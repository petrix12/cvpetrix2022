<template>
    <div class="row ">
        <div class="col-12 grid-margin">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Lista de cursos</h4>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Duración</th>
                                    <th>Instructor</th>
                                    <th>
                                        <div class="dropdown">
                                        <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" style="cursor: pointer">
                                            Estatus
                                        </span>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item dropdown-cursos" @click="cambiarFiltro('No iniciados')" style="cursor: pointer">No iniciados</a>
                                            <a class="dropdown-item dropdown-cursos" @click="cambiarFiltro('No comprados')" style="cursor: pointer">No comprados</a>
                                            <a class="dropdown-item dropdown-cursos" @click="cambiarFiltro('En progreso')" style="cursor: pointer">En progreso</a>
                                            <a class="dropdown-item dropdown-cursos" @click="cambiarFiltro('Culminados')" style="cursor: pointer">Culminados</a>
                                            <a class="dropdown-item dropdown-cursos" @click="cambiarFiltro('Todos')" style="cursor: pointer">Todos</a>
                                        </div>
                                        </div>
                                    </th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="curso in cursosFiltrados" :key="`curso-${curso.id}`">
                                    <td>
                                        <img :src="`img/logos/${curso.logo_platform}.png`" alt="image" :title="`id = ${curso.id}`" />
                                        <a :href="curso.url" target="_blank">
                                            <span class="pl-2" :title="curso.name">{{ truncate(curso.name, 40) }}</span>
                                        </a>
                                    </td>
                                    <td>
                                        <p :title="curso.category" class="m-0"><small>{{ truncate(curso.category, 20) }}</small></p>
                                        <p :title="curso.technology" class="m-0"><small>{{ truncate(curso.technology, 20) }}</small></p>
                                    </td>
                                    <td>{{ curso.minutos }} min</td>
                                    <td :title="curso.instructor">{{ truncate(curso.instructor, 20) }}</td>
                                    <td>
                                        <div :class="estiloStatus(curso)">{{ status }}</div>
                                    </td>
                                    <td>
                                        <CursosEdit 
                                            :curso="curso" 
                                            :platforms="platforms" 
                                            :categories="categories" 
                                            :technologies="technologies"
                                            :monies="monies"
                                            :instructores="instructores"
                                        />
                                        <span class="menu-icon icon-delete text-danger" title="Eliminar">
                                            <i class="mdi mdi-delete"></i>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CursosEdit from '@/components/Admin/CursosEdit'

export default {
    components: {
        CursosEdit
    },
    data() {
        return {
            status: '',
            filtroStatus: 'Todos'
        }
    },
    computed: {
        ...mapState(['cursos']),
        cursosFiltrados() {
            if(this.filtroStatus == 'Culminados'){
                return this.cursos.filter(item => item.culminado).sort(this.ordenarPorCulminado)
            }
            if(this.filtroStatus == 'No comprados'){
                return this.cursos.filter(item => !item.comprado)
            }
            if(this.filtroStatus == 'En progreso'){
                return this.cursos.filter(item => item.priority)
            }
            if(this.filtroStatus == 'No iniciados'){
                return this.cursos.filter(item => item.culminado == null && item.comprado && item.priority == 0)
            }
            return this.cursos
        },
        categories(){
            const categories = new Set()
            this.cursos.forEach((curso) => {
                categories.add(curso.category)
            })
            return [...categories].sort()
        },
        technologies(){
            const technologies = new Set()
            this.cursos.forEach((curso) => {
                technologies.add(curso.technology)
            })
            return [...technologies].sort()
        },
        platforms(){
            const platforms = new Set()
            this.cursos.forEach((curso) => {
                platforms.add(curso.platform)
            })
            return [...platforms].sort()
        },
        monies(){
            const monies = new Set()
            this.cursos.forEach((curso) => {
                monies.add(curso.money)
            })
            return [...monies].sort()
        },
        instructores(){
            const instructores = new Set()
            this.cursos.forEach((curso) => {
                instructores.add(curso.instructor)
            })
            return [...instructores].sort()
        }
    },
    methods: {
        truncate(input, largo) { 
            if (input.length > largo) { 
                return input.substring(0, largo) + '...'
            } 
            return input
        },
        estiloStatus(curso){
            if(curso.culminado !== null){
                this.status = "Culminado"
                return 'badge badge-outline-success'
            }
            if(!curso.comprado){
                this.status = "No comprado"
                return 'badge badge-outline-primary'
            }
            if(curso.priority === 1){
                this.status = "En progreso"
                return 'badge badge-outline-warning'
            }
            this.status = "No iniciado"
            return 'badge badge-outline-danger'
        },
        cambiarFiltro(filtro){
            this.filtroStatus = filtro
        },
        ordenarPorCulminado(x, y){
            return x.culminado < y.culminado ? 1: -1
        }
    }
}
</script>

<style scoped>
    .icon-delete {
        font-size: 200%;
    }

    .dropdown-cursos {
        font-size: 80% !important;
        color: gray !important;
    }

    .dropdown-cursos:hover {
        color: white !important;
    }
</style>