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



const toggleButton = document.getElementById('toggle')
const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll(".nav-item")


toggleButton.addEventListener('click', ()=>{
    navMenu.classList.toggle('active')
})

navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
   
    navMenu.classList.remove("active");
}




// changing word


const word = document.getElementById('changingWord')

let words = ["Coding","Travelling", "Cats", "Coffee", "Plants"];


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