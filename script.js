//récuperation des balise bouttons de la navbar
const navbuttons = document.querySelectorAll("nav button");

// créer un tableau avec les nom des formes qu'on doit faire 
const forms = ["square", "cat", "swan", "duck", "heart", "turtle", "boat", "mystery1", "mystery2", "mystery3"]

//boucle pour écrire la forme lié au bouttons
for (let i = 0; i < navbuttons.length; i++) {
    navbuttons[i].textContent = forms[i];
}
//selection des differents stocker dans une variable
const button1 = document.querySelector(".figure1")

const button2 = document.querySelector(".figure2")

document.querySelector(".container").classList = "container square"

//ajout de la fonction qui permet de changer la forme quand on clique sur le boutton associer 

button1.addEventListener("click", () => {
    document.querySelector(".container").classList = "container square"
});

button2.addEventListener("click", () => {
    document.querySelector(".container").classList = "container cat"
});