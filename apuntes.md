# CV Petrix 2022
+ [URL del sitio]()
+ [URL del repositorio en GitHub](https://github.com/petrix12/cvpetrix2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **cvpetrix2022**.
    + **Description**: Proyecto para mostrar mi CV Online para el 2022.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/cvpetrix2022.git
    + $ git push -u origin main


## Crear proyecto
1. Crear proyecto **cvpetrix2022**:
    + $ vue create cvpetrix2022
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Seleccionar: 3.x
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + ? Save this as a preset for future projects? (y/N): n
2. Ejecutar proyecto :
    + $ cd cvpetrix2022
    + $ npm run serve
3. Repositorio: **Proyecto en blanco**:
    + $ git add .
    + $ git commit -m "Proyecto en blanco"
    + $ git push -u origin main





## Sección 8: Forumularios (v-model)

### 76. Instalación de un nuevo proyecto
+ https://bluuweb.github.io/vue-udemy/05-form
1. Crear proyecto **06formulario**:
    + $ vue create 06formulario
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Seleccionar: 3.x
    + ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: In dedicated config files
    + ? Save this as a preset for future projects? (y/N): n
2. Ejecutar proyecto :
    + $ cd 06formulario
    + $ npm run serve
3. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            Inicio
        </div>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        }
    }
    </script>
    ```


### 78. Navbar de Bootstrap 4
1. Modificar **06formulario\public\index.html** para añadir CDN de **Bootstrap 4**:
    ```html
    <!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <title><%= htmlWebpackPlugin.options.title %></title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    <body>
        <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
    </body>
    </html>
    ```
    + CDN Bootstrap 4: https://getbootstrap.com/docs/4.6/getting-started/introduction
2. Modificar componente principal **06formulario\src\App.vue**:
    ```vue
    <template>
        <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </template>

    <script>
    import Navbar from './components/Navbar'
    export default {
        components: {
            Navbar
        }
    }
    </script>
    ```
3. Eliminar archivos:
    + 06formulario\src\components\HelloWorld.vue
    + 06formulario\src\assets\logo.png
4. Crear componente **06formulario\src\components\Navbar.vue**:
    ```vue
    <template>
        <div class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">
                Formulario
            </router-link>
            <div class="d-flex">
                <router-link to="/" class="btn btn-dark">
                    Tareas
                </router-link>
            </div>
        </div>
    </template>

    <script>
    export default {

    }
    </script>
    ```

### 79. v-model: text
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model="tarea.nombre">
        </form>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                tarea: {
                    nombre: ''
                }
            }
        }
    }
    </script>
    ```

### 80. v-model: checkbox
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model="tarea.nombre">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-1" value="JavaScript" v-model="tarea.categorias">
                <label class="form-check-label" for="check-1">JavaScript</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-2" value="Node.js" v-model="tarea.categorias">
                <label class="form-check-label" for="check-2">Node.js</label>
            </div>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                tarea: {
                    nombre: '',
                    categorias: []
                }
            }
        }
    }
    </script>
    ```

### 81. v-model: radio
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            ≡
            <div class="mt-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="radio-1" value="Urgente" v-model="tarea.estado">
                    <label class="form-check-label" for="radio-1">Urgente</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="radio-2" value="Rilax" v-model="tarea.estado">
                    <label class="form-check-label" for="radio-2">Rilax</label>
                </div>
            </div>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        name: 'Home',
        components: {
        },
        data() {
            return {
                tarea: {
                    nombre: '',
                    categorias: [],
                    estado: ''
                }
            }
        }
    }
    </script>
    ```

### 82. v-model: number
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form>
            ≡
            <div class="mt-2">
                <input type="number" v-model.number="tarea.numero" class="form-control">
            </div>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        data() {
            return {
                tarea: {
                    ≡
                    numero: 0
                }
            }
        }
    }
    </script>
    ```

### 83. trim y submit
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
            ≡
            <button class="btn btn-dark mt-2 btn-block" type="submit">Procesar</button>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
            }
        }
    }
    </script>
    ```

### 84. Validación
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            ≡
            <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="false">Procesar</button>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }
            }
        }
    }
    </script>
    ```

### 85. Bloquear botón submit
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            ≡
            <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>

    export default {
        ≡
        computed: {
            bloquear() {
                return this.tarea.nombre.trim() === '' ? true : false
            }
        }
    }
    </script>
    ```

### 86. Limpiar campos
1. Modificar vista **06formulario\src\views\Home.vue**:
    ```vue
    ≡
    <script>

    export default {
        ≡
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }
                // enviar los datos
                this.tarea = {
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        },
        ≡
    }
    </script>
    ```

### 87. Archivos Terminados de esta sección
+ Código fuente de la sección: 00recursos\Formularios.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Forumularios (v-model)"
+ $ git push -u origin main


## Sección 9: CRUD + LocalStorage
### 88. Presentación CRUD + LocalStorage
+ https://bluuweb.github.io/vue-udemy
+ **Contenido**: sobre lo que haremos en esta sección.

### 89. Clonar proyecto anterior
1. Crear proyecto **07formulario_crud** a partir del proyecto **06formulario**:
    + Realizar una copia del proyecto **06formulario** sin el directorio **06formulario\node_modules** y renombrarlo **07formulario_crud**.
2. Instalar las dependencias del nuevo proyecto **07formulario_crud** y ejecutarlo:
    + $ cd 07formulario_crud
    + $ npm i
    + $ npm run serve

### 90. Separar inputs en un componente
1. Instalar **ShortId** (para generar id) en el proyecto **07formulario_crud**:
    + $ cd 07formulario_crud
    + $ npm i shortid
2. Crear componente **07formulario_crud\src\components\Input.vue**:
    ```vue
    <template>
        <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="check-1" value="JavaScript" v-model="tarea.categorias">
            <label class="form-check-label" for="check-1">JavaScript</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="check-2" value="Node.js" v-model="tarea.categorias">
            <label class="form-check-label" for="check-2">Node.js</label>
        </div>
        <div class="mt-2">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="radio-1" value="Urgente" v-model="tarea.estado">
                <label class="form-check-label" for="radio-1">Urgente</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="radio-2" value="Rilax" v-model="tarea.estado">
                <label class="form-check-label" for="radio-2">Rilax</label>
            </div>
        </div>
        <div class="mt-2">
            <input type="number" v-model.number="tarea.numero" class="form-control">
        </div>
        <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
    </template>

    <script>
    export default {
        props: {
            tarea: Object
        },
        computed: {
            bloquear() {
                return this.tarea.nombre.trim() === '' ? true : false
            }
        }
    }
    </script>
    ```
3. Modificar vista **07formulario_crud\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>
    import Input from '../components/Input'

    export default {
        name: 'Home',
        components: {
            Input
        },
        data() {
            return {
                tarea: {
                    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        },
        methods: {
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }
                // enviar los datos
                this.tarea = {
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        }
    }
    </script>
    ```

### 91. Vuex y generar IDs
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        },
        mutations: {
            set(state, payload){
                state.tareas.push(payload)
                console.log(state.tareas)
            }
        },
        actions: {
            setTareas({ commit }, tarea) {
                commit('set', tarea)
            }
        },
        modules: {
        }
    })
    ```
2. Modificar vista **07formulario_crud\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <p>{{ tarea }}</p>
    </template>

    <script>
    import Input from '../components/Input'
    import { mapActions } from 'vuex'
    const shortid = require('shortid')

    export default {
        name: 'Home',
        components: {
            Input
        },
        data() {
            return {
                tarea: {
                    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        },
        methods: {
            ...mapActions(['setTareas']),
            procesarFormulario() {
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ''){
                    console.log('Campo vacío')
                    return
                }

                // generar id
                this.tarea.id = shortid.generate()
                console.log(this.tarea.id)

                // enviar los datos
                this.setTareas(this.tarea)

                // limpiar formulario
                this.tarea = {
				    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        }
    }
    </script>
    ```

### 92. Pintar Tareas en una tabla
+ https://getbootstrap.com/docs/4.5/content/tables
1. Crear componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    <template>
        {{ tareas }}
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categorías</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Número</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tarea in tareas" :key="tarea.id">
                    <th scope="row">{{ tarea.id }}</th>
                    <td>{{ tarea.nombre }}</td>
                    <td>{{ tarea.categorias }}</td>
                    <td>{{ tarea.estado }}</td>
                    <td>{{ tarea.numero }}</td>
                    <td>Acción</td>
                </tr>
            </tbody>
        </table>
    </template>

    <script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['tareas'])
        }
    }
    </script>
    ```
2. Modificar vista **07formulario_crud\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <ListaTareas />
    </template>

    <script>
    import Input from '../components/Input'
    import ListaTareas from '../components/ListaTareas'
    ≡

    export default {
        name: 'Home',
        components: {
            Input,
            ListaTareas
        },
        ≡
    }
    </script>
    ```

### 93. Pintar categorías (v-for dentro de otro v-for)
1. Modificar componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    ≡
    <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
            <th scope="row">{{ tarea.id }}</th>
            <td>{{ tarea.nombre }}</td>
            <td>
                <span v-for="(categoria, index) in tarea.categorias" :key="index">
                    {{ categoria + (tarea.categorias.length === index + 1 ? '' : ', ') }} 
                </span>
            </td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.numero }}</td>
            <td>Acción</td>
        </tr>
    </tbody>
    ≡
    ```

### 94. Función join() Javascript
+ Función join() Javascript: solución más elegante al punto anterior - Array.join(', ') para unir con comas:
    ```vue
    <td>{{ tarea.categorias.join(', ') }}</td>
    ```

### 95. Eliminar items
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    mutations: {
        ≡
        eliminar(state, payload){
            state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
        }
    },
    actions: {
        ≡
        deleteTareas({ commit }, id) {
            commit('eliminar', id)
        }
    },
    ≡
    ```
2. Modificar componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    <template>
        {{ tareas }}
        <table class="table">
            ≡
            <tbody>
                <tr v-for="tarea in tareas" :key="tarea.id">
                    ≡
                    <td>{{ tarea.numero }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="deleteTareas(tarea.id)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['tareas'])
        },
        methods: {
            ...mapActions(['deleteTareas'])
        }
    }
    </script>   
    ```

### 96. Editar items (parte 1 - capturar id)
1. Crear vista **07formulario_crud\src\views\Editar.vue**:
    ```vue
    <template>
        Editar {{ $route.params.id }} - {{ tarea }}
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['tarea'])
        },
        methods: {
            ...mapActions(['setTarea'])
        },
        created(){
            this.setTarea(this.$route.params.id)
        }
    }
    </script>
    ```
2. Modificar archivo de rutas **07formulario_crud\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/editar/:id',
            name: 'Editar',
            component: () => import('../views/Editar.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router
    ```
3. Modificar componente **07formulario_crud\src\components\ListaTareas.vue**:
    ```vue
    <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
            <th scope="row">{{ tarea.id }}</th>
            <td>{{ tarea.nombre }}</td>
            <td>{{ tarea.categorias.join(', ') }}</td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.numero }}</td>
            <td>
                <router-link class="btn btn-warning btn-sm" :to="{ name: 'Editar', params: { id: tarea.id} }">
                    Editar
                </router-link>
                <button class="btn btn-danger btn-sm ml-2" @click="deleteTareas(tarea.id)">
                    Eliminar
                </button>
            </td>
        </tr>
    </tbody>
    ```
4. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            ≡
            tarea(state, payload) {
                state.tarea =state.tareas.find(tarea => tarea.id === payload)
            }
        },
        actions: {
            ≡
            setTarea({ commit }, id) {
                commit('tarea', id)
            }
        },
        modules: {
        }
    })
    ```

### 97. Editar items (parte 2 - formulario edición)
1. Modificar vista **07formulario_crud\src\views\Editar.vue**:
    ```vue
    <template>
        Editar {{ $route.params.id }} - {{ tarea }}
        <form @submit.prevent="updateTarea(tarea)">
            <Input :tarea="tarea" />
        </form>
    </template>

    <script>
    import { mapState, mapActions } from 'vuex'
    import Input from '../components/Input'

    export default {
        components: {
            Input
        },
        computed: {
            ...mapState(['tarea'])
        },
        methods: {
            ...mapActions(['setTarea', 'updateTarea'])
        },
        created(){
            this.setTarea(this.$route.params.id)
        }
    }
    </script>
    ```
2. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        ≡
        mutations: {
            ≡
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            ≡
            updateTarea({ commit}, tarea) {
                commit('update', tarea)
            },
        },
        modules: {
        }
    })
    ```

### 98. Respaldar información en LocalStorage
1. Modificar tienda **07formulario_crud\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                localStorage.setItem('tareas', JSON.stringify(state.tareas))
                router.push('/')
            }
        },
        actions: {
            cargarLocalStorage({ commit }){
                if(localStorage.getItem('tareas')){
                    const tareas = JSON.parse(localStorage.getItem('tareas'))
                    commit('cargar', tareas)
                    return
                }
                localStorage.setItem('tareas', JSON.stringify([]))
            },
            ≡
        },
        ≡
    })
    ```
2. Modificar componente principal **07formulario_crud\src\App.vue**:
    ```vue
    <template>
        <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </template>

    <script>
    import Navbar from './components/Navbar'
    import { mapActions } from 'vuex'
    export default {
        components: {
            Navbar
        },
        methods: {
            ...mapActions(['cargarLocalStorage'])
        },
        created(){
            this.cargarLocalStorage()
        }
    }
    </script>
    ```

### 99. Archivos Terminados de esta sección
+ Código fuente de esta sección: 00recursos\Formulario+CRUD.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "CRUD + LocalStorage"
+ $ git push -u origin main


## Sección 10: API Rest Firebase
### 100. API REST Firebase - Introducción
+ https://bluuweb.github.io/vue-udemy
+ **Contenido**: sobre Firebase como Backend.

### 101. Firebase - Primeros pasos
1. Clonar el proyecto anterior **07formulario_crud** excluyendo la carpeta **07formulario_crud\node_modules** y llamándolo **08api_firebase**.
2. Instalar todas las dependencias del nuevo proyecto **08api_firebase** y ejecutar:
    + $ cd 08api_firebase
    + $ npm i
    + $ npm run serve
3. Ir a [firebase](https://firebase.google.com)
    + Ingresar y agregar proyecto.
    + Nombre: **api-firebase**.
    + Dashabilitar Google Analytics.
    + Ir a Realtime Database, crear una base de datos y comenzar en modo de prueba.
    + Obtener ruta raiz para consumir API's:
        + https://api-firebase-56408-default-rtdb.firebaseio.com

### 102. PUT o POST: Agregar tareas a nuestra base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        },
        mutations: {
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cargarLocalStorage({ commit }){
            },
            async setTareas({ commit }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            deleteTareas({ commit }, id) {
                commit('eliminar', id)
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            updateTarea({ commit}, tarea) {
                commit('update', tarea)
            },
        },
        modules: {
        }
    })
    ```

### 103. DevTools failed to load sourcemap
+ **Contenido**: sobre como quitar el mensaje de advertencia de DevTools en la consola del navegador.

### 104. GET: Leer base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        mutations: {
            ≡
        },
        actions: {
            async cargarLocalStorage({ commit }){
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas.json`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            ≡
        },
        ≡
    })
    ```

### 105. PATCH: Editar tarea de base de datos
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    async updateTarea({ commit}, tarea) {
        try {
            const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(tarea)
            })
            const dataDB = await res.json()
            commit('update', tarea)
        } catch (error) {
            console.log(error)
        }
    },
    ≡
    ```

