<template>
    <div class="container">
        <h2>Destacados</h2>
        <form @submit.prevent="procesarFormulario">
            <div class="form-group">
                <label for="id">Id</label>
                <input type="number" class="form-control" id="id" placeholder="id" v-model="destacado.id">
            </div>
            <div class="form-group">
                <label for="icon">Icon</label>
                <input type="text" class="form-control" id="icon" placeholder="icon" v-model="destacado.icon">
            </div>
            <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <textarea class="form-control" id="descripcion" rows="3" v-model="destacado.descripcion"></textarea>
            </div>
            <div class="form-group">
                <label for="enlace">Enlace</label>
                <input type="url" class="form-control" id="enlace" placeholder="enlace" v-model="destacado.enlace">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Destacados',
    data() {
        return {
            destacado: {
                id: 1,
                icon: 'ion-ios-albums',
                servicio: 'Sistema de Historia Clínica o similar',
                descripcion: 'Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.',
                enlace: 'https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel'
            }
        }
    },
    methods: {
        ...mapActions(['setDestacados']),
        procesarFormulario(){
            console.log(this.destacado)
            this.setDestacados(this.destacado)
        }
    }
}
</script>

<style>

</style>


/* 
{
    id: 1,
    icon: 'ion-ios-albums',
    servicio: 'Sistema de Historia Clínica o similar',
    descripcion: 'Desarrollo de una aplicación web que permita administrar el historial de los pacientes de un centro de salud.',
    enlace: 'https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel'
},
{
    id: 2,
    icon: 'ion-ios-cloud-upload',
    servicio: 'Publicación de aplicaciones web',
    descripcion: 'Alojar webs a Hosting o VPS, creadas con HTML, CSS, JavaScript, PHP, MySQL, Angular, Node, Mongo, Laravel, Symfony, WP, Python y Django.',
    enlace: 'https://github.com/petrix12/deploy_2022'
},
{
    id: 3,
    icon: 'ion-ios-book',
    servicio: 'Plataforma de cursos',
    descripcion: 'Desarrollo de una plataforma de cursos, con un sistema completo de roles y servicios.',
    enlace: 'https://github.com/petrix12/PlataformaDeCursosLaravel'
},
{
    id: 4,
    icon: 'ion-ios-browsers',
    servicio: 'Crea una pasarela de pagos',
    descripcion: 'Implementación de una pasarela de pagos con Stripe y PayPal completa para un negocio virtual o tienda online.',
    enlace: 'https://github.com/petrix12/pasarela_pago'
},
{
    id: 5,
    icon: 'ion-ios-cart',
    servicio: 'Crea una ecommerce',
    descripcion: 'Desarrollo de una aplicación ecommerce completamente funcional.',
    enlace: 'https://github.com/petrix12/2021_ecommerce'
} 
*/