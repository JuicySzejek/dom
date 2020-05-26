const tagSearch = document.querySelectorAll('article.first');
console.log(tagSearch);

for (var i = 0; i < tagSearch.length; i++) {
    const h1Search = tagSearch[i].querySelectorAll('h1');
    console.log(h1Search.length);
}


// ZADANIA DOM 1.2
//zadanie 1
var one = document.getElementsByClassName("title");

function getDataAnimation(one) {
    var two = one.getAttribute("data-animation");
    return two;
    console.log(two);
}


// zadanie 2
var three = document.getElementById("home");
var threeTwo = document.querySelector("#home");
console.log(three);
console.log(threeTwo);
var four = document.querySelector("li").getAttribute("data-direction");
console.log(four);
var five = document.querySelector(".block");
console.log(five);


// zadanie 4
var tag = document.querySelectorAll("article.first");
var h1 = document.querySelectorAll("article.first h1");
console.log(tag);
console.log(h1);


//ZADANIA DOM cz.1.3
// zadanie 1
var links = document.querySelectorAll("li");

function getDatasInfo(elements) {
    var tablica = [];
    for (i = 0; i < elements.length; i++) {
        tablica[i] = elements[i].dataset;
    }
    console.log(tablica);
}
getDatasInfo(links);
//3
var blocks = document.querySelector(".blocks");
console.log(blocks.innerHTML);
console.log(blocks.outerHTML);
// innerHTML zwróciło tylko to co jest w divie o klasie blocks, a outerHTML zwróciło razem z divem blocks
blocks.innerHTML = "Nowa wartość diva o klasie block";
// w klasie blocks został dodany tekst Nowa wartość diva o klasie block




//1
var title = document.querySelector(".title");

function getDataAnimation(title) {
    a = title.getAttribute("data-animation");
    console.log(a);
}
getDataAnimation(title);
//2
var id = document.getElementById("home");
var id2 = document.querySelector("#home");
var li = document.querySelector("li");
var block = document.querySelector(".block");
console.log(id);
console.log(id2);
console.log(li.dataset);
console.log(block);
//4
var tag = document.querySelectorAll("article.first");
var h1 = document.querySelectorAll("article.first h1");
console.log(tag);
console.log(h1);


//zadania DOM cz.1.3
//zadanie 1
var liAll = document.querySelectorAll("li");

function getDatasInfo(elements) {
    var tablica = [];
    for (i = 0; i < elements.length; i++) {
        tablica[i] = elements[i].dataset;
    }
    console.log(tablica);
}
getDatasInfo(liAll);
//zadanie 3
var blocks = document.querySelector(".blocks");
console.log(blocks.innerHTML);
console.log(blocks.outerHTML);
// innerHTML zwróciło tylko to co jest w divie o klasie blocks, a outerHTML zwróciło razem z divem blocks
blocks.innerHTML = "Nowa wartość diva o klasie block";
// w klasie blocks został dodany tekst Nowa wartość diva o klasie block