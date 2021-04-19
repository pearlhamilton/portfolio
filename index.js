    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link-container");
    const navLinks = document.querySelectorAll(".nav-link-container li");
    
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });
    
//scroll effect 

function scrollInto(id) {
     const section = document.getElementById(id);
     section.scrollIntoView({
         behavior: "smooth", 
         block: "start",
         inline: "nearest"
     });
   }
