console.log("todo bien")

const NavButton = document.getElementById("nav-menu-button")
const NavMenu = document.getElementById("nav-menu")
let menuOpen = false
NavButton.addEventListener('click', togglemenu)

function togglemenu(event) {
    
    if(!menuOpen) {
        console.log("abrir menu")
        NavButton.classList.replace("close","open")
        NavMenu.classList.replace("close","open")
        menuOpen = true;
    } else {
        console.log("cerrar menu")
        NavButton.classList.replace("open","close")
        NavMenu.classList.replace("open","close")
        menuOpen = false;
    }


}