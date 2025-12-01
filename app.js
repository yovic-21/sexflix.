// ====== APP.JS PARA PROYECTO SEXFLIX - CON GOOGLE DRIVE (IFRAME) ======

// La variable TEMPORADA_ACTIVA se manejará principalmente por el HTML, pero la conservamos.
let TEMPORADA_ACTIVA = 1; 

// Catálogo de películas/series para la página principal (index.html)
const CATALOG = [
    {
        titulo: "Película 1: Son como niños",
        imagen: "img/peli1.png", 
        // URL de Drive para la película 1
        drive_embed: 'https://drive.google.com/file/d/1SBnKjrnls2BnutF4Ji3G-_buyPV2Cm4r/preview' 
    },
    {
        titulo: "Película 2: Ejemplo",
        imagen: "img/peli2.png", 
        // URL de Drive para la película 2
        drive_embed: 'https://drive.google.com/file/d/1SBnKjrnls2BnutF4Ji3G-_buyPV2Cm4r/preview' 
    }
];

// 🛑 Catálogo de Temporadas y Capítulos (Aseguramos que los caps coincidan con el HTML)
const CATALOGO_TEMPORADAS = {
    // === TEMPORADA 1 ===
    1: {
        titulo: "Temporada 1",
        caps: 12, // 12 capítulos
        urls: {
            1: 'https://drive.google.com/file/d/1_5cMMUqxyNjgECkmtlZwC7FeWXpbgfo5/preview', 
            2: 'https://drive.google.com/file/d/1W-j-FZ2TCBe98mPnHLcYp2vDBk8Uabzs/preview', 
            3: 'https://drive.google.com/file/d/1GQ75H1kjrh4ehdTZZYkT7C5VJvreKUKL/preview',
            4: 'https://drive.google.com/file/d/1Z-6tGPTyTEtoFK4qPN5TpBNf8FVlaqLe/preview',
            5: 'https://drive.google.com/file/d/1fAfCAljwSseohWup7DoLYPlmgcmF4NP3/preview',
            6: 'https://drive.google.com/file/d/1V7fiNTOWKkFN9N1W2QbttwFjCpdJ_g9h/preview',
            7: 'https://drive.google.com/file/d/102J8qEGeOJtLKdGPzEcwXog-tV3cQD-o/preview',
            8: 'https://drive.google.com/file/d/12kC4PO40KL98wjdtu66eqmy49nwMwYZW/preview',
            9: 'https://drive.google.com/file/d/1OSg0fz6ZhXG_YYzASCgVcOOAq-CTSpBZ/preview',
            10: 'https://drive.google.com/file/d/1krHJ-XbRVo8XJef3gooQ8FAQWHsoQKLr/preview',
            11: 'https://drive.google.com/file/d/1f23RrQmUO5-Z566xhKTBg876s4Nu_tcI/preview',
            12: 'https://drive.google.com/file/d/1oymVIZibKaJlQuQ7tsRZYDniJF_Iu5At/preview',
        }
    },
    // === TEMPORADA 2 ===
    2: {
        titulo: "Temporada 2",
        caps: 13, // ⚠️ 13 capítulos según tu HTML estático
        urls: {
            1: 'https://drive.google.com/file/d/19xPB_xWy-czZ5CRltEQoFRtYuSt1yEr2/preview', 
            2: 'https://drive.google.com/file/d/1jtSfB1DqV8Kb-kW4xOq23ls5XaKyiqmi/preview', 
            3: 'https://drive.google.com/file/d/1qbPmxZPWRLL6DyrS0QCLeSIFlUHJWw-1/preview', 
            4: 'https://drive.google.com/file/d/1ROu7yHGa5vxj9zmUo2OCBjnNIKTFJBNx/preview',
            5: 'https://drive.google.com/file/d/1mqHcasRap84ucLIH4Qy0oTGDs3PKDX8x/preview',
            6: 'https://drive.google.com/file/d/1l_TRR30memGpxzewKPkgI0_OVwGjcMdh/preview',
            7: 'https://drive.google.com/file/d/1O_m6jfYyTnS40tudWKv-IhRtZcdxf4CD/preview',
            8: 'https://drive.google.com/file/d/1fDRFiLhA2ukHGjvmn9sL4wco0mI9MbT6/preview',
            9: 'https://drive.google.com/file/d/1WwQK9nVyQJD1TFPbqRGhEk3q9GRX275X/preview',
            10: 'https://drive.google.com/file/d/1xVavLQcmNlgKpaXZxqPBNQ-qpHq1GJ6F/preview',
            11: 'https://drive.google.com/file/d/1HZjM0klkJ-fGlbCFmxp_44GOWfANCAwA/preview',
            12: 'https://drive.google.com/file/d/1-CCyddB0t1qAf3CYidasuwdTYX1f6AgB/preview',
            13: 'https://drive.google.com/file/d/1zU6bY4nZSqE5sWfgm27zHpJcG3pG1CUq/preview',
        }
    }
};

const contenedor = document.getElementById("catalogo");
const player = document.getElementById("player");

// ----------------------------------------------------
// FUNCIONES DE PELÍCULAS (PARA index.html)
// ----------------------------------------------------

