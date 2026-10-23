// Función auxiliar para obtener la vista actual del hash
function obtenerVistaDeUrl() {
    const hash = window.location.hash.replace('#', '');
    const vistasValidas = ['cv', 'carta', 'perfil', 'proyectos', 'tarjeta'];
    return vistasValidas.includes(hash) ? hash : 'cv';
}

// Objeto reactivo de la aplicación
const appState = PetiteVue.reactive({
    // Inicializa la vista según la URL actual al cargar o refrescar
    vista: obtenerVistaDeUrl(),
    
    // Inyección limpia de datos puros desde cv-data.js
    ...window.cvData,

    // Método para cambiar la vista y actualizar el Hash en la barra de direcciones
    cambiarVista(nuevaVista) {
        this.vista = nuevaVista;
        window.location.hash = nuevaVista;
    },

    // Función que envuelve y optimiza cualquier imagen
    optImagen(url, w = 300, h = 300) {
        if (!url) return '';
        
        // Si es una ruta local/relativa (no empieza con http:// ni https://), se devuelve directamente
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            return url;
        }
        
        // Si es una URL externa válida (ej. Avatares de GitHub, LinkedIn, etc.), usa wsrv.nl
        return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${w}&h=${h}&fit=cover&output=jpg&q=80`;
    },  
    
    // Extrae el slug/usuario final de URLs como GitHub o LinkedIn
    extraerUsuario(url) {
        if (!url) return '';
        return url.trim().replace(/\/$/, '').split('/').pop();
    },

    // Limpia la URL del sitio web quitando 'https://' para mostrar una ruta limpia
    extraerDominioWeb(url) {
        if (!url) return 'Sitio Web';
        return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    },

    // Formatea un número de móvil al estilo internacional +34 XXX XX XX XX
    formatearMovil(numero) {
        if (!numero) return '';
        // Quita todo lo que no sea un número por seguridad
        const limpio = ('' + numero).replace(/\D/g, ''); 
        // Aplica el formato +34 XXX XX XX XX
        return limpio.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})(\d{2})$/, '+$1 $2 $3 $4 $5');
    },
    
    // Método para obtener la URL de los links adaptada a cualquier entorno local o producción
    obtenerUrlLinks() {
        const hostname = window.location.hostname;
        const protocol = window.location.protocol;
        
        // Si estamos en local (Live Server, IP local o abriendo directamente el fichero .html con file:)
        const esLocal = hostname === 'localhost' || hostname === '127.0.0.1' || protocol === 'file:';

        if (esLocal) {
            // En local usamos siempre la ruta relativa directa
            return './links.html';
        } else {
            // En producción usamos la URL absoluta de tu GitHub Pages
            const base = (typeof this.url_base !== 'undefined' && this.url_base) ? this.url_base : 'https://petrix12.github.io/cvpetrix2022';
            return base + '/links.html';
        }
    }    
});

// Montar la aplicación
PetiteVue.createApp(appState).mount('#app');

// Escuchar eventos de cambio en la URL (flechas Atrás/Adelante del navegador)
window.addEventListener('hashchange', () => {
    appState.vista = obtenerVistaDeUrl();
});