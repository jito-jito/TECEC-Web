console.log("todo bien")

const NavButton = document.getElementById("nav-menu-button")
let menuOpen = false
NavButton.addEventListener('click', togglemenu)

function togglemenu(event) {
    
    if(!menuOpen) {
        console.log("abrir menu")
        NavButton.classList.replace("close","open")
        menuOpen = true;
    } else {
        console.log("cerrar menu")
        NavButton.classList.replace("open","close")
        menuOpen = false;
    }


}