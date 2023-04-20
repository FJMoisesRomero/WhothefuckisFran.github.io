/* Menu lateral */
$(document).ready(function () {
    // Mostrar/ocultar sublistas al hacer clic en elementos del menú
    $('.sublist').hide(); // Ocultar todas las sublistas al cargar la página
    $('#menu li').click(function (e) {
        $(this).find('.sublist').slideToggle();
        e.stopPropagation(); // Prevenir la propagación del evento click
    });

    // Mostrar/ocultar menú al hacer clic en el botón
    $('#menu-toggle').click(function () {
        $('#menu').toggleClass('show');
        $('#content').toggleClass('hide');
    });

    // Cerrar el menú cuando se hace clic en cualquier lugar de la página
    $(document).click(function (event) {
        var clickover = $(event.target);
        var opened = $('#menu').hasClass('show');
        if (opened && !clickover.closest('#menu').length && !clickover.is('#menu-toggle')) {
            $('#menu').removeClass('show');
            $('#content').removeClass('hide');
        }
    });
});


/*Boton de saludar*/

function saludar() {
    alert("¡Hola! ¡Bienvenido a mi sitio web!");
}
/*Mensaje de Contacto */
const form = document.querySelector('form');
const successMsg = document.querySelector('#success-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.style.display = 'block';
    form.reset();
});


/*Label que aparece sobre imagenes */
var imageContainer = document.querySelector(".contenedorlblsi");
var label = document.querySelector(".labelsobreimagen");

imageContainer.addEventListener("mouseenter", function () {
    label.style.opacity = 1;
});

imageContainer.addEventListener("mouseleave", function () {
    label.style.opacity = 0;
});

/*Imagen instagram sobre perfil */
var image = new Image();
image.src = "imagen.jpg";


/*Script para la musica*/
const playlist = [{ src: 'audio1.mp3', title: 'Never Gonna Give You Up' }, { src: 'audio2.mp3', title: 'What is Love' }, { src: 'audio3.mp3', title: 'GigaChad theme' }];

let currentIndex = 0;

const audio = document.getElementById("audio");
const toggleButton = document.getElementById("toggle-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function playSong() {
    audio.src = playlist[currentIndex].src;
    audio.play();
    toggleButton.classList.add("active");
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        toggleButton.classList.add("active");
    } else {
        audio.pause();
        toggleButton.classList.remove("active");
    }
}

function playNextSong() {
    currentIndex = (currentIndex + 1) % playlist.length;
    playSong();
}

function playPrevSong() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    playSong();
}

toggleButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextSong);
prevButton.addEventListener("click", playPrevSong);

/*Modo Oscuro */
function cambiarModo() {
    var cuerpo = document.body;
    cuerpo.classList.toggle("oscuro");
    var palanca = document.getElementById("palanca");
    palanca.style.left = cuerpo.classList.contains("oscuro") ? "50%" : "0";

    // Almacenar la configuración del usuario en localStorage
    if (cuerpo.classList.contains("oscuro")) {
        localStorage.setItem("modoOscuro", "activado");
    } else {
        localStorage.setItem("modoOscuro", "desactivado");
    }
}

// Verificar si el usuario ha activado el modo oscuro previamente
const modoOscuro = localStorage.getItem("modoOscuro");
if (modoOscuro === "activado") {
    document.body.classList.add("oscuro");
    document.getElementById("palanca").style.left = "50%";
}
