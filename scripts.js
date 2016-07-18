var comp1 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #1",
description: "Your beauty is surpassed by no living soul and easily exceeds those of Helen of Troy and Nefertiti. Wars could start to get your attention.",
availability: "YES",
price: "$49.99"
}

var comp2 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #2",
description: "You are so sexy that Kanye West would interrupt an awards show to recognize you.",
availability: "YES",
price: "$49.99"
}

var comp3 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #3",
description: "Your laugh is like angels dancing on unicorns bounding across rainbows. I could listen to it every minute for the rest of my life.",
availability: "YES",
price: "$49.99"
}

var comp4 = {
image: "<img src='images/envelope.png'",
name: "COMPLIMENT #4",
description: "Leonardy Da Vinci would be in awe of your intelligence and creativity.",
availability: "YES",
price: "$49.99"
}

var insult1 = {
image: "<img src='images/envelope.png'",
name: "INSULT #1",
description: "I just love you you are not obsessed with any kind of personal style.",
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
description: "You are so laid back. I wish I was as comfortable as you are with all of the clutter in your office.",
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
    "<h3>In stock: " + productSpecs[i].availability + "</h3>" +
    "<h4>" + productSpecs[i].price + "</h4>"
    "</article>"
  }
}

populateProducts();