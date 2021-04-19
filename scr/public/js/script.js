const MENU = document.querySelector(".menu")
const link = document.querySelector(".links")
const LINKS = document.querySelectorAll(".links a")
const SHOWMENU = document.querySelectorAll(".menu-cont .menu")
const HIDDENMENU = document.querySelector(".show-menu")
const IMG = document.querySelector(".show-menu img")
const H3 = document.querySelector(".show-menu h3")
const P = document.querySelector(".show-menu p")
const BUTTON = document.getElementById("hidden")
const BODY = document.querySelector("body")

var menu = true

BUTTON.addEventListener("click",()=>{
    HIDDENMENU.classList.remove("show")
    BODY.classList.remove("body-oveflow")
})

function Menu(){
    link.classList.toggle("showLinks")
    BODY.classList.toggle("body-oveflow")
}

MENU.addEventListener("click",()=>{
    if(menu){
        Menu()
        menu = false
    }

    setTimeout(()=>{
        menu = true
    },1000)
})

LINKS.forEach(Link=>{
    Link.addEventListener("click",()=>{
        link.classList.remove("showLinks")
        BODY.classList.remove("body-oveflow")  
    })
})

SHOWMENU.forEach(menu =>{
    menu.addEventListener("click",()=>{
        HIDDENMENU.classList.add("show")
        BODY.classList.add("body-oveflow")
        IMG.src = menu.children[0].src

        H3.innerHTML = menu.children[1].innerHTML
        for( i of menu.children[2].children){
            if(i !== Number) return
            P.innerHTML += i
        }

    });
});


const comprobarAncho = () => {
    if(window.innerWidth <= 800){
        console.log(",,,");
        BODY.classList.remove("overflow-hidden")
        link.classList.remove("showLinks")
    }
}

comprobarAncho();

window.addEventListener('resize', () => {
    comprobarAncho();
});