### 106. DELETE: Eliminar tarea de base de datos
+ https://firebase.google.com/docs/database/rest/save-data
1. Modificar tienda **08api_firebase\src\store\index.js**:
    ```js
    ≡
    async deleteTareas({ commit }, id) {
        try {
            await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${id}.json`, {
                method: 'DELETE'
            })
            commit('eliminar', id)
        } catch (error) {
            console.log(error)
        }
    },
    ≡
    ```

### 107. Archivos Terminados de esta sección
+ Código fuente: 00recursos\API+Firebase.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "API Rest Firebase"
+ $ git push -u origin main


## Sección 11: API Auth Firebase - Rutas protegidas
### 108. Introducción API AUTH FIREBASE
+ https://bluuweb.github.io/vue-udemy/08-01-auth
+ **Contenido**: sobre autenticación con Firebase.

### 109. Importante - Recomendación
+ **Contenido**: recomendación para esta sección.

### 110. Reglas de seguridad Firebase
1. Clonar el proyecto anterior **08api_firebase** excluyendo la carpeta **08api_firebase\node_modules** y llamándolo **09api_auth_firebase**.
2. Instalar todas las dependencias del nuevo proyecto **09api_auth_firebase** y ejecutar:
    + $ cd 09api_auth_firebase
    + $ npm i
2. Ir a [firebase](https://firebase.google.com):
    + Ingresar al proyecto **api-firebase**.
    + Ir a **Realtime Database > Reglas** y configurar las reglas:
        ```json
        {
        "rules": {
            "tareas": {
                ".read": "auth != null",
                ".write": "auth != null"
            }
        }
        }
        ```
    + Presionar el botón **Publicar**.
3. Ejecutar proyecto:
    + $ npm run serve 

### 111. Formulario Registro con Validaciones en Vue.js
1. Modificar archivo de rutas **09api_auth_firebase\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        }
    ]
    ≡
    ```
2. Crear vista **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <form>
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            }
        }
    }
    </script>
    ```

### 112. Registrar usuario en Firebase
+ https://firebase.google.com/docs/reference/rest/auth
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		async registrarUsuario({ commit }, user) {
			try {
				// [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
					method: 'POST',
					body: JSON.stringify({
						email: user.email,
						password: user.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json()
				console.log(userDB)
			} catch (error) {
				console.log(error)
			}
		},
        ≡
    }
    ≡
    ```
    + **Nota 1**: ir a la documentación de [firebase](https://firebase.google.com/docs/reference/rest/auth) para obtener la estructura del endpoint para la autenticación:
        + https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
    + **Nota 2**: para obtener **API_KEY**:
        + Ir a [firebase](https://console.firebase.google.com)
        + Ir al proyecto **api-firebase**.
        + Ir a confguración del proyecto.
        + Ubicar **Clave de API de la web** (AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0).
        + En el panel izquierdo ir a **Authentication**.
        + Presionar en **Comenzar**.
        + En **Agrega tu primer método de acceso y comienza a utilizar Firebase Auth** presionar en **Correo electrónico/contraseña**.
        + Habilitar **Correo electrónico/contraseña** y presionar **Guardar**.
2. Modificar vista **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <form @submit.prevent="procesarFormulario">
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            procesarFormulario() {
                this.registrarUsuario({ email: this.email, password: this.pass1 })

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
                this.pass2 = ''
            }
        }
    }
    </script>
    ```

### 113. ¿No ves la API KEY?
+ **Nota**: en caso de **No hay clave de API web para este proyecto**, seguir los siguientes pasos:
    + Ir al panel **Tus apps** y presionar en **</>**.
    + Registrar app:
        + Sobrenombre de la app: api-firebase
    + Presionar en **Registrar app**.
    + Aparecerá un código similar a este:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0",
            authDomain: "api-firebase-56408.firebaseapp.com",
            databaseURL: "https://api-firebase-56408-default-rtdb.firebaseio.com",
            projectId: "api-firebase-56408",
            storageBucket: "api-firebase-56408.appspot.com",
            messagingSenderId: "652091577563",
            appId: "1:652091577563:web:7183b8e2883b7c8a3da8fe"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        ```
    + Obtener del código anterior **apiKey: "AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0"**.
    + Presionar en **Ir a la consola**.
    + En el panel izquierdo ir a **Authentication**.
    + Presionar en **Comenzar**.
    + En **Agrega tu primer método de acceso y comienza a utilizar Firebase Auth** presionar en **Correo electrónico/contraseña**.
    + Habilitar **Correo electrónico/contraseña** y presionar **Guardar**.

### 114. Corrección error video anterior + commit de usuario
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
    async registrarUsuario({ commit }, user) {
        try {
            // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email,
                    password: user.password,
                    returnSecureToken: true
                })
            })
            const userDB = await res.json()
            console.log(userDB)
            if(userDB.error) {
                console.log(userDB.error)
                return
            }
            commit('setUser', userDB)
			router.push('/')
        } catch (error) {
            console.log(error)
        }
        ≡
    },
    ≡
    ```

### 115. Ingreso de usuario (Login)
+ https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
1. Agregar ruta ing**reso en **09api_auth_firebase\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/ingreso',
            name: 'Ingreso',
            component: () => import('../views/Ingreso.vue')
        }
    ]
    ≡
    ```
2. Crear la vista **09api_auth_firebase\src\views\Ingreso.vue**:
    ```vue
    <template>
        <h1 class="my-5">Ingreso de usuarios</h1>
        <form @submit.prevent="procesarFormulario">
            <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Ingresar</button>
        </form>
    </template>

    <script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5){
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            procesarFormulario() {
                this.ingresoUsuario({ email: this.email, password: this.pass1 })

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
            }
        }
    }
    </script>
    ```
3. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		async ingresoUsuario({ commit }, user) {
			try {
				// [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
				const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
					method: 'POST',
					body: JSON.stringify({
						email: user.email,
						password: user.password,
						returnSecureToken: true
					})
				})
				const userDB = await res.json()
				console.log(userDB)
				if(userDB.error) {
					console.log(userDB.error)
					return
				}
				commit('setUser', userDB)
				router.push('/')
			} catch (error) {
				console.log(error)
			}
		},
        ≡
    }
    ≡
    ```

### 116. Reglas de seguridad Firebase
+ https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_id_token
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        actions: {
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('INGRESO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('REGISTRO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        ≡
    })
    ```
2. Modificar vista **09api_auth_firebase\src\views\Home.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <Input :tarea="tarea" />
        </form>
        <hr>
        <ListaTareas />
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ...mapActions(['setTareas', 'cargarLocalStorage']),
            ≡
        },
        created(){
            this.cargarLocalStorage()
        }
    }
    </script>
    ```
3. Cambiar reglas para la lista de tareas:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Realtime Database** en igresar a **Reglas**.
    + Modificar Reglas:
        ```json
        {
            "rules": {
                "tareas": {
                    "$uid": {
                        ".write": "$uid === auth.uid",
                        ".read": "$uid === auth.uid"
                    }
                }
            }
        }
        ```
        + **Nota 1**: presionar en **Publicar** para guardar los cambios.
        + **Nota 2**: en el objeto **user** el **localId** equivale al **uid**.

### 117. Getters: Ocultar enlaces navbar
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	getters: {
		usuarioAutenticado(state) {
			return !!state.user		// Si user existe retornará true
		}
	},
	modules: {
	}
    ≡
    ```
