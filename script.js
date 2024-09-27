    const nav = document.querySelector("nav")
    const element = document.createElement("button"); 
    const header = document.querySelector("header")
    const square = document.querySelector(".figure1")
    const body = document.querySelector("body")
    const head = document.querySelector("head")
    const container = document.querySelector(".container")
    square.textContent = "SQUARE"

    header.prepend(element)
    element.classList.add("darkmode")

// créer un tableau avec les nom des formes qu'on doit faire 

    let forms = ["cat", "swan", "duck", "heart", "turtle", "boat", "mystery1", "mystery2", "mystery3"]

    let formsButton = ["square", "cat", "swan", "duck", "heart", "turtle", "boat", "mystery1", "mystery2", "mystery3"]

    let stylesheets = ["square.css", "cat.css", 'swan.css', "duck.css", 'heart.css', 'turtle.css', 'boat.css', "mystery1.css", "mystery2.css", "mystery3.css"]

    forms.forEach(form => {       
        let button = document.createElement("button")
        button.textContent = form.toUpperCase()
        nav.append(button)
    });

    const navbuttons = document.querySelectorAll("nav button")
    
    
    let link = document.createElement("link")
    link.setAttribute("rel", "stylesheet")
    head.append(link)
    
    for (let i = 0; i < formsButton.length; i++) {
        navbuttons[i].addEventListener("click", () =>{
            link.setAttribute("href", stylesheets[i])
        })
    }

    element.addEventListener("click", () =>{
        body.classList.toggle("dark")
    })
