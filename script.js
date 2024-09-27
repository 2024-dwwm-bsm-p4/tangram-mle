    const nav = document.querySelector("nav")
    const element = document.createElement("button"); 
    const header = document.querySelector("header")
    const square = document.querySelector(".figure1")
    square.textContent = "SQUARE"
    element.classList.add("darkmode")

    header.prepend(element)

    const cat = document.createElement("button");
    cat.textContent = "CAT" 

    nav.append(cat)

    const swan = document.createElement("button");
    swan.textContent = "SWAN"

    nav.append(swan)

    const duck = document.createElement("button");
    duck.textContent = "DUCK"

    nav.append(duck)

    const heart = document.createElement("button");
    heart.textContent = "HEART"

    nav.append(heart)

    const turtle = document.createElement("button");
    turtle.textContent = "TURTLE"

    nav.append(turtle)
    
    const boat = document.createElement("button");
    boat.textContent = "BOAT"

    nav.append(boat)

    const mystery1 = document.createElement("button");
    mystery1.textContent = "MYSTERY1"

    nav.append(mystery1)

    const mystery2 = document.createElement("button");
    mystery2.textContent = "MYSTERY2"

    nav.append(mystery2)

    const mystery3 = document.createElement("button");
    mystery3.textContent = "MYSTERY3"

    nav.append(mystery3)
    