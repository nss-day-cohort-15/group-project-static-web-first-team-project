var comp1 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #1",
description: "Your thoughts and ideas matter to me.",
availability: "YES",
price: "$49.99"
}

var comp2 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #2",
description: "I think the work you do is important and worthwhile.",
availability: "YES",
price: "$49.99"
}

var comp3 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #3",
description: "I aspire to become more like you both personally and professionally",
availability: "YES",
price: "$49.99"
}

var comp4 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #4",
description: "I consider you a mentor and confidant",
availability: "YES",
price: "$49.99"
}

var insult1 = {
image: "<img src='images/envelope.png'",
name: "INSULT #1",
description: "It looks like you haven't washed your hair in days.",
availability: "YES",
price: "$99.99"
}

var insult2 = {
image: "<img src='images/envelope.png'",
name: "INSULT #2",
description: "I'd love to integrate your ideas into my life, but they are horrible.",
availability: "YES",
price: "$99.99"
}

var insult3 = {
image: "<img src='images/envelope.png'",
name: "INSULT #3",
description: "Your last project was a massive failure and everyone noticed",
availability: "YES",
price: "$99.99"
}

var insult4 = {
image: "<img src='images/envelope.png'",
name: "INSULT #4",
description: "Your face looks like genetics gave up after a few minutes",
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