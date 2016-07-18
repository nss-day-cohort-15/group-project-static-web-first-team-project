var comp1 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME COMPLIMENT #1",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 1",
availability: "YES",
price: "$49.99"
}

var comp2 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME COMPLIMENT #2",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 2",
availability: "YES",
price: "$49.99"
}

var comp3 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME COMPLIMENT #3",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 3",
availability: "YES",
price: "$49.99"
}

var comp4 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME COMPLIMENT #4",
description: "THIS IS THE DESCRIPTION FOR COMPLIMENT NUMBER 4",
availability: "YES",
price: "$49.99"
}

var insult1 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME INSULT #1",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 1",
availability: "YES",
price: "$99.99"
}

var insult2 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME INSULT #2",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 2",
availability: "YES",
price: "$99.99"
}

var insult3 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME INSULT #3",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 3",
availability: "YES",
price: "$99.99"
}

var insult4 = {
image: "<img src='images/envelope.png'",
name: "TEST NAME INSULT #4",
description: "THIS IS THE DESCRIPTION FOR INSULT NUMBER 4",
availability: "YES",
price: "$99.99"
}


var productSpecs = [comp1, comp2, comp3, comp4, insult1, insult2, insult3, insult4]

function populateProducts() {
  for (i = 0; i < productSpecs.length; i++) {
    document.getElementById("products").innerHTML +=
    "<article>" + productSpecs[i].image + "</img>" +
    "<h1>" + productSpecs[i].name + "</h1>" +
    "<p>" + productSpecs[i].description + "</p>" +
    "<h3>" + productSpecs[i].availability + "</h3>" +
    "<p>" + productSpecs[i].price + "</p>"
    "</article>"
  }
}

populateProducts();