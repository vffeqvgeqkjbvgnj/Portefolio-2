/* Texte animé */

const texte = "Bonjour, je suis Célina 👋";
const titre = document.getElementById("typing");

let i = 0;

function machineAEcrire() {

    if(i < texte.length){
        titre.innerHTML += texte.charAt(i);
        i++;
        setTimeout(machineAEcrire, 100);
    }

}

machineAEcrire();

/* Boutons Like */

let likes = 0;

const boutonLike = document.getElementById("mon-bouton-like");
const boutonUnlike = document.getElementById("bouton-unlike");
const message = document.getElementById("message-like");

boutonLike.addEventListener("click", () => {

    likes++;

    boutonLike.innerHTML = `❤️ J'aime (${likes})`;

    if(likes === 5){
        message.innerHTML = "🌸 Merci pour votre soutien !";
    }

    if(likes === 10){
        message.innerHTML = "🚀 Déjà 10 likes, merci beaucoup !";
    }

});

boutonUnlike.addEventListener("click", () => {

    if(likes > 0){

        likes--;

        boutonLike.innerHTML = `❤️ J'aime (${likes})`;

    }

});

/* Bouton retour en haut */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

/* Apparition sections */

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    observer.observe(section);

});

/* Animation des cartes */

const cartes = document.querySelectorAll(".card");

cartes.forEach(carte => {

    carte.addEventListener("click", () => {

        carte.style.transform = "scale(1.1)";

        setTimeout(() => {

            carte.style.transform = "";

        }, 300);

    });

});