function cargarCatalogo() {
    if (!contenedor) return;
    CATALOG.forEach((peli, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${peli.imagen}" alt="${peli.titulo}" class="miniatura" />
            <button onclick="reproducir(${index})" class="ver">Ver</button>
        `; 
        contenedor.appendChild(card);
    });
}

function reproducir(id) {
    const pelicula = CATALOG[id];
    player.style.display = "flex";
    
    player.innerHTML = `
        <div class="video-drive-wrapper">
            <iframe 
                src="${pelicula.drive_embed}" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
        <button class="cerrar" onclick="cerrarPlayer()">X</button>
    `;
}

function cerrarPlayer() {
    player.style.display = "none";
    player.innerHTML = ''; 
}

// ----------------------------------------------------
// FUNCIONES DE TEMPORADAS Y CAPÍTULOS (PARA serie1.html)
// ----------------------------------------------------

// 🛑 MODIFICADA: Ahora esta función NO genera botones, solo actualiza la variable global si el HTML la llama.
// NOTA: Esta función es opcional, ya que el HTML maneja la visibilidad de las listas.
function cambiarTemporada(num) {
    TEMPORADA_ACTIVA = parseInt(num); 
    // Ya no es necesario llamar a cargarTemporada ni cambiarCapitulo(1) desde aquí,
    // porque tu script inline en el HTML se encarga de llamar a cambiarCapitulo(1, num)
}

// 🛑 MODIFICADA: Esta función ya no es necesaria para generar botones, solo para obtener el contador.
function cargarTemporada(num) {
    const temporada = CATALOGO_TEMPORADAS[num];
    const capsCountElement = document.getElementById("caps-count-id");
    
    if (!temporada) return;

    // Actualiza el texto del contador
    if (capsCountElement) {
        capsCountElement.textContent = `${temporada.caps} capítulos`;
    }
    // El script en el HTML maneja la actualización del título y la visibilidad de la lista.
}


// 🛑 FUNCIÓN CORREGIDA Y CLAVE: Ahora acepta DOS argumentos (capítulo y temporada)
// El HTML estático llama a esta función con: cambiarCapitulo(1, 1), cambiarCapitulo(5, 2), etc.
function cambiarCapitulo(num, temporada) {
    // Usamos el argumento 'temporada' pasado desde el onclick del HTML.
    const temporadaData = CATALOGO_TEMPORADAS[temporada];
    const urlDrive = temporadaData.urls[num];
    const contenedorVideo = document.getElementById("contenedor-video-drive"); 

    if (!urlDrive || !contenedorVideo) {
        if (contenedorVideo) {
             contenedorVideo.innerHTML = `<p style="text-align:center; color: #e50914;">Video no disponible para el capítulo ${num} de la ${temporadaData.titulo}.</p>`;
        }
        // Deselecciona todos los botones
        document.querySelectorAll(".cap").forEach(b => b.classList.remove("selected"));
        return;
    }

    // Crea el código IFRAME para Google Drive
    const iframeCode = `
        <iframe 
            src="${urlDrive}" 
            width="100%" 
            height="600px" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;

    // Inyecta el código en el contenedor HTML
    if (contenedorVideo) {
        contenedorVideo.innerHTML = iframeCode;
    }

    // 🛑 Lógica de Selección de Botón (CORREGIDA)
    // 1. Deselecciona TODOS los botones, sin importar si la lista está oculta o visible.
    document.querySelectorAll(".cap").forEach(b => b.classList.remove("selected"));
    
    // 2. Busca el botón específico usando el ID de la lista activa (ej: #temporada-1-list)
    const listaActivaId = `temporada-${temporada}-list`;
    
    // 3. Busca el botón con el atributo data-cap dentro de la lista que debería estar visible.
    const selectedButton = document.querySelector(`#${listaActivaId} .cap[data-cap="${num}"]`);
    
    if (selectedButton) {
        selectedButton.classList.add("selected");
    }
}


// ----------------------------------------------------
// INICIALIZACIÓN
// ----------------------------------------------------

function inicializarSerie() {
    const selectorTemporada = document.getElementById("select-temporada-id");

    if (selectorTemporada) {
        // Obtenemos la temporada inicial del selector (que es '1' por defecto)
        const temporadaInicial = parseInt(selectorTemporada.value); 
        
        // Carga la información del contador de capítulos (lo que hace cargarTemporada)
        cargarTemporada(temporadaInicial); 
        
        // El script inline en el HTML ya llama a cambiarTemporada(temporadaInicial)
        // en el 'DOMContentLoaded', que a su vez llama a cambiarCapitulo(1, 1).
        
        // Lógica para que el botón de Reproducir cargue el primer capítulo
        const btnPlay = document.querySelector('.btn-play-serie');
        if (btnPlay) {
            btnPlay.addEventListener('click', () => {
                // Usamos la temporada inicial y el capítulo 1
                cambiarCapitulo(1, temporadaInicial);
                // Desplazar la vista al video
                document.getElementById('contenedor-video-drive')?.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
}


// Inicialización general (para index.html)
if (contenedor) {
     cargarCatalogo();
}

// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    inicializarSerie();
});