"use strict";

document.addEventListener("DOMContentLoaded", inicio);


function inicio() {

    let audio;

    function reproducirMusica() {
        let random = Math.floor(Math.random() * 5 + 1);
        audio = new Audio(`./media/cancion${random}.mp3`);

        audio.play();
    }

    document.addEventListener("touchmove", reproducirMusica);
    document.addEventListener("click", reproducirMusica);

    
    let pararM = document.getElementById("pararMusica");

    pararM.addEventListener("click", pararMU);

    function pararMU() {
        audio.pause();
    }


    const before_loading = 
    document.getElementById("content-before-loading");
before_loading.style.display = "block";
let c = 0;
function getInformation() {
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            const new_div = document.createElement("div");
            new_div.className = "main";
            new_div.innerHTML = `<h1>FELIZ CUMPLEAÑOS <span class="marica">MARICÓN</span></h1>
        <br>
        <br>
        <br>`;
            before_loading.appendChild(new_div);
        }
        c++;
    }, 1000);
}

window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
        getInformation();
    }
});
getInformation();
}