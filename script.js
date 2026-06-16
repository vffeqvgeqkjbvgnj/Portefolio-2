// Compteur de clics personnalisé
let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");
if (boutonLike) {
boutonLike.addEventListener("click", () => { 
nbLikes = nbLikes + 1;
boutonLike.textContent = " ❤  J'aime (" + nbLikes + ")";
});
}
// Compteur de clics personnalisé
let nbdislikes = 0;
const boutondislike = document.getElementById("mon-bouton-dislike");
if (boutonLike) {
boutondislike.addEventListener("click", () => { 
nbdislikes = nbdislikes + 1;
boutondislike.textContent = " ❤  J'aime pas(" + nbdislikes + ")";
});
}