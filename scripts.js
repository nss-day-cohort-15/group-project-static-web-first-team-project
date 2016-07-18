var comp1 = {
image: "",
name: "TEST NAME COMPLIMENT #1",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 1",
availability: "YES",
hand: "FOREHAND"
}

var comp2 = {
image: "",
name: "TEST NAME COMPLIMENT #2",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 2",
availability: "YES",
hand: "FOREHAND"
}

var comp3 = {
image: "",
name: "TEST NAME COMPLIMENT #3",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 3",
availability: "YES",
hand: "FOREHAND"
}

var comp4 = {
image: "",
name: "TEST NAME COMPLIMENT #4",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 4",
availability: "YES",
hand: "FOREHAND"
}

var insult1 = {
image: "",
name: "TEST NAME INSULT #1",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 1",
availability: "YES",
hand: "Backhand"
}

var insult2 = {
image: "",
name: "TEST NAME INSULT #2",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 2",
availability: "YES",
hand: "Backhand"
}

var insult3 = {
image: "",
name: "TEST NAME INSULT #3",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 3",
availability: "YES",
hand: "Backhand"
}

var insult4 = {
image: "",
name: "TEST NAME INSULT #4",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 4",
availability: "YES",
hand: "Backhand"
}


var productSpecs = [comp1, comp2, comp3, comp4, insult1, insult2, insult3, insult4]

function populateProducts() {
  for (i = 0; i < productSpecs.length; i++) {
    document.getElementById("products").innerHTML +=
    "<article><h1>" + productSpecs[i].name + "</h1>" + "<p>" +productSpecs[i].description + "</p>"
    "</article>"

  }
}

populateProducts();