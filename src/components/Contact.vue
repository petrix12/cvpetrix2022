<template>
	<div>
        <section id="contact" class="section-bg wow fadeInUp">
            <div class="container">
                <div class="section-header">
                    <h3>Contáctame</h3>
                    <p>{{ contact.texto }}</p>
                </div>
                <div class="row contact-info">
                    <div class="col-md-4">
                        <div class="contact-address">
                            <i class="ion-ios-location-outline"></i>
                            <h3>Dirección</h3>
                            <address>{{ contact.direccion }}</address>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-phone">
                            <i class="ion-ios-telephone-outline"></i>
                            <h3>Número de teléfono</h3>
                            <p><a :href="`tel:${href_movil}`">{{ contact.movil }}</a></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-email">
                            <i class="ion-ios-email-outline"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:bazo.pedro@gmail.com">{{ contact.mail }}</a></p>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form class="contactForm" @submit.prevent="sendEmail">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Escribe tu nombre" v-model="from_name" required />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Escribe tu correo electrónico" v-model="from_email" required />
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" v-model="subject" required />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" v-model="message" required></textarea>
                            <div class="validation"></div>
                        </div>
                        <div class="text-center"><button type="submit">Enviar mensaje</button></div>
                    </form>
                </div>
            </div>
        </section>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import emailjs from 'emailjs-com'

export default {
	name: 'Contact',
    data(){
        return {
            from_name: '',
            from_email: '',
            message: '',
            subject: '',
            service_id: 'service_w96f7mr',
            template_id: 'template_o0augpw',
            user_id: 'KRlsMGSIJXxZeIort'
        }
    },
    methods: {
        limpiarFormulario() {
            this.from_name = '';
            this.from_email = '';
            this.message = '';
            this.subject = '';
        },
        async sendEmail(e) {
            try { 
                await emailjs.sendForm(this.service_id, this.template_id, e.target, this.user_id, { 
                    name: this.from_name, 
                    email: this.from_email,
                    message: this.message,
                    subject: this.subject
                })
                this.limpiarFormulario()
                alert('¡Su mensaje se ha enviado exitosamente!')
            } catch(e) { 
                console.log({error}) 
            }
        }
    },
    computed: {
        ...mapState(['contact'])
    },
}
</script>