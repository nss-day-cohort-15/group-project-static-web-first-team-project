console.log('Welcome to our website fellow developer!')

var navLinks = document.querySelectorAll('li')
var pages = document.querySelectorAll('.page')

showPage(location.hash)

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', clickedNavLink);
}

function clickedNavLink (evt) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add('hidden')
  }

  showPage(evt.target.hash)
}

function showPage (id) {
  if (id) {
    document.querySelector(id).classList.remove('hidden')
  } else {
    document.querySelector('#home').classList.remove('hidden')
  }
}


var comp1 = {
image: "<img src='images/MMDlogo3.png'",
name: "COMPLIMENT #1",
description: "Your beauty is surpassed by no living soul and easily exceeds those of Helen of Troy and Nefertiti. Wars could start to get your attention.",
availability: "<span class='inStock'>In-Stock</span>",
price: "$49.99"
}

var comp2 = {
image: "<img src='images/MMDlogo3.png'",
name: "COMPLIMENT #2",
description: "You are so sexy that Kanye West would interrupt an awards show to recognize you.",
availability: "<span class='outStock'>Out-of-Stock</span>",
price: "$49.99"
}

var comp3 = {
image: "<img src='images/MMDlogo3.png'",
name: "COMPLIMENT #3",
description: "Your laugh is like angels dancing on unicorns bounding across rainbows. I could listen to it every minute for the rest of my life.",
availability: "<span class='inStock'>In-Stock</span>",
price: "$49.99"
}

var comp4 = {
image: "<img src='images/MMDlogo3.png'",
name: "COMPLIMENT #4",
description: "Leonardo Da Vinci would be in awe of your intelligence and creativity.",
availability: "<span class='inStock'>In-Stock</span>",
price: "$49.99"
}

var insult1 = {
image: "<img src='images/MMDlogo3.png'",
name: "BACKHAND #1",
description: "I just love you you are not obsessed with any kind of personal style.",
availability: "<span class='outStock'>Out-of-Stock</span>",
price: "$99.99"
}

var insult2 = {
image: "<img src='images/MMDlogo3.png'",
name: "BACKHAND #2",
description: "I'd love to integrate your ideas into my life, but they are horrible.",
availability: "<span class='inStock'>In-Stock</span>",
price: "$99.99"
}

var insult3 = {
image: "<img src='images/MMDlogo3.png'",
name: "BACKHAND #3",
description: "You are so laid back. I wish I was as comfortable as you are with all of the clutter in your office.",
availability: "<span class='outStock'>Out-of-Stock</span>",
price: "$99.99"
}

var insult4 = {
image: "<img src='images/MMDlogo3.png'",
name: "BACKHAND #4",
description: "Your face looks like genetics gave up after a few minutes",
availability: "<span class='inStock'>In-Stock</span>",
price: "$99.99"
}

var productSpecs = [comp1, comp2, comp3, comp4, insult1, insult2, insult3, insult4]

function populateProducts() {
  for (i = 0; i < productSpecs.length; i++) {
    document.getElementById("products").innerHTML +=
    "<article>" + productSpecs[i].image + "</img>" +
    "<h1>" + productSpecs[i].name + "</h1>" +
    "<p>" + productSpecs[i].description + "</p>" +
    "<h3>Availability: " + productSpecs[i].availability + "</h3>" +
    "<h4>" + productSpecs[i].price + "</h4>"
    "</article>"
  }
}

populateProducts();