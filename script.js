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

const button3 = document.querySelector(".figure3")

const button4 = document.querySelector(".figure4")

const button5 = document.querySelector(".figure5")

const button6 = document.querySelector(".figure6")

const button7 = document.querySelector(".figure7")

const button8 = document.querySelector(".figure8")

const button9 = document.querySelector(".figure9")

const button10 = document.querySelector(".figure10")

document.querySelector(".container").classList = "container square"

//ajout de la fonction qui permet de changer la forme quand on clique sur le boutton associer 

button1.addEventListener("click", () => {
    document.querySelector(".container").classList = "container square"
});

button2.addEventListener("click", () => {
    document.querySelector(".container").classList = "container cat"
});

button3.addEventListener("click", () => {
    document.querySelector(".container").classList = "container swan"
});

button4.addEventListener("click", () => {
    document.querySelector(".container").classList = "container duck"
});

button5.addEventListener("click", () => {
    document.querySelector(".container").classList = "container heart"
});

button6.addEventListener("click", () => {
    document.querySelector(".container").classList = "container turtle"
});

button7.addEventListener("click", () => {
    document.querySelector(".container").classList = "container boat"
});


button8.addEventListener("click", () => {
    document.querySelector(".container").classList = "container mystery1"
});

button9.addEventListener("click", () => {
    document.querySelector(".container").classList = "container mystery2"
});

button10.addEventListener("click", () => {
    document.querySelector(".container").classList = "container mystery3"
});

