   // --- Récupération du compteur sauvegardé ---
            let nbLikes = localStorage.getItem("nbLikes");
            if (!nbLikes) nbLikes = 0;

            const boutonLike = document.getElementById("mon-bouton-like");
            const boutonUnlike = document.getElementById("bouton-unlike");
            const message = document.getElementById("message-like");

            // Affichage initial
            boutonLike.textContent = "❤ J'aime (" + nbLikes + ")";

            // --- Clic sur "J'aime" ---
            boutonLike.addEventListener("click", () => {
                nbLikes++;
                localStorage.setItem("nbLikes", nbLikes);

                boutonLike.textContent = "❤ J'aime (" + nbLikes + ")";

                // Animation
                boutonLike.classList.add("like-anim");
                setTimeout(() => boutonLike.classList.remove("like-anim"), 300);

                // Message temporaire
                message.textContent = "Merci pour votre soutien ❤️";
                message.classList.add("visible");
                setTimeout(() => message.classList.remove("visible"), 2000);
            });

            // --- Clic sur "Je n'aime plus" ---
            boutonUnlike.addEventListener("click", () => {
                if (nbLikes > 0) {
                    nbLikes--;
                    localStorage.setItem("nbLikes", nbLikes);
                }

                boutonLike.textContent = "❤ J'aime (" + nbLikes + ")";

                // Animation
                boutonUnlike.classList.add("unlike-anim");
                setTimeout(() => boutonUnlike.classList.remove("unlike-anim"), 300);

                // Message temporaire
                message.textContent = "Votre like a été retiré 💔";
                message.classList.add("visible");
                setTimeout(() => message.classList.remove("visible"), 2000);
            });

const btnCulture = document.getElementById("btnCulture");
const infoCulture = document.getElementById("infoCulture");

btnCulture.addEventListener("click", () => {

const infos = [
    "Yennayer est le Nouvel An amazigh.",
    "La robe kabyle est connue pour ses couleurs vives.",
    "Les villages kabyles sont souvent construits sur les montagnes.",
    "Les bijoux kabyles traditionnels sont fabriqués en argent."
];

document.getElementById("cultureBtn").addEventListener("click", () => {

    let hasard = Math.floor(Math.random() * infos.length);

    document.getElementById("cultureInfo").innerHTML =
    "<h3>" + infos[hasard] + "</h3>";

});

function quiz(rep){

    const resultat = document.getElementById("resultat");

    if(rep === "b"){
        resultat.innerHTML = "✅ Bravo !";
    }
    else{
        resultat.innerHTML = "❌ La bonne réponse était Yennayer.";
    }
}

document.getElementById("explorer").addEventListener("click", () => {

    window.scrollTo({
        top: window.innerHeight,
        behavior:"smooth"
    });

});
