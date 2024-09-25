const navbuttons = document.querySelectorAll("nav button");

const forms = ["square", "cat", "swan", "duck", "heart", "turtle", "boat", "mystery1", "mystery2", "mystery3"]

console.log(navbuttons.length);


for (let i = 0; i < navbuttons.length; i++) {
    navbuttons[i].textContent = forms[i];
}

const button1 = document.querySelector(".figure1")

const button2 = document.querySelector(".figure2")



button1.addEventListener("click", () => {
    document.querySelector(".container").classList = "container square"
});

button2.addEventListener("click", () => {
    document.querySelector(".container").classList = "container cat"
});