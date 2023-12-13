//Hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navmenu.classList.toggle("hidden");
})

//Navbar
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixednav = header.offsetTop;
    if(window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
};