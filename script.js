let iniciado = false;

function volarFotos() {
  function volarFotos() {

    const musica = document.getElementById("musica");

    if (musica) {
        musica.volume = 0.7;
        musica.play();
    }

    // AQUÍ SIGUE TU CÓDIGO QUE YA TENÍAS

    if (iniciado) return;
    iniciado = true;

    const boton = document.querySelector(".final button");
    const fotos = document.querySelectorAll("img");
    const mensaje = document.getElementById("mensajeFinal");

    // Botón desaparece
    if (boton) {
        boton.style.transition = "1s";
        boton.style.transform = "scale(0)";
        boton.style.opacity = "0";
    }

    // Oscurecer pantalla
    const pantalla = document.createElement("div");
    pantalla.id = "cinema";
    document.body.appendChild(pantalla);

    setTimeout(function() {
        pantalla.classList.add("activa");
    }, 50);

    // Animar fotos
    fotos.forEach(function(foto, i) {

        setTimeout(function() {

            foto.style.transition = "1.5s ease";

            foto.style.transform =
                "scale(1.08) rotate(" +
                ((Math.random() - 0.5) * 4) +
                "deg)";

            foto.style.boxShadow =
                "0 0 20px #ff69b4, " +
                "0 0 45px #ff1493, " +
                "0 0 70px #ff69b4";

            setTimeout(function() {

                foto.style.transform =
                    "scale(1) rotate(0deg)";

            }, 800);

        }, i * 120);

    });

    // Crear corazones
    for (let i = 0; i < 40; i++) {

        setTimeout(function() {
            crearCorazon();
        }, i * 100);

    }

    // Primera frase
    setTimeout(function() {

        const frase = document.createElement("div");

        frase.id = "fraseCine";

        frase.innerHTML =
            "<span>Desde que llegaste...</span>" +
            "<strong>mi historia cambió ❤️</strong>";

        document.body.appendChild(frase);

        setTimeout(function() {
            frase.classList.add("mostrar");
        }, 100);

    }, 1800);


    // Segunda frase
    setTimeout(function() {

        const frase = document.getElementById("fraseCine");

        if (frase) {

            frase.classList.remove("mostrar");

            setTimeout(function() {

                frase.innerHTML =
                    "<span>Y entre tantos recuerdos...</span>" +
                    "<strong>te elegiría una y otra vez ❤️</strong>";

                frase.classList.add("mostrar");

            }, 700);
        }

    }, 4000);


    // Final
    setTimeout(function() {

        const frase = document.getElementById("fraseCine");

        if (frase) {
            frase.remove();
        }

        if (mensaje) {

            mensaje.style.display = "block";

            mensaje.innerHTML =
                "Nuestra historia apenas comienza... ❤️";

            mensaje.classList.add("finalCine");
        }

    }, 6500);

}


// CORAZONES
function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.className = "corazon";

    const corazones = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨"
    ];

    corazon.innerHTML =
        corazones[
            Math.floor(Math.random() * corazones.length)
        ];

    corazon.style.position = "fixed";
    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.bottom = "-40px";

    corazon.style.fontSize =
        15 + Math.random() * 25 + "px";

    corazon.style.zIndex = "30000";

    corazon.style.pointerEvents = "none";

    corazon.style.transition =
        "transform 5s linear, opacity 5s linear";

    document.body.appendChild(corazon);

    setTimeout(function() {

        corazon.style.transform =
            "translateY(-110vh) rotate(360deg)";

        corazon.style.opacity = "0";

    }, 50);

    setTimeout(function() {

        corazon.remove();

    }, 5500);
}