 export function menuHamburguer (){
    const toggleMenu = document.getElementById("toggle-menu");
    const navbarMenuLinks = document.getElementById("main-menu");

    toggleMenu.addEventListener("click", () => {
      navbarMenuLinks.classList.toggle("main-menu--show");
    });
}
