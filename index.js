
    
//scroll effect 

function scrollInto(id) {
     const section = document.getElementById(id);
     section.scrollIntoView({
         behavior: "smooth", 
         block: "start",
         inline: "nearest"
     });
   }


//nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// changing word






const word = document.getElementById('changingWord')

let words = ["Travelling", "Cats", "Coffee", "Plants"];


let count = 0

function changeWord(){
    console.log(count)

    let currentWord = words[count]
    word.innerHTML = currentWord

    count ++ 

    if (count == words.length) { count = 0; }
}

changeWord()

setInterval(changeWord, 2000);