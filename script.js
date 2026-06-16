// Compteur de clics personnalisé
let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");

if (boutonLike) {
    boutonLike.addEventListener("click", () =>{
        nbLikes = nbLikes + 1; 
boutonLike.textContent = "❤️ J'aime (" + nbLikes + ")";
});
}
// Compteur de clics personnalisé
let nbdisLikes = 0;
const boutondisLike = document.getElementById("mon-bouton-dislike");

if (boutondisLike) {
    boutondisLike.addEventListener("click", () =>{
        nbdisLikes = nbdisLikes + 1; 
boutondisLike.textContent = "💔 Je n'aime pas (" + nbdisLikes + ")";
});
}