2. Modificar componente **09api_auth_firebase\src\components\Navbar.vue**:
    ```vue
    <template>
        {{ usuarioAutenticado }}
        <div class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">
                Formulario
            </router-link>
            <div class="d-flex">
                <router-link to="/" class="btn btn-dark" v-if="usuarioAutenticado">
                    Tareas
                </router-link>
                <router-link to="/ingreso" class="btn btn-dark" v-if="!usuarioAutenticado">
                    Ingresar
                </router-link>
                <router-link to="/registro" class="btn btn-dark" v-if="!usuarioAutenticado">
                    Registrarse
                </router-link>
                <button v-if="usuarioAutenticado" class="btn btn-dark">Cerrar Sesión</button>
            </div>
        </div>
    </template>
    ≡
    ```

### 118. Cerrar sesión
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    ≡
	actions: {
		cerrarSesion({ commit }) {
			commit('setUser', null)
			router.push('/ingreso')
		},
        ≡
    }
    ```
2. Modificar componente **09api_auth_firebase\src\components\Navbar.vue**:
    ```vue
    <template>
        <div class="navbar navbar-dark bg-dark">
            ≡
            <div class="d-flex">
                ≡
                <button v-if="usuarioAutenticado" class="btn btn-dark" @click="cerrarSesion">
                    Cerrar Sesión
                </button>
            </div>
        </div>
    </template>

    <script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        ≡
        methods: {
            ...mapActions(['cerrarSesion'])
        }
    }
    </script>
    ```

### 119. Router: Rutas protegidas
1. Modificar archivo de rutas **09api_auth_firebase\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from '../views/Home.vue'
    import store from '../store'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {rutaProtegida: true}
        },
        {
            path: '/editar/:id',
            name: 'Editar',
            component: () => import('../views/Editar.vue'),
            meta: {rutaProtegida: true}
        },
        {
            path: '/registro',
            name: 'Registro',
            component: () => import('../views/Registro.vue')
        },
        {
            path: '/ingreso',
            name: 'Ingreso',
            component: () => import('../views/Ingreso.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    router.beforeEach((to, from, next) => {
        console.log(to.meta.rutaProtegida)
        if(to.meta.rutaProtegida) {
            if(store.getters.usuarioAutenticado) {
                next()
            } else {
                next('/ingreso')
            }
        } else {
            next()
        }
    })

    export default router
    ```
2. Eliminar vista **09api_auth_firebase\src\views\About.vue**.

