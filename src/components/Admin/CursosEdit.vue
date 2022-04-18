<template>
    <span class="menu-icon icon-edit text-warning mr-2" data-toggle="modal" :data-target="`#Modal${curso.id}`" title="Editar">
        <i class="mdi mdi-table-edit"></i>
    </span>
    <!-- Modal -->
    <div class="modal fade" :id="`Modal${curso.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title card-title" id="exampleModalLabel">{{ curso.name ? (curso.name + ' (id = ' + curso.id + ')') : 'Nuevo curso' }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="form-sample">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Nombre del curso</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="text" 
                                            class="form-control color-blanco" 
                                            v-model="curso.name"
                                            placeholder="Ejm. Desarrollo web de 0 a 100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Categoría</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.category">
                                            <option disabled>-</option> 
                                            <option 
                                                v-for="category in categories" 
                                                :key="`categoria-${category}`" 
                                                :selected="(curso.category == category) ? true : false"
                                            >{{ category }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Tecnología</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.technology">
                                            <option disabled>-</option> 
                                            <option 
                                                v-for="technology in technologies" 
                                                :key="`categoria-${technology}`" 
                                                :selected="(curso.technology == technology) ? true : false"
                                            >{{ technology }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">URL del curso</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="url" 
                                            class="form-control color-blanco" 
                                            v-model="curso.url"
                                            placeholder="Ejm. https://url-del-curso.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Plataforma</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.platform">
                                            <option disabled>-</option> 
                                            <option 
                                                v-for="platform in platforms" 
                                                :key="`platform-${platform}`" 
                                                :selected="(curso.platform == platform) ? true : false"
                                            >{{ platform }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Costo del curso</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="number" 
                                            class="form-control color-blanco" 
                                            v-model="curso.costo"
                                            placeholder="Ejm. 9.99"
                                        />
                                    </div>
                                </div>
                            </div>                    
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Moneda</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.money">
                                            <option disabled>-</option> 
                                            <option 
                                                v-for="money in monies" 
                                                :key="`money-${money}`" 
                                                :selected="(curso.money == money) ? true : false"
                                            >{{ money }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Prioridad</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.priority">
                                            <option disabled>-</option> 
                                            <option :selected="(curso.priority == '0') ? true : false">0</option>
                                            <option :selected="(curso.priority == '1') ? true : false">1</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Duración (min)</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="number" 
                                            class="form-control color-blanco" 
                                            v-model="curso.minutos"
                                            placeholder="Ejm. 1450"
                                        />
                                    </div>
                                </div>
                            </div>  
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label" title="Fecha de culminación">Culminado</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="date" 
                                            class="form-control color-blanco" 
                                            v-model="curso.culminado"
                                            placeholder="Ejm. 1450"
                                        />
                                    </div>
                                </div>
                            </div>                  
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ID del certificado</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="text" 
                                            class="form-control color-blanco" 
                                            v-model="curso.certificado"
                                            placeholder="Ejm. Desarrollo web de 0 a 100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">ID del certificado</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="url" 
                                            class="form-control color-blanco" 
                                            v-model="curso.url_certificado"
                                            placeholder="Ejm. https://www.ente.com/certificate/777777"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Instructor</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.instructor">
                                            <option disabled>-</option> 
                                            <option 
                                                v-for="instructor in instructores" 
                                                :key="`instructor-${instructor}`" 
                                                :selected="(curso.instructor == instructor) ? true : false"
                                            >{{ instructor }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Prioridad</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.priority">
                                            <option disabled>-</option> 
                                            <option :selected="(curso.priority == '0') ? true : false">0</option>
                                            <option :selected="(curso.priority == '1') ? true : false">1</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">URL repositorio</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="url" 
                                            class="form-control color-blanco" 
                                            v-model="curso.repositorio"
                                            placeholder="Ejm. https://github.com/petrix12/mean2022"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">URL auxiliar</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="url" 
                                            class="form-control color-blanco" 
                                            v-model="curso.url_aux"
                                            placeholder="Ejm. https://cualquier-url-de-importancia"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Calificación</label>
                                    <div class="col-sm-9">
                                        <select class="form-control color-blanco" v-model="curso.calificacion">
                                            <option disabled>-</option> 
                                            <option 
                                                v-for="(calificacion, item) in calificaciones" 
                                                :key="`calificacion-${item}`" 
                                                :selected="(curso.calificacion == calificacion) ? true : false"
                                            >{{ calificacion }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <!-- <div class="form-group row">
                                    <label class="col-sm-3 col-form-label" title="Tecnologías involucradas en el curso">Tecnologías</label>
                                    <div class="col-sm-9">
                                        <input 
                                            type="text" 
                                            class="form-control color-blanco" 
                                            v-model="curso.logo_technologies"
                                            placeholder="Ejm. 'curso', 'platforms', 'categories', 'technologies', 'monies', 'instructores'"
                                        />
                                    </div>
                                </div> -->

                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Tecnologías</label>
                                    <select class="js-example-basic-multiple" multiple="multiple" style="width:100%">
                                        <option value="AL">Alabama</option>
                                        <option value="WY">Wyoming</option>
                                        <option value="AM">America</option>
                                        <option value="CA">Canada</option>
                                        <option value="RU">Russia</option>
                                    </select>
                                </div>                   
        
                            </div>
                        </div>                

                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group row">
                                    <div class="form-check m-2">
                                        <label class="form-check-label-int">
                                            <input type="checkbox" class="form-check-input-int" v-model="curso.comprado" >Curso pagado
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group row">
                                    <div class="form-check m-2">
                                        <label class="form-check-label-int">
                                            <input type="checkbox" class="form-check-input-int" v-model="curso.actualizado" >Curso actualizado
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group row">
                                    <div class="form-check m-2">
                                        <label class="form-check-label-int">
                                            <input type="checkbox" class="form-check-input-int" v-model="curso.en_ruta" >En ruta
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group row">
                                    <div class="form-check m-2">
                                        <label class="form-check-label-int">
                                            <input type="checkbox" class="form-check-input-int" v-model="curso.mostrar" >Mostrar por defecto
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary mr-2" @click="alert('hhhh')">Aceptar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['curso', 'platforms', 'categories', 'technologies', 'monies', 'instructores'],
    data() {
        return {
            newCurso: {  
                description: 'Registro y Login con Google, Facebook y Github.',
                /* logo_platform: 'udemy', */ // Establecer este valor a partir de la propiedad platform cuando se guarde el documento
                logo_technologies: [ 'php', 'mysql', 'javascript', 'facebook', 'google', 'fireabase' ], 
                nota: ''
            },
            calificaciones: [
                'Muy malo',
                'Malo',
                'Regular',
                'Bueno',
                'Muy bueno',
                'Excelente',
                '*En evaluación*'
            ]
        }
    }
}
</script>

<style scoped>
    .icon-edit {
        font-size: 200%;
    }

    .color-blanco {
        color: white !important;
    }

    .form-check-label-int {
        margin: 0 !important;
    }

    .pos-check {
        margin-bottom: 0 !important;
    }
    .form-check-input-int {
        position: absolute;
        margin-top: 0rem;
        margin-left: -1.25rem; 
    }

        .form-check-input[disabled] ~ .form-check-label,
        .form-check-input:disabled ~ .form-check-label {
        color: #6c7293; 
    }
</style>