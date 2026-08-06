// Función auxiliar para obtener la vista actual del hash
function obtenerVistaDeUrl() {
    const hash = window.location.hash.replace('#', '');
    const vistasValidas = ['cv', 'carta', 'perfil', 'proyectos'];
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

    // Función que envuelve y optimiza cualquier imagen:
    optImagen(url, w = 300, h = 300) {
        if (!url) return '';
        return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${w}&h=${h}&fit=cover&output=jpg&q=80`;
    }
});

// Montar la aplicación
PetiteVue.createApp(appState).mount('#app');

// Escuchar eventos de cambio en la URL (flechas Atrás/Adelante del navegador)
window.addEventListener('hashchange', () => {
    appState.vista = obtenerVistaDeUrl();
});