### 120. Guardar Token en LocalStorage
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            user: null
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            },
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cerrarSesion({ commit }) {
                commit('setUser', null)
                router.push('/ingreso')
                localStorage.removeItem('usuario')
            },
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('INGRESO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    console.log('REGISTRO: ', userDB)
                    if(userDB.error) {
                        console.log(userDB.error)
                        return
                    }
                    commit('setUser', userDB)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                if(localStorage.getItem('usuario')){
                    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
                } else {
                    return commit('setUser', null)
                }
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        getters: {
            usuarioAutenticado(state) {
                return !!state.user		// Si user existe retornará true
            }
        },
        modules: {
        }
    })
    ```

### 121. Hosting Firebase
1. Compilar el proyecto **09api_auth_firebase** para hacer deploy en Google Firebase:
    + $ cd 09api_auth_firebase
    + $ npm run build
2. Instalar las herramientas de Firebase en la PC:
    + $ npm install -g firebase-tools
3. Hacer deploy:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Hosting** y presionar en **Comenzar**.
    + Presionar en **Siguiente**.
    + En consola de la pc ubicados en la raíz del proyecto:
        + $ firebase login
        + $ firebase init
            + ? Are you ready to proceed? (Y/n): y
            + Seleccionar:
                + ( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            + Seleccionar: > Use an existing project
            + Seleccionar: > api-firebase-56408 (api-firebase)
            + ? What do you want to use as your public directory? (public): dist
            + ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N): y
            + ? Set up automatic builds and deploys with GitHub? (y/N): n
            + ? File dist/index.html already exists. Overwrite? (y/N): n
    + Presionar en **Siguiente**.
    + En consola de la pc ubicados en la raíz del proyecto:
        + $ firebase deploy
            + URL de la aplicación: https://api-firebase-56408.web.app

### 122. Hosting Netlify
1. Ir a la página de **Netlify** y subir la carpeta **dist**:
    + Nombre del sitio: https://firebase-api-hspp.netlify.app
2. En Google Firebase:
    + Ir a [firebase](https://console.firebase.google.com)
    + Ir al proyecto **api-firebase**.
    + Ir a **Authentication** y luego a **Sign-in method**.
    + En **Dominios autorizado** presionar en **Agregar un dominio** y agregar: https://firebase-api-hspp.netlify.app

### 123. Refresh 404 Hosting Netlify
+ **Nota**: si al hacer refresh en su sitio web desplegado en Netlify con el modo History de vue, tira un 404, seguir los siguientes pasos:
    + Crear archivo **09api_auth_firebase\public\_redirects**:
        ```
        /* /index.html  200
        ```
    + Compilar nuevamente:
        + $ cd 09api_auth_firebase
        + $ npm run build
    + Subir nuevamente el proyecto a Netlify.

### 124. Mensajes error Firebase
1. Modificar tienda **09api_auth_firebase\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'
    import router from '../router'

    export default createStore({
        state: {
            tareas: [],
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            },
            user: null,
            error: {
                tipo: null,
                mensaje: null
            },
        },
        mutations: {
            setError(state, payload) {
                if(payload === null) {
                    return state.error = { tipo: null, mensaje: null}
                }
                if(payload === "EMAIL_NOT_FOUND") {
                    return state.error = { tipo: 'email', mensaje: 'Email no registrado'}
                }
                if(payload === "INVALID_PASSWORD") {
                    return state.error = { tipo: 'password', mensaje: 'Contraseña incorrecta'}
                }
                if(payload === "EMAIL_EXISTS") {
                    return state.error = { tipo: 'email', mensaje: 'El email ya existe'}
                }
                if(payload === "INVALID_EMAIL") {
                    return state.error = { tipo: 'email', mensaje: 'Email no válido'}
                }
            },
            setUser(state, payload) {
                state.user = payload
            },
            cargar(state, payload) {
                state.tareas = payload
            },
            set(state, payload){
                state.tareas.push(payload)
            },
            eliminar(state, payload){
                state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
            },
            tarea(state, payload) {
                if(!state.tareas.find(tarea => tarea.id === payload)){
                    router.push('/')
                    return
                }
                state.tarea = state.tareas.find(tarea => tarea.id === payload)
            },
            update(state, payload) {
                state.tarea =state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
                router.push('/')
            }
        },
        actions: {
            cerrarSesion({ commit }) {
                commit('setUser', null)
                router.push('/ingreso')
                localStorage.removeItem('usuario')
            },
            async ingresoUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    if(userDB.error) {
                        console.log(userDB.error)
                        return commit('setError', userDB.error.message)
                    }
                    commit('setUser', userDB)
                    commit('setError', null)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async registrarUsuario({ commit }, user) {
                try {
                    // [API_KEY] = AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0
                    const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAivWG3bdgjEZDHpsaCv2kX2FuiC0m9Z0' , {
                        method: 'POST',
                        body: JSON.stringify({
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        })
                    })
                    const userDB = await res.json()
                    if(userDB.error) {
                        console.log(userDB.error)
                        return commit('setError', userDB.error.message)
                    }
                    commit('setUser', userDB)
                    commit('setError', null)
                    router.push('/')
                    localStorage.setItem('usuario', JSON.stringify(userDB))
                } catch (error) {
                    console.log(error)
                }
            },
            async cargarLocalStorage({ commit, state }){
                if(localStorage.getItem('usuario')){
                    commit('setUser', JSON.parse(localStorage.getItem('usuario')))
                } else {
                    return commit('setUser', null)
                }
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
                    const dataDB = await res.json()
                    
                    const tareas = []
                    console.log('Table:', dataDB)
                    for (let id in dataDB){
                        tareas.push(dataDB[id])
                    }
                    commit('cargar', tareas)
                } catch (error) {
                    console.log(error)
                }
            },
            async setTareas({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    console.log(dataDB)
                } catch (error) {
                    console.log(error)
                }
                commit('set', tarea)
            },
            async deleteTareas({ commit, state }, id) {
                try {
                    await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
                        method: 'DELETE'
                    })
                    commit('eliminar', id)
                } catch (error) {
                    console.log(error)
                }
            },
            setTarea({ commit }, id) {
                commit('tarea', id)
            },
            async updateTarea({ commit, state }, tarea) {
                try {
                    const res = await fetch(`https://api-firebase-56408-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
                        method: 'PUT',
                        body: JSON.stringify(tarea)
                    })
                    const dataDB = await res.json()
                    commit('update', tarea)
                } catch (error) {
                    console.log(error)
                }
            },
        },
        getters: {
            usuarioAutenticado(state) {
                return !!state.user		// Si user existe retornará true
            }
        },
        modules: {
        }
    })
    ```
2. Modificar componente **09api_auth_firebase\src\views\Ingreso.vue**:
    ```vue
    <template>
        <h1 class="my-5">Ingreso de usuarios</h1>
        <div class="alert alert-danger" v-if="error.tipo !== null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <input 
                type="email" 
                placeholder="email" 
                class="form-control my-2" 
                v-model.trim="email"
                :class="[error.tipo === 'email' ? 'is-invalid' : '']"
            >
            <input 
                type="password" 
                placeholder="password" 
                class="form-control my-2" 
                v-model.trim="pass1"
                :class="[error.tipo === 'password' ? 'is-invalid' : '']"
            >
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Ingresar</button>
        </form>
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5){
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            async procesarFormulario() {
                await this.ingresoUsuario({ email: this.email, password: this.pass1 })
                if(this.error.tipo !== null){
                    return
                }

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
            }
        }
    }
    </script>
    ```
3. Modificar componente **09api_auth_firebase\src\views\Registro.vue**:
    ```vue
    <template>
        <h1 class="my-5">Registro de usuarios</h1>
        <div class="alert alert-danger" v-if="error.tipo !== null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <input 
                type="email" 
                placeholder="email" 
                class="form-control my-2" 
                v-model.trim="email"
                :class="[error.tipo === 'email' ? 'is-invalid' : '']"
            >
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1">
            <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2">
            <button type="submit" class="btn btn-primary" :disabled="bloquear">Registrar</button>
        </form>
    </template>

    <script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed: {
            bloquear(){
                if(!this.email.includes('@')){
                    return true
                }
                if(this.pass1.length > 5 && this.pass1 === this.pass2){
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            async procesarFormulario() {
                await this.registrarUsuario({ email: this.email, password: this.pass1 })
                if(this.error.tipo !== null){
                    return
                }

                // Limpiar formulario
                this.email = ''
                this.pass1 = ''
                this.pass2 = ''
            }
        }
    }
    </script>
    ```

### 125. Archivos Terminados de esta sección
+ Código fuente: 00recursos\API+AUTH+Firebase.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "API Auth Firebase - Rutas protegidas"
+ $ git push -u origin main


## Sección 12: Composition API - Fundamentos
### 126. Composition API - Introducción
+ **Contenido**: introducción a la sección.

### 127. ¿Por qué utilizar Composition API?
1. Crear proyecto **10composition_api**:
    + $ vue create 10composition_api
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Vuex
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 3.x
    + Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys): In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar vista **10composition_api\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
        </div>
    </template>

    <script>
    export default {
    }
    </script>
    ```

### 128. Setup, Ref y Métodos
1. Modificar vista **10composition_api\src\views\Home.vue** (Ejemplo de **Options API**):
    ```vue
    <template>
        <div class="home">
            <h1>Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            aumentar() {
                this.contador++
            },
            disminuir() {
                this.contador--
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div class="about">
            <h1>Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    import { ref } from 'vue'

    export default {
        setup() {
            // Variables
            const contador = ref(0)

            // Métodos
            const aumentar = () => {
                contador.value++
            }
            const disminuir = () => {
                contador.value--
            }

            // Retorno de variables y métodos
            return {
                contador,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 129. Propiedades computadas (computed)
1. Modificar vista **10composition_api\src\views\Home.vue** (Ejemplo de **Options API**):
    ```vue
    <template>
        <div class="home">
            <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        computed: {
            color() {
                return this.contador < 0 ? 'red' : 'blue'
            }
        },
        methods: {
            aumentar() {
                this.contador++
            },
            disminuir() {
                this.contador--
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div class="about">
            <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
            <button @click="aumentar">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    import { computed, ref } from 'vue'

    export default {
        setup() {
            // Variables
            const contador = ref(0)

            // Propiedades computadas
            const color = computed(() => contador.value < 0 ? 'red' : 'blue')

            // Métodos
            const aumentar = () => {
                contador.value++
            }
            const disminuir = () => {
                contador.value--
            }

            // Retorno de variables y métodos
            return {
                contador,
                color,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 130. v-model
1. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div>
            <div class="about">
                <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
                <button @click="aumentar">+</button>
                <button @click="disminuir">-</button>
            </div>
            <hr>
            <input type="text" v-model="texto">
            <p>{{ texto }}</p>
        </div>
    </template>

    <script>
    import { computed, ref } from 'vue'

    export default {
        setup() {
            // Variables
            const contador = ref(0)
            const texto = ref('')

            // Propiedades computadas
            const color = computed(() => contador.value < 0 ? 'red' : 'blue')

            // Métodos
            const aumentar = () => {
                contador.value++
            }
            const disminuir = () => {
                contador.value--
            }

            // Retorno de variables y métodos
            return {
                contador,
                texto,
                color,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 131. Props - Comunicación entre componentes
1. Crear componente **10composition_api\src\components\Titulo.vue**:
    ```vue
    <template>
        <h1 :style="{'color': color}">Contador: {{ signoPeso }}</h1>
    </template>

    <script>
    import { computed } from 'vue'

    export default {
        props: ['contador', 'color'],

        /* computed: {
            signoPeso() {
                return '$' + this.contador
            }
        } */

        setup(props) {
            const signoPeso = computed(() => {
                return '$' + props.contador
            })

            return {
                signoPeso
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue** (Ejemplo de **Compositions API**):
    ```vue
    <template>
        <div>
            <div class="about">
                <Titulo :contador="contador" :color="color" />
                <!-- <h1 :style="{'color': color}">Contador: {{ contador }}</h1> -->
                <button @click="aumentar">+</button>
                <button @click="disminuir">-</button>
            </div>
            <hr>
            <input type="text" v-model="texto">
            <p>{{ texto }}</p>
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    import { computed, ref } from 'vue'

    export default {
        components: {
            Titulo
        },
        setup() {
            // Variables
            const contador = ref(0)
            const texto = ref('')

            // Propiedades computadas
            const color = computed(() => contador.value < 0 ? 'red' : 'blue')

            // Métodos
            const aumentar = () => {
                contador.value++
            }
            const disminuir = () => {
                contador.value--
            }

            // Retorno de variables y métodos
            return {
                contador,
                texto,
                color,
                aumentar,
                disminuir
            }
        }
    }
    </script>
    ```

### 132. emit: Comunicación del hijo al padre (componentes)
1. Crear componente **10composition_api\src\components\Btn.vue**:
    ```vue
    <template>
        <!-- <button @click="$emit('accion')">{{ textoBoton }}</button> -->
        <button @click="accionHijo">{{ textoBoton }}</button>
    </template>

    <script>
    export default {
        props: ['textoBoton'],
        setup(props, context) {
            const accionHijo = () => {
                context.emit('accion')
            }

            return {
                accionHijo
            }
        }
    }
    </script>
    ```
2. Modificar vista **10composition_api\src\views\About.vue**:
    ```vue
    <template>
        <div>
            <div class="about">
                <Titulo :contador="contador" :color="color" />
                <!-- <button @click="aumentar">+</button>
                <button @click="disminuir">-</button> -->
                <Btn :textoBoton="'+'" @accion="aumentar" />
                <Btn :textoBoton="'-'" @accion="disminuir" />
            </div>
            <hr>
            <input type="text" v-model="texto">
            <p>{{ texto }}</p>
        </div>
    </template>

    <script>
    import Titulo from '../components/Titulo'
    import Btn from '../components/Btn'
    import { computed, ref } from 'vue'

    export default {
        components: {
            Titulo,
            Btn
        },
        ≡
    }
    </script>
    ```

### 133. Reutilizando lógica de componentes
1. Crear vista **10composition_api\src\views\Contador.vue**:
    ```vue
    <template>
        <div>
            <h1>Contador: {{ contador }}</h1>
            <Btn :textoBoton="'+'" @accion="aumentar" />
            <Btn :textoBoton="'-'" @accion="disminuir" />
        </div>
    </template>

    <script>
    import Btn from '../components/Btn'
    import { useContador } from '../hooks/useContador'

    export default {
        components: {
            Btn
        },
        setup() {
            return { ...useContador() }
        }
    }
    </script>
    ```
2. Crear **10composition_api\src\hooks\useContador.js**:
    ```js
    import { ref } from 'vue'

    export function useContador() {
        // Variables
        const contador = ref(0)

        // Métodos
        const aumentar = () => {
            contador.value++
        }
        const disminuir = () => {
            contador.value--
        }

        // Retorno de variables y métodos
        return {
            contador,
            aumentar,
            disminuir
        }
    }
    ```
3. Modificar archivo de rutas **10composition_api\src\router\index.js**:
    ```js
    ≡
    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contador',
            name: 'Contador',
            component: () => import('../views/Contador.vue')
        }
    ]
    ≡
    ```
4. Modificar componente principal **10composition_api\src\App.vue**:
    ```vue
    <template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contador">Contador</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```

### 134. Práctica consumir API Pública (fetch y onMounted)
1. Crear **10composition_api\public\api.json**:
    ```json
    [
        {
            "name": "Afghanistan",
            "topLevelDomain": [
                ".af"
            ],
            "alpha2Code": "AF",
            "alpha3Code": "AFG",
            "callingCodes": [
                "93"
            ],
            "capital": "Kabul",
            "altSpellings": [
                "AF",
                "Afġānistān"
            ],
            "region": "Asia",
            "subregion": "Southern Asia",
            "population": 27657145,
            "latlng": [
                33,
                65
            ],
            "demonym": "Afghan",
            "area": 652230,
            "gini": 27.8,
            "timezones": [
                "UTC+04:30"
            ],
            "borders": [
                "IRN",
                "PAK",
                "TKM",
                "UZB",
                "TJK",
                "CHN"
            ],
            "nativeName": "افغانستان",
            "numericCode": "004",
            "currencies": [
                {
                    "code": "AFN",
                    "name": "Afghan afghani",
                    "symbol": "؋"
                }
            ],
            "languages": [
                {
                    "iso639_1": "ps",
                    "iso639_2": "pus",
                    "name": "Pashto",
                    "nativeName": "پښتو"
                },
                {
                    "iso639_1": "uz",
                    "iso639_2": "uzb",
                    "name": "Uzbek",
                    "nativeName": "Oʻzbek"
                },
                {
                    "iso639_1": "tk",
                    "iso639_2": "tuk",
                    "name": "Turkmen",
                    "nativeName": "Türkmen"
                }
            ],
            "translations": {
                "de": "Afghanistan",
                "es": "Afganistán",
                "fr": "Afghanistan",
                "ja": "アフガニスタン",
                "it": "Afghanistan",
                "br": "Afeganistão",
                "pt": "Afeganistão",
                "nl": "Afghanistan",
                "hr": "Afganistan",
                "fa": "افغانستان"
            },
            "flag": "https://restcountries.eu/data/afg.svg",
            "regionalBlocs": [
                {
                    "acronym": "SAARC",
                    "name": "South Asian Association for Regional Cooperation",
                    "otherAcronyms": [],
                    "otherNames": []
                }
            ],
            "cioc": "AFG"
        },
        {
            "name": "Åland Islands",
            ≡
        },
        ≡
    ]
    ```
    + **Nota**: descargar archivo completo del repositorio.
2. Crear vista **10composition_api\src\views\Paises.vue**:
    ```vue
    <template>
        <h1>Lista de paises</h1>
        <p v-for="(pais, index) in paises" :key="index">{{ pais.name }}</p>
    </template>

    <script>
    import { onMounted, ref } from 'vue'

    export default {
        setup() {
            const paises = ref([])

            onMounted(async() => {
                try {
                    /* const res = await fetch('https://restcountries.eu/rest/v2/all') */
                    const res = await fetch('api.json')
                    paises.value = await res.json()
                } catch (error) {
                    console.log(error)
                }
            })

            /* const fetchData = async() => {
                try {
                    // const res = await fetch('https://restcountries.eu/rest/v2/all')
                    const res = await fetch('api.json')
                    paises.value = await res.json()
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData() */

            return {
                paises
            }
        }
    }
    </script>
    ```
3. Modificar archivo de rutas **10composition_api\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/paises',
            name: 'Paises',
            component: () => import('../views/Paises.vue')
        }
    ]
    ≡
    ```
4. Modificar componente principal **10composition_api\src\App.vue**:
    ```vue
    <template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contador">Contador</router-link> |
            <router-link to="/paises">Paises</router-link>
        </div>
        <router-view/>
    </template>
    ≡
    ```

### 135. Params en setup()
1. Modificar archivo de rutas **10composition_api\src\router\index.js**:
    ```js
    ≡
    const routes = [
        ≡
        {
            path: '/paises/:nombre',
            name: 'Pais',
            props: true,
            component: () => import('../views/Pais.vue')
        }
    ]
    ≡
    ```
2. Crear vista **10composition_api\src\views\Pais.vue**:
    ```vue
    <template>
        <div>
            <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
            <h1>Detalle: {{ nombre }}</h1>
        </div>
    </template>

    <script>
    import { useRoute } from 'vue-router'
    export default {
        props: ['nombre'],
        setup(props) {
            console.log(props.nombre)
            const nombreParams = useRoute()
            console.log(nombreParams.params.nombre)
        }
    }
    </script>
    ```
3. Modificar vista **10composition_api\src\views\Paises.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de paises</h1>
            <p v-for="(pais, index) in paises" :key="index">
                <router-link :to="`/paises/${pais.name}`">
                    {{ pais.name }}
                </router-link>
            </p>
        </div>
    </template>
    ```

### 136. Hooks - Reutilización
1. Crear **10composition_api\src\hooks\useFetch.js**:
    ```js
    import { onMounted, ref } from 'vue'

    export function useFetch(url) {
        const paises = ref([])

        onMounted(async() => {
            try {
                const res = await fetch(url)
                paises.value = await res.json()
            } catch (error) {
                console.log(error)
            }
        })

        return {
            paises
        }
    }
    ```
