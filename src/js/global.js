/****** Initialisation du feather icon ******/
import feather from 'feather-icons';

feather.replace();

/****** Faire apparaitre le menu ******/

const btn = document.querySelector("#btn")
// on appelle le bouton qui nous permettra d'afficher ou non ntre menu
const menu = document.querySelector(".menu")
//on appelle le menu l'element contenant nos items
btn.onclick = () => {
    // je pose un ecouteur click sur le bouton 
    form.classList.remove("visibility-search")
    menu.classList.toggle("visibility")
    // je lui rajoute une classe toggle qui me permet 1 click sur 2 d'afficher mon menu ou non
}


/****** Faire apparaitre le formulaire de recherche ******/

const a = document.querySelector("#form-search")
const form = document.querySelector(".search")

a.onclick = () => {
  menu.classList.remove("visibility")
  form.classList.toggle("visibility-search")
}


/****** Faire apparaitre un bouton permettant de revenir en haut de la page ******/

const body = document.querySelector("body")
// on reucpere notre body
const btnReturn = document.createElement("button")
// on crée un element button
btnReturn.classList.add("btnbody")
// on ajoute la class crée pour le mise en forme du body
body.append(btnReturn)
// on incremente notre button dans notre body

const i = document.createElement("i")
// on crée un element i 
i.dataset.feather = "arrow-up-circle";
// on vient recuperer dans le data de l'element l'attribut feather et on lui indique l'icon souhaité dans ca bibliotheque
btnReturn.append(i)
// on incremente l'icon dans le button
feather.replace(i)
// on rappelle la fonction feather pour afficher l'icon dans le boutton



// on  place l'ecouteur scroll pour definir quand on veut avoir le button 
window.addEventListener('scroll', () => {
    // on crée l'event et on lance la fonction
    const verticalScrollPx = window.scrollY 
    // on crée une variable qui stockera notre scroll vertical
    if (verticalScrollPx === 0) {
      // si la variable verticalScrollPx est egale à 0 
      btnReturn.style.display = "none";
      // alors le button ne s'affiche pas
    } 
    else {
        btnReturn.style.display = "flex";
        // sinon il s'affiche
    }
  });


  btnReturn.onclick = () => {
// on crée un event click et on lance la fonction
    window.scrollTo({
      // on crée une fonction qui permettra de  faire défiler la page vers une position spécifiée.
        top: 0,
        // on voudra que la page se deplacera vers le haut 
        behavior: 'smooth'
        // permet d'avoir un défilement plus fluide et animé 
    })
}


/****** Changer le style d'affichage des articles soit en mosaique soit en liste ******/

const changeItem = document.querySelector(".change-item")
// on appelle notre button qui change l'affichage des articles
const cards = document.querySelector(".cards")
cards.classList.add("cards-change")


const card = document.querySelectorAll(".card")
// on appelle notre article
for (let i = 0; i < card.length; i++) {
  card[i].classList.add("card-change")
  card[i].classList.add("card-change__header")
}
// on ajoute notre classe



const p = document.querySelectorAll(".card p")
// on appelle notre paragraphe de l'article
for (let i = 0; i < p.length; i++) {
  p[i].textContent = "lorem"
}
// on dit que pour chaque paragraphe des articles on modifie le texte