2. Modificar vista **10composition_api\src\views\Paises.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de paises</h1>
            <p v-for="(pais, index) in paises" :key="index">
                <router-link :to="`/paises/${pais.name}`">
                    {{ pais.name }}
                </router-link>
            </p>
        </div>
    </template>

    <script>
    import { useFetch } from '../hooks/useFetch'

    export default {
        setup() {
            return {
                /* ...useFetch('https://restcountries.eu/rest/v2/all') */
                ...useFetch('api.json')
            }
        }
    }
    </script>
    ```
3. Modificar vista **10composition_api\src\views\Pais.vue**:
    ```vue
    <template>
        <div>
            <!-- <h1>Detalle: {{ $route.params.nombre }}</h1> -->
            <h1>Detalle: {{ nombre }}</h1>
            <p v-for="(pais, index) in arrayData" :key="index">
                {{ pais.name }} - {{ pais.region }}
            </p>
        </div>
    </template>

    <script>
    import { useFetch } from '../hooks/useFetch'
    import { useRoute } from 'vue-router'

    export default {
        props: ['nombre'],
        setup(props) {
            /* console.log(props.nombre) */
            const nombreParams = useRoute()
            console.log(nombreParams.params.nombre)
            const { arrayData } = useFetch(`https://restcountries.eu/rest/v2/${nombreParams.params.nombre}`)

            return {
                arrayData
            }
        }
    }
    </script>
    ```

### 137. Archivos Terminados de esta sección
+ **Código fuente de esta sección**: 00recursos\composition-fundamentos.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Composition API - Fundamentos"
+ $ git push -u origin main


## Sección 13: Vuex y Composition API
### 138. Introducción a Vuex y Composition API
+ https://bluuweb.github.io/vue-udemy/21-vuex-composition
+ https://next.vuex.vuejs.org/guide/composition-api.html#accessing-state-and-getters
+ **Contenido**: sobre la aplicación que desarrollaremos en esta sección.

### 139. Instalación de Vue 3 + Vuex
1. Crear proyecto **11api_banderas**:
    + $ vue create 11api_banderas
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Vuex
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 3.x
    + Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys): In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div>
            api Paises
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        components: {
        }
    }
    </script>
    ```
3. Eliminar los siguientes archivos:
    + 11api_banderas\src\components\HelloWorld.vue
    + 11api_banderas\src\assets\logo.png
4. Modificar **11api_banderas\public\index.html** para incorporar Bootstrap:
    ```html
    ≡
    <head>
        ≡
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    ≡
    ```

### 140. URL API
1. Aquí puedes revisar la lista de todos los paises en la v3 de la API:
    + https://restcountries.com/v3/all
    + **Nota**: La versión 2 utilizada está con problemas, así que recomiendo utilizar la v3
2. Crear **11api_banderas\public\api-paises.json**:
    ```json
    [
        {
            "name": {
                "common": "Djibouti",
                "official": "Republic of Djibouti",
                "nativeName": {
                    "ara": {
                        "official": "جمهورية جيبوتي",
                        "common": "جيبوتي‎"
                    },
                    "fra": {
                        "official": "République de Djibouti",
                        "common": "Djibouti"
                    }
                }
            },
            ≡
        }
        ≡
    ]
    ```
    + **Nota**: descargar archivo completo del repositorio.

### 141. Composition API - Actions
1. Modificar componente principal **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <h1 class="text-center">Paises API</h1>
            <CardList />
        </div>
    </template>

    <script>
    import CardList from './components/CardList'
    export default {
        name: 'App',
        components: {
            CardList
        }
    }
    </script>
    ```
2. Crear componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    <template>
        <div class="row">
            <div class="col-12">
                Card
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'
    import { onMounted } from 'vue'

    export default {
        setup() {
            const store = useStore()
            onMounted(() => {
                store.dispatch('getPaises')
            })
        }
    }
    </script>

    <style>

    </style>
    ```
3. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            paises: [],
            paisesFiltrados: []
        },
        mutations: {
            setPaises(state, payload) {
                state.paises = payload
            },
            setPaisesFiltrados(state, payload) {
                state.paisesFiltrados = payload
            }
        },
        actions: {
            async getPaises({ commit }) {
                try {
                    const res = await fetch('https://restcountries.com/v2/all')
                    const data = await res.json()
                    // console.log(data)
                    commit('setPaises', data)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        modules: {
        }
    })
    ```

### 142. Composition API - State
1. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    <template>
        <div class="row">
            <div class="col-12">
                {{ paises }}
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'
    import { computed, onMounted } from 'vue'

    export default {
        setup() {
            const store = useStore()

            const paises = computed(() => {
                return store.state.paises
            })

            onMounted(() => {
                store.dispatch('getPaises')
            })

            return {
                paises
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 143. Configurar Getters
1. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    ≡
    export default createStore({
        ≡
        getters: {
            topPaisesPoblacion(state) {
                return state.paises.sort((a, b) => {
                    return a.population < b.population ? 1 : -1
                })
            }
        },
        modules: {
        }
    })
    ```
2. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    ≡
    setup() {
        const store = useStore()

        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })

        onMounted(() => {
            store.dispatch('getPaises')
        })

        return {
            paises
        }
    }
    ≡
    ```

### 144. Composition API - Getters
1. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    <template>
        <div class="row">
            <div class="col-12" v-for="pais in paises" :key="pais.name">
                <Card :pais="pais" />
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'
    import { computed, onMounted } from 'vue'
    import Card from './Card'

    export default {
        components: {
            Card
        },
        ≡
    }
    </script>
    ≡
    ```
2. Crear componente **11api_banderas\src\components\Card.vue**:
    ```vue
    <template>
        <div class="card">
            <div class="card-body">
                <h5>{{ pais.name }}</h5>
                <p class="cart-text">
                    <span class="badge bg-secondary d-block mb-1">nativeName: {{ pais.nativeName }}</span>
                    <span class="badge bg-info p-3 d-block mb-1">population: {{ pais.population }}</span>
                    <span class="badge bg-secondary d-block mb-1">capital: {{ pais.capital }}</span>
                    <span class="badge bg-secondary d-block mb-1">region: {{ pais.region }}</span>
                </p>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: ['pais']
    }
    </script>

    <style>

    </style>
    ```

### 145. Formatear número
1. Modificar componente **11api_banderas\src\components\Card.vue**:
    ```vue
    <template>
        <div class="card mb-2">
            <div class="card-body">
                <h5>{{ pais.name }}</h5>
                <p class="cart-text">
                    <span class="badge bg-secondary d-block mb-1">nativeName: {{ pais.nativeName }}</span>
                    <span class="badge bg-info p-3 d-block mb-1">population: {{ numeroFormato(pais.population) }}</span>
                    <span class="badge bg-secondary d-block mb-1">capital: {{ pais.capital }}</span>
                    <span class="badge bg-secondary d-block mb-1">region: {{ pais.region }}</span>
                </p>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: ['pais'],
        setup() {
            const numeroFormato = (num) => {
                return new Intl.NumberFormat("de-DE").format(num)
            }

            return {
                numeroFormato
            }
        }
    }
    </script>

    <style>

    </style>
    ```

### 146. Pintar Banderas
1. Modificar componente **11api_banderas\src\components\Card.vue**:
    ```vue
    ≡
    <div class="card-body">
        <h5 class="text-center">{{ pais.name }}</h5>
        <p class="text-center">
            <img :src="pais.flag" :alt="`bandera-${pais.name}`" class="img-fluid w-50">
        </p>
        <p class="cart-text">
            <span class="badge bg-secondary d-block mb-1">nativeName: {{ pais.nativeName }}</span>
            <span class="badge bg-info p-3 d-block mb-1">population: {{ numeroFormato(pais.population) }}</span>
            <span class="badge bg-secondary d-block mb-1">capital: {{ pais.capital }}</span>
            <span class="badge bg-secondary d-block mb-1">region: {{ pais.region }}</span>
        </p>
    </div>
    ≡
    ```

### 147. Vuex - Filtrar países
1. Crear componente **11api_banderas\src\components\Continentes.vue**:
    ```vue
    <template>
        <div class="text-center">
            <h3>Continentes</h3>
            <div class="btn-group mb-3">
                <button class="btn btn-secondary">AM</button>
                <button class="btn btn-secondary">EU</button>
                <button class="btn btn-secondary">AS</button>
                <button class="btn btn-secondary">OC</button>
                <button class="btn btn-secondary">AF</button>
                <button class="btn btn-secondary">ALL</button>
            </div>
        </div>
    </template>

    <script>
    export default {

    }
    </script>
    ```
2. Modificar componente principal **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <h1 class="text-center">Paises API</h1>
            <Continentes />
            <CardList />
        </div>
    </template>

    <script>
    import CardList from './components/CardList'
    import Continentes from './components/Continentes'

    export default {
        name: 'App',
        components: {
            CardList,
            Continentes
        }
    }
    </script>
    ```
3. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            paises: [],
            paisesFiltrados: []
        },
        mutations: {
            setPaises(state, payload) {
                state.paises = payload
            },
            setPaisesFiltrados(state, payload) {
                state.paisesFiltrados = payload
            }
        },
        actions: {
            async getPaises({ commit }) {
                try {
                    // const res = await fetch('https://restcountries.com/v2/all')
                    const res = await fetch('api.json')
                    const data = await res.json()
                    // console.log(data)
                    commit('setPaises', data)
                } catch (error) {
                    console.log(error)
                }
            },
            filtrarRegion({ commit, state }, region) {
                const filtro = state.paises.filter(pais => pais.region.includes(region))
                // Otra forma:
                // const filtro = state.paises.filter(pais => pais.region === region)

                commit('setPaisesFiltrados', filtro)
            }
        },
        getters: {
            topPaisesPoblacion(state) {
                return state.paisesFiltrados.sort((a, b) => {
                    return a.population < b.population ? 1 : -1
                })
            }
        },
        modules: {
        }
    })
    ```
4. Modificar componente **11api_banderas\src\components\CardList.vue**:
    ```vue
    ≡
    onMounted(async() => {
        await store.dispatch('getPaises')
        await store.dispatch('filtrarRegion', 'Americas')
    })
    ≡
    ```

### 148. Vuex - Filtrar por región
1. Modificar componente **11api_banderas\src\components\Continentes.vue**:
    ```vue
    <template>
        <div class="text-center">
            <h3>Continentes</h3>
            <div class="btn-group mb-3">
                <button class="btn btn-secondary" @click="filtro('Americas')">AM</button>
                <button class="btn btn-secondary" @click="filtro('Europe')">EU</button>
                <button class="btn btn-secondary" @click="filtro('Asia')">AS</button>
                <button class="btn btn-secondary" @click="filtro('Oceania')">OC</button>
                <button class="btn btn-secondary" @click="filtro('Africa')">AF</button>
                <button class="btn btn-secondary" @click="filtro('')">ALL</button>
            </div>
        </div>
    </template>

    <script>
    import { useStore } from 'vuex'

    export default {
        setup() {
            const store = useStore()

            const filtro = (region) => {
                store.dispatch('filtrarRegion', region)
            }

            return {
                filtro
            }
        }
    }
    </script>
    ```

### 149. KeyUp: Buscador en tiempo real
1. Crear componente **11api_banderas\src\components\Buscador.vue**:
    ```vue
    <template>
        <input 
            type="text"
            placeholder ="Ingrese país"
            class="form-control my-3"
            v-model="pais"
            @keyup="procesarInput"
        >
    </template>

    <script>
    import { ref } from 'vue'

    export default {
        setup() {
            const pais = ref('')

            const procesarInput = () => {
                console.log(pais.value)
            }

            return {
                pais,
                procesarInput
            }
        }
    }
    </script>
    ```
2. Modificar vista principal rutas **11api_banderas\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <h1 class="text-center">Paises API</h1>
            <Continentes />
            <Buscador />
            <CardList />
        </div>
    </template>

    <script>
    import CardList from './components/CardList'
    import Continentes from './components/Continentes'
    import Buscador from './components/Buscador'

    export default {
        name: 'App',
        components: {
            CardList,
            Continentes,
            Buscador
        }
    }
    </script>
    ```

### 150. Vuex - Buscador
1. Modificar tienda **11api_banderas\src\store\index.js**:
    ```js
    ≡
	actions: {
		≡
		filtrarPais({ commit, state }, texto) {
			const textoCliente = texto.toLowerCase()
			const filtro = state.paises.filter(pais => {
				const textoApi = pais.name.toLowerCase()
				if(textoApi.includes(textoCliente)) {
					return pais
				}
			})
			commit('setPaisesFiltrados', filtro)
		}
	},
    ≡
    ```
2. Modificar componente **11api_banderas\src\components\Buscador.vue**:
    ```vue
    ≡
    <script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const pais = ref('')
            const store = useStore()

            const procesarInput = () => {
                // console.log(pais.value)
                store.dispatch('filtrarPais', pais.value)
            }

            return {
                pais,
                procesarInput
            }
        }
    }
    </script>
    ```

### 151. Optimizar código (aporte estudiante)
+ Optimizar código sobre las funciones de acciones para filtrar:
    ```js
    function filtrarPor({ commit, state }, { propiedad, valor }) {
        return state.paises.filter(pais => pais[propiedad].includes(valor))
    }
    ```

### 152. Deploy a Hosting Gratuito
1. Compilar el proyecto **11api_banderas**:
    + $ npm run build
2. Arrastrar carpeta **dist** a Netlify.

### 153. Archivos Terminados de esta sección
+ Código fuente: 00recursos\Api+Banderas+Vue+3.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Vuex y Composition API"
+ $ git push -u origin main

## Sección 14: PROVIDE E INJECT - Trabajando sin VUEX
### 154. Instalación del proyecto con Vue 3
+ https://bluuweb.github.io/vue-udemy/22-provide
1. Crear proyecto **12provide_app**:
    + $ vue create 12provide_app
    + Selccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
    + Choose a version of Vue.js that you want to start the project with: 3.x
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar componente principal **12provide_app\src\App.vue**:
    ```vue
    <template>
        <div>
            Provide
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        components: {
        }
    }
    </script>
    ```
3. Eliminar archivos:
    + 12provide_app\src\components\HelloWorld.vue
    + 12provide_app\src\assets\logo.png

### 155. Provide e Inject - Aprendiendo con la práctica
1. Crear componente **12provide_app\src\components\ContadorUno.vue**:
    ```vue
    <template>
        <div>
            <h2>Contador: {{ contador }}</h2>
        </div>
    </template>

    <script>
    import { inject } from 'vue'

    export default {
        setup() {
            const contador = inject('contador')

            return {
                contador
            }
        }
    }
    </script>
    ```
2. Crear componente **12provide_app\src\components\ContadorAccion.vue**:
    ```vue
    <template>
        <div>
            <button @click="contador++">+</button>
            <button @click="disminuir">-</button>
        </div>
    </template>

    <script>
    import { inject } from 'vue'

    export default {
        setup() {
            const contador = inject('contador')

            const disminuir = () => contador.value--

            return {
                contador,
                disminuir
            }
        }
    }
    </script>
    ```

### 156. Presentación del proyecto a realizar
+ **Contenido**: sobre el proyecto a desarrollar en el resto de la sección.

### 157. Bootstrap 5 y FontAwersome 5
+ https://getbootstrap.com
+ https://cdnjs.com/libraries/font-awesome
1. Crear proyecto **13tarea_provide**:
    + $ vue create 13tarea_provide
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
    + Choose a version of Vue.js that you want to start the project with: 3.x
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Modificar componente principal **13tarea_provide\src\App.vue**:
    ```vue
    <template>
        <div>
            Tarea Provide
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        components: {
        }
    }
    </script>
    ```
3. Eliminar archivos:
    + 13tarea_provide\src\components\HelloWorld.vue
    + 13tarea_provide\src\assets\logo.png
4. Agregar CDN's de Bootstrap y font-awesome en **13tarea_provide\public\index.html**:
    ```html
    ≡
    <head>
        ≡
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    ≡
    ```

### 158. Componente Formulario (utilizando Provide e inject)
1. Crear componente **13tarea_provide\src\components\TareaApp.vue**:
    ```vue
    <template>
        <div>
            <h1>App Tareas</h1>
            <tarea-form />
            {{ tareas }}
        </div>
    </template>

    <script>
    import { provide, ref } from 'vue'
    import TareaForm from './TareaForm'

    export default {
        components: {
            TareaForm
        },
        setup() {
            const tareas = ref([])

            provide('tareas', tareas)

            return {
                tareas
            }
        }
    }
    </script>
    ```
2. Crear componente **13tarea_provide\src\components\TareaItem.vue**:
    ```vue
    <template>
        <div>
            TareaItem
        </div>
    </template>

    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
3. Crear componente **13tarea_provide\src\components\TareaForm.vue**:
    ```vue
    <template>
        <div>
            <form @submit.prevent="agregarTarea">
                <input type="text" class="form-control my-2" placeholder="Ingrese tarea" v-model.trim="texto">
                <button class="btn btn-primary w-100">Agregar</button>
            </form>
        </div>
    </template>

    <script>
    import { inject, ref } from 'vue'

    export default {
        setup() {
            const texto = ref('')
            const tareas = inject('tareas')

            const agregarTarea = () => {
                if(texto.value === ''){
                    return console.log('Texto vacio')
                }
                
                const tarea = {
                    texto: texto.value,
                    estado: false,
                    id: Date.now()
                }

                tareas.value.push(tarea)
                texto.value = ''
            }

            return {
                texto,
                agregarTarea
            }
        }
    }
    </script>
    ```
4. Modificar componente principal **13tarea_provide\src\App.vue**:
    ```vue
    <template>
        <div class="container mt-3">
            <tarea-app />
        </div>
    </template>

    <script>
    import TareaApp from './components/TareaApp'
    export default {
        name: 'App',
        components: {
            TareaApp
        }
    }
    </script>
    ```

### 159. Componente Pintar Tareas (Props)
1. Modificar componente **13tarea_provide\src\components\TareaItem.vue**:
    ```vue
    <template>
        <div>
            <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
                <p class="m-0">{{ tarea.texto }}</p>
                <div>
                    <i class="fas fa-check-circle mx-2 text-success" role="button"></i>
                    <i class="fas fa-minus-circle text-danger" role="button"></i>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: {
            tarea: {
                type: Object,
                required: true
            }
        }
    }
    </script>
    ```
2. Modificar componente **13tarea_provide\src\components\TareaApp.vue**:
    ```vue
    <template>
        <div>
            <h1>App Tareas</h1>
            <tarea-form />
            <tarea-item 
                v-for="tarea in tareas"
                :key="tarea.id"
                :tarea="tarea"
            />

            <div class="alert alert-dark mt-5" v-if="!tareas.length">
                Sin tareas pendientes 🤷‍♀️
            </div>
            {{ tareas }}
        </div>
    </template>
    ≡
    ```

### 160. Eliminar y Editar (utilizando Provide e inject)
1. Modificar componente **13tarea_provide\src\components\TareaItem.vue**:
    ```vue
    <template>
        <div>
            <div class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
                <p class="m-0" :class="{'tachado': tarea.estado}">{{ tarea.texto }}</p>
                <div>
                    <i class="fas fa-undo-alt mx-2 text-success" role="button" @click="modificar(tarea.id)" v-if="tarea.estado"></i>
                    <i class="fas fa-check-circle mx-2 text-success" role="button" @click="modificar(tarea.id)" v-else></i>
                    <i class="fas fa-minus-circle text-danger" role="button" @click="eliminar(tarea.id)"></i>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { inject } from 'vue'

    export default {
        props: {
            tarea: {
                type: Object,
                required: true
            }
        },
        setup() {
            const tareas = inject('tareas')

            const modificar = id => {
                tareas.value = tareas.value.map(item => {
                    if(item.id === id){
                        item.estado = !item.estado
                    }
                    return item
                })
            }

            const eliminar = id => {
                tareas.value = tareas.value.filter(item => item.id !== id)
            }

            return {
                modificar,
                eliminar
            }
        }
    }
    </script>

    <style scoped>
    .tachado {
        text-decoration: line-through;
    }
    </style>
    ```

### 161. watchEffect en Vue 3
1. Modificar componente **13tarea_provide\src\components\TareaApp.vue**:
    ```js
    ≡
    setup() {
        const tareas = ref([])

        provide('tareas', tareas)

        if(localStorage.getItem('tareas')){
            tareas.value = JSON.parse(localStorage.getItem('tareas'))
        }

        watchEffect(() => {
            localStorage.setItem('tareas', JSON.stringify(tareas.value))
        })

        return {
            tareas
        }
    }
    ≡
    ```

### 162. Deploy a Hosting Gratuito
1. Subir el proyecto **13tarea_provide** a Netlify.

### 163. Archivos Terminados de esta sección
+ Código fuente: 00recursos\TodoApp+con+Provide+e+inject+vue+3.zip

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "PROVIDE E INJECT - Trabajando sin VUEX"
+ $ git push -u origin main


## Sección 16: VUE 3 + Composition API + Firestone + Auth Google
### 172. Presentación: VUE 3 + Composition API + Firestore + Auth Google
+ **Contenido**: sobre la aplicación que desarrollaremos en esta sección.

### 173. Versión de Firebase (¡Importante!)
+ Actualmente salió una nueva versión de Firebase (9.0.0), pero cambiaron la forma de trabajar.
+ Para evitar errores y que todo funcione por favor instalen esta versión:
    + npm i firebase@8.7.1
+ **Nota**: No les resultará los ejemplos vistos en clases con la versión 9, por ende es muy importante trabajar con la versión 8.

### 174. Instalar y configurar Vue 3 + Firebase
1. Crear proyecto **14firestore_auth**:
    + $ vue create 14firestore_auth
    + Seleccionar: Manually select features
    + Seleccionar unicamente:
        + (*) Choose Vue version
        + (*) Babel
        + (*) Router
        + (*) Linter / Formatter
    + Choose a version of Vue.js that you want to start the project with (Use arrow keys): 3.x
    + Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n): y
    + Seleccionar: ESLint with error prevention only
    + Seleccionar unicamente: 
        + (*) Lint on save
    + Seleccionar: In dedicated config files
    + Save this as a preset for future projects? (y/N): n
2. Crear proyecto en [Firebase](https://console.firebase.google.com/u/0/):
    + Nombre del proyecto: firestore-auth
    + Desactivar Google Analytics
3. Habilitar la autenticación con Google:
    + Click en **Authentication**.
    + Click en **Comenzar**.
    + En **Proveedores de Accesso > Proveedores adicionales**: Google.
    + Seleccionar **Habilitar**.
    + Ingresar un correo electrónico: bazo.pedro@gmail.com
    + Click en **Guardar**.
4. Crear base de datos Firestone:
    + Click en **Firestone Database**.
    + Click en **Crear base de datos**.
    + Seleccionar: **Comenzar en modo de prueba**. (Siguiente)
    + Seleccionar el servidor más cercano. (Habilitar)
5. Crear colección (tabla):
    + Click en **Iniciar colección**.
    + ID de la colección: todos (Siguiente)
    + Generar ID de documento dando click en **Automático**.
    + Agrgar campos:
        + texto: string, valor: todo 1
        + uid: string, valor: fsaldddkkjj
        + estado: boolean, valor: false
        + fecha: timestamp, valor: 01/02/2022
    + Click en **Guardar**.
6. Configuración del proyecto:
    + Ir a **Configuración del proyecto** (En la tuerca).
    + Seleccionar en **Tus app**: el icono **</>**.
    + Sobrenombre de la app: firestore-1
    + Click en **Registrar app**.
    + Obtener las API Keys:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyAjk9MwESypj7StFC7m5f2A9p0uKABeLTI",
        authDomain: "firestore-auth-55075.firebaseapp.com",
        projectId: "firestore-auth-55075",
        storageBucket: "firestore-auth-55075.appspot.com",
        messagingSenderId: "649212089254",
        appId: "1:649212089254:web:341b45be81ab49415f7567"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        ```
    + mmm
7. Regresar a la consola del proyecto **14firestore_auth** en local e instalar firebase y bootstrap:
    + $ npm i firebase@8.7.1
    + $ npm i @vueuse/firebase
        + **Nota**: por problemas en la ejecución terminé instalando la versión "@vueuse/firebase": "^4.9.0".
    + $ npm install bootstrap
8. Modificar **14firestore_auth\src\main.js**:
    ```js
    ≡
    import 'bootstrap/dist/css/bootstrap.min.css'

    createApp(App).use(router).mount('#app')
    ```
9. Modificar vista **14firestore_auth\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1 class="text-primary">Hola Vue</h1>
            ≡
        </div>
    </template>
    ≡
    ```
10. Crear archivo **jsconfig.json**:
    ```json
    {
        "include": [
            "./src/**/*"
        ]
    }
    ```

### 175. Configurar Rutas y limpiar proyecto
1. Modificar vista **14firestore_auth\src\views\Home.vue**:
    ```vue
    <template>
        <div class="home">
            <h1>Home</h1>
        </div>
    </template>

    <script>
    export default {
        name: 'Home',
        components: {
        }
    }
    </script>
    ```
2. Eliminar archivos:
    + 14firestore_auth\src\components\HelloWorld.vue
    + 14firestore_auth\src\views\About.vue
    + 14firestore_auth\src\assets\logo.png
3. Crear vista **14firestore_auth\src\views\Perfil.vue**:
    ```vue
    <template>
        <div>
            <h1>Perfil</h1>
        </div>
    </template>
    ```
4. Crear vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div>
            <h1>CRUD</h1>
        </div>
    </template>
    ```
5. Modificar archivo de rutas **14firestore_auth\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
        },
        {
            path: '/crud',
            name: 'Crud',
            component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router
    ```
6. Modificar componente principal **14firestore_auth\src\App.vue**:
    ```vue
    <template>
        <div class="container">
            <router-view/>
        </div>
    </template>
    ```

### 176. Configurar Auth y Firestore en Vue 3
1. Crear archivo **14firestore_auth\src\firebase.js**:
    ```js
    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'

    const firebaseConfig = {
        apiKey: "AIzaSyAjk9MwESypj7StFC7m5f2A9p0uKABeLTI",
        authDomain: "firestore-auth-55075.firebaseapp.com",
        projectId: "firestore-auth-55075",
        storageBucket: "firestore-auth-55075.appspot.com",
        messagingSenderId: "649212089254",
        appId: "1:649212089254:web:341b45be81ab49415f7567"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore()
    const auth = firebase.auth()
    const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp

    export { db, auth, marcaTiempo, firebase }
    ```

### 177. Componente Navbar
1. Crear componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Firestore
                </router-link>
                <div>
                    <button class="btn btn-primary">Acceder</button>
                    <button class="btn btn-danger">Salir</button>
                </div>
            </div>
        </nav>
    </template>
    ```
2. Modificar componente principal **14firestore_auth\src\App.vue**:
    ```vue
    <template>
        <div>
            <Navbar />
            <div class="container">
                <router-view/>
            </div>
        </div>
    </template>

    <script>
    import Navbar from '@/components/Navbar'
    export default {
        components: {
            Navbar
        },
        setup() {
            
        }
    }
    </script>
    ```

### 178. Iniciar sesión con Google
1. Crear composable **14firestore_auth\src\composables\useUser.js**:
    ```js
    import {auth, firebase} from '../firebase'
    import {useRouter} from 'vue-router'

    export const useUser = () => {

        const router = useRouter()
        
        const signIn = async () => {
            try {
                const provider = new firebase.auth.GoogleAuthProvider()
                await auth.signInWithPopup(provider)
                router.push('/perfil')
            } catch (error) {
                console.log(error)
            }
        }

        const signOut = async () => {
            try {
                await auth.signOut()
                router.push('/')
            } catch (error) {
                console.log(error)
            } 
        }

        return {signIn, signOut}
    }
    ```
2. Modificar componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Firestore
                </router-link>
                <div>
                    <button class="btn btn-primary" @click="signIn">Acceder</button>
                    <button class="btn btn-danger" @click="signOut">Salir</button>
                </div>
            </div>
        </nav>
    </template>

    <script>
    import { useUser } from '../composables/useUser'

    export default {
        setup() {
            const { signIn, signOut } = useUser()

            return {
                signIn,
                signOut
            }
        }
    }
    </script>
    ```

### 179. Importante - Leer
+ **Nota**: en los siguientes videos utilizaremos useAuth pero esto se actualizó hace unos días: https://vueuse.org/firebase/useAuth/
    + Para seguir el curso sin problemas por favor instalar la versión 4.11:
        + $ npm i @vueuse/firebase@4.11.1
    + https://www.npmjs.com/package/@vueuse/firebase/v/4.11.1
    + En caso contrario tendrán que ajustar su código según la documentación oficial:  https://vueuse.org/firebase/useAuth/

### 180. Composable useFirebase
1. Modificar componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    {{ userName }}
                </router-link>
                <div>
                    <button class="btn btn-primary" @click="signIn" v-if="!isAuthenticated">Acceder</button>
                    <button class="btn btn-danger" @click="signOut" v-else>Salir</button>
                </div>
            </div>
        </nav>
    </template>

    <script>
    import { useUser } from '../composables/useUser'
    import { useAuth } from '@vueuse/firebase'
    import { computed } from 'vue'

    export default {
        setup() {
            const { signIn, signOut } = useUser()
            const {user, isAuthenticated} = useAuth()

            const userName = computed(() => {
                return isAuthenticated.value ? user.value.displayName : 'sin Auth'
            })

            return {
                signIn,
                signOut,
                user, 
                isAuthenticated,
                userName
            }
        }
    }
    </script>
    ```
2. Modificar vista **14firestore_auth\src\views\Perfil.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>Perfil</h1>
            <pre>
                {{ user }}
            </pre>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'

    export default {
        setup() {
            const {user, isAuthenticated} = useAuth()

            return {
                user, 
                isAuthenticated
            }
        }
    }
    </script>
    ```

### 181. Configurar rutas protegidas con Firebase
1. Modificar archivo de rutas **14firestore_auth\src\router\index.js**:
    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import { firebase } from '../firebase'

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue'),
            mata: {
                requiresAuth: true
            }
        },
        {
            path: '/crud',
            name: 'Crud',
            component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue'),
            mata: {
                requiresAuth: true
            }
        }
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    router.beforeEach(async(to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        if(requiresAuth && !(await firebase.getCurrentUser())) {
            next('/')
        } else {
            next()
        }
    })

    export default router
    ```
2. Modificar **14firestore_auth\src\firebase.js**:
    ```js
    ≡
    firebase.getCurrentUser = () => {
        return new Promise((resolve, reject) => {
            const unsuscribe = firebase.auth().onAuthStateChanged(user => {
                unsuscribe()
                resolve(user)
            }, reject)
        })
    }

    export { db, auth, marcaTiempo, firebase }
    ```

### 182. Loading para nuestra aplicación web
1. Crear componente **14firestore_auth\src\components\Cargando.vue**:
    ```vue
    <template>
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </template>
    ```
2. Modificar componente principal **14firestore_auth\src\App.vue**:
    ```vue
    <template>
        <div>
            <Cargando v-if="loading" class="mt-5" />
            <div v-else>
                <Navbar />
                <div class="container">
                    <router-view/>
                </div>
            </div>
        </div>
    </template>

    <script>
    import Navbar from '@/components/Navbar'
    import Cargando from '@/components/Cargando'
    import { firebase } from '@/firebase'
    import { onMounted, ref } from 'vue'

    export default {
        components: {
            Navbar,
            Cargando
        },
        setup() {
            const loading = ref(false)

            onMounted(async() => {
                loading.value = true
                await firebase.getCurrentUser()
                loading.value = false
            })

            return {
                loading
            }
        }
    }
    </script>
    ```

### 183. Vista CRUD
1. Modificar componente **14firestore_auth\src\components\Navbar.vue**:
    ```vue
    <template>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    {{ userName }}
                </router-link>
                <div>
                    <button class="btn btn-primary" @click="signIn" v-if="!isAuthenticated">Acceder</button>
                    <div v-else>
                        <router-link to="/crud" class="btn btn-primary mx-1">
                            CRUD
                        </router-link>
                        <router-link to="/perfil" class="btn btn-primary mx-1">
                            Perfil
                        </router-link>
                        <button class="btn btn-danger mx-1" @click="signOut">Salir</button>
                    </div>
                </div>
            </div>
        </nav>
    </template>
    ≡
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'

    export default {
        setup() {
            const { isAuthenticated } = useAuth()

            return {
                isAuthenticated
            }
        }
    }
    </script>
    ```

### 184. Obtener Documentos de Firestore
1. Crear composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    import { ref } from 'vue'
    import { db } from '../firebase'

    export const useDb = () => {
        const referencia = db.collection('todos')
        const cargando = ref(false)

        const getTodos = async() => {
            try {
                cargando.value = true
                const res = await referencia.get()
                return res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                return {
                    error,
                    res: true
                }
            } finally {
                cargando.value = false
            }
        }

        return {
            getTodos,
            cargando
        }
    }
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'
    import { useDb } from '../composables/useDb'
    import Cargando from '../components/Cargando.vue'
    import { onMounted, ref } from 'vue'

    export default {
        components: {
            Cargando
        },
        setup() {
            const { isAuthenticated } = useAuth()
            const { getTodos, cargando} = useDb()
            const todos = ref([])

            onMounted(async() => {
                todos.value = await getTodos()
                if(todos.value.res){
                    console.log(todos.value.error)
                }
            })

            return {
                isAuthenticated,
                todos,
                cargando
            }
        }
    }
    </script>
    ```

### 185. Pintar componente Error
1. Crear componente **14firestore_auth\src\components\Error.vue**:
    ```vue
    <template>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Ocurrio un error: </strong> {{ error }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="error = null"></button>
        </div>
    </template>

    <script>
    import { inject } from 'vue'
    export default {
        setup() {
            const error = inject('error')

            return {
                error
            }
        }
    }
    </script>
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'
    import { useDb } from '../composables/useDb'
    import Cargando from '../components/Cargando'
    import Error from '../components/Error'
    import { computed, onMounted, provide, ref } from 'vue'

    export default {
        components: {
            Cargando,
            Error
        },
        setup() {
            const { isAuthenticated } = useAuth()
            const { getTodos, cargando} = useDb()
            const todos = ref([])
            const error = ref(null)

            provide('error', error)

            const pintarError = computed(() => error.value ? true : false)

            onMounted(async() => {
                todos.value = await getTodos()
                if(todos.value.res){
                    console.log(todos.value.error)
                    error.value =todos.value.error
                }
            })

            return {
                isAuthenticated,
                todos,
                cargando,
                pintarError
            }
        }
    }
    </script>
    ```

### 186. Agregar documentos a Firestore
1. Modificara composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    import { ref } from 'vue'
    import { db, marcaTiempo } from '../firebase'
    import { useAuth } from '@vueuse/firebase'

    export const useDb = () => {
        const referencia = db.collection('todos')
        const cargando = ref(false)
        const { user } = useAuth()

        const getTodos = async() => {
            try {
                cargando.value = true
                const res = await referencia.get()
                return res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                return {
                    error,
                    res: true
                }
            } finally {
                cargando.value = false
            }
        }

        const agregarTodo = async(texto) => {
            try {
                const todo = {
                    texto: texto,
                    fecha: marcaTiempo(),
                    estado: false,
                    uid: user.value.uid
                }

                const res = await referencia.add(todo)

                return {
                    id: res.id,
                    ...todo
                }
            } catch (error) {
                return {
                    error,
                    res: true
                }
            }
        }

        return {
            getTodos,
            cargando,
            agregarTodo
        }
    }
    ```
2. Crear componente **14firestore_auth\src\components\TodoForm.vue**:
    ```vue
    <template>
        <form @submit.prevent="procesarFormulario">
            <input type="text" placeholder="Enter para agregar todo" class="form-control my-3" v-model.trim="texto">
        </form>
    </template>

    <script>
    import { inject, ref } from 'vue'
    import { useDb } from '@/composables/useDb'

    export default {
        setup() {
            const { agregarTodo } = useDb()
            const texto = ref('')
            const todos = inject('todos')
            const error = inject('error')

            const procesarFormulario = async() => {
                if(!texto.value.trim()){
                    console.log('texto vacio')
                    return
                }

                const todo = await agregarTodo(texto.value)

                if(todo.res){
                    error.value = todo.error
                    texto.value = ''
                    return
                }

                todos.value = [...todos.value, todo]
                texto.value = ''
            }

            return {
                texto,
                procesarFormulario
            }
        }
    }
    </script>
    ```
3. Modificar componente **114firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <TodoForm />
                <pre>{{ todos }}</pre>
            </div>
        </div>
    </template>

    <script>
    import { useAuth } from '@vueuse/firebase'
    import { useDb } from '../composables/useDb'
    import Cargando from '../components/Cargando'
    import Error from '../components/Error'
    import TodoForm from '../components/TodoForm'
    import { computed, onMounted, provide, ref } from 'vue'

    export default {
        components: {
            Cargando,
            Error,
            TodoForm
        },
        setup() {
            const { isAuthenticated } = useAuth()
            const { getTodos, cargando} = useDb()
            const todos = ref([])
            const error = ref(null)

            provide('error', error)
            provide('todos', todos)

            const pintarError = computed(() => error.value ? true : false)

            onMounted(async() => {
                todos.value = await getTodos()
                if(todos.value.res){
                    console.log(todos.value.error)
                    error.value =todos.value.error
                }
            })

            return {
                isAuthenticated,
                todos,
                cargando,
                pintarError
            }
        }
    }
    </script>
    ```

### 187. Pintar Todo a través de un PROPS
1. Crear componente **14firestore_auth\src\components\Todo.vue**:
    ```vue
    <template>
        <div>
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <p class="m-0">
                        {{ todo.texto }}
                    </p>
                    <div class="mt-2">
                        <button class="btn btn-warning me-1">Finalizar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    export default {
        props: { 
            todo: Object
        },
        setup() {

        }
    }
    </script>
    ```
2. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <TodoForm />
                <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
            </div>
        </div>
    </template>

    <script>
    ≡
    import Todo from '../components/Todo'
    import { computed, onMounted, provide, ref } from 'vue'

    export default {
        components: {
            ≡
            Todo
        },
        ≡
    }
    </script>
    ```

### 188. Eliminar documento de Firestore
1. Modificar componente **14firestore_auth\src\components\Todo.vue**:
    ```vue
    <template>
        <div>
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <p class="m-0">
                        {{ todo.texto }}
                    </p>
                    <div class="mt-2">
                        <button class="btn btn-warning me-1">Finalizar</button>
                        <button class="btn btn-danger" @click="eliminar(todo.id)" :disabled="bloquear">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { inject, ref } from 'vue'
    import { useDb } from '@/composables/useDb'

    export default {
        props: { 
            todo: Object
        },
        setup() {
            const { eliminarTodo } = useDb()
            const error = inject('error')
            const todos = inject('todos')
            const bloquear = ref(false)

            const eliminar = async(id) => {
                bloquear.value = true
                const respuesta = await eliminarTodo(id)

                if(respuesta.res){
                    error.value = respuesta.error
                    bloquear.value = false
                    return
                }

                todos.value = todos.value.filter(item => item.id !== id)
                bloquear.value = false
            }

            return {
                eliminar,
                bloquear
            }
        }
    }
    </script>
    ```
2. Modificar composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    ≡
    const eliminarTodo = async(id) => {
        try {
            await referencia.doc(id).delete()
            return {
                res: false
            }
        } catch (error) {
            return {
                error,
                res: true
            }
        }
    }

    return {
        ≡
        eliminarTodo
    }
    ≡
    ```

### 189. Modificar documento de Firestore
1. Modificar composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    ≡
    const modificarTodo = async(todo) => {
        try {
            await referencia.doc(todo.id).update({
                estado: !todo.estado
            })
            return {
                res: false
            }
        } catch (error) {
            return {
                error,
                res: true
            }
        }
    }

    return {
        ≡
        modificarTodo
    }
    ≡
    ```
2. Modificar componente **14firestore_auth\src\components\Todo.vue**:
    ```vue
    <template>
        <div>
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <p class="m-0" :class="{'text-decoration-line-through': todo.estado }">
                        {{ todo.texto }}
                    </p>
                    <div class="mt-2">
                        <button 
                            class="btn me-1" 
                            :class="todo.estado ? 'btn-success' : 'btn-warning'"
                            @click="modificar(todo)" 
                            :disabled="bloquear" 
                        >
                            {{ todo.estado ? 'Pendiente' : 'Finalizar' }}
                        </button>
                        <button class="btn btn-danger" @click="eliminar(todo.id)" :disabled="bloquear">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
    import { inject, ref } from 'vue'
    import { useDb } from '@/composables/useDb'

    export default {
        props: { 
            todo: Object
        },
        setup() {
            const { eliminarTodo, modificarTodo } = useDb()
            const error = inject('error')
            const todos = inject('todos')
            const bloquear = ref(false)

            const eliminar = async(id) => {
                bloquear.value = true
                const respuesta = await eliminarTodo(id)

                if(respuesta.res){
                    error.value = respuesta.error
                    bloquear.value = false
                    return
                }

                todos.value = todos.value.filter(item => item.id !== id)
                bloquear.value = false
            }

            const modificar = async(todo) => {
                bloquear.value = true
                const respuesta = await modificarTodo(todo)

                if(respuesta.res){
                    error.value = respuesta.error
                    bloquear.value = false
                    return
                }

                todos.value = todos.value.map(item => (
                    item.id === todo.id ? {...item, estado: !todo.estado} : item
                ))
                bloquear.value = false
            }

            

            return {
                eliminar,
                modificar,
                bloquear
            }
        }
    }
    </script>
    ```
3. Modificar vista **14firestore_auth\src\views\Crud.vue**:
    ```vue
    <template>
        <div v-if="isAuthenticated">
            <h1>CRUD</h1>
            <Cargando v-if="cargando" />
            <div v-else>
                <Error v-if="pintarError"/>
                <TodoForm />
                <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
                <p v-if="!todos.length">
                    Sin Todos
                </p>
            </div>
        </div>
    </template>
    ≡
    ```

### 190. Reglas de seguridad Firestore
1. Ir a al proyecto **firestore-auth** en la página de Firebase.
2. Ir a **Firestore Database > Reglas**
3. Modificar reglas:
    ```js
    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /todos/{document} {
                allow read, update, delete: if 
                    request.auth != null && request.auth.uid == resource.data.uid;
                allow create: if 
                    request.auth != null;
            }
        }
    }
    ```
    + Reglas originales:
        ```js
        rules_version = '2';
        service cloud.firestore {
            match /databases/{database}/documents {
                match /{document=**} {
                    allow read, write: if
                        request.time < timestamp.date(2022, 3, 3);
                }
            }
        }
        ```
  
4. En el proyecto **14firestore_auth** en local, modificar composable **14firestore_auth\src\composables\useDb.js**:
    ```js
    const getTodos = async() => {
        try {
            cargando.value = true
            const res = await referencia
                .where('uid', '==', user.value.uid)
                .get()
            return res.docs.map(doc => ({
                ≡
            }))
        } catch (error) {
            ≡
        } finally {
            ≡
        }
    }
    ```

### 191. Deploy a Hosting Firebase
1. Compilar el proyecto para produccón:
    + $ npm run build
2. Ir a al proyecto **firestore-auth** en la página de Firebase.
3. Ir a **Hosting** y dar click en **Comenzar**.
4. En la máquina local ejecutar en alguna terminal como administrador:
    + $ npm install -g firebase-tools
6. En la página del proyecto, dar click en **Siguiente**.
7. En local ejecutar:
    + $ firebase login
    + $ firebase init
        + Are you ready to proceed? (Y/n): y
        + Seleccionar:
            + (*) Firestore: Configure security rules and indexes files for Firestore
            + (*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            + (*) Hosting: Set up GitHub Action deploys
        + Seleccionar: Use an existing project
        + Select a default Firebase project for this directory: (Use arrow keys): firestore-auth-55075 (firestore-auth)
        + What file should be used for Firestore Rules? (firestore.rules): y
        + What file should be used for Firestore indexes? (firestore.indexes.json): y
        + File y already exists. Do you want to overwrite it with the Firestore Indexes from the Firebase Console? (y/N): n
        + What do you want to use as your public directory? (public): dist
        + Configure as a single-page app (rewrite all urls to /index.html)? (y/N): y
        + Set up automatic builds and deploys with GitHub? (y/N): n
        + File dist/index.html already exists. Overwrite? (y/N): n
8. En la página del proyecto, dar click en **Siguiente**.
9. En local ejecutar:
    + $ firebase deploy

### 192. Archivos Terminados de esta sección
+ Código fuente: **00recursos\Vue+3+Auth+++Firestore+2021.zip**

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "VUE 3 + Composition API + Firestone + Auth Google"
+ $ git push -u origin main
