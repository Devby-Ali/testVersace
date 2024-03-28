const navabar = document.querySelector('nav.nav')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
    let nowScrollTop = document.documentElement.scrollTop


    if (nowScrollTop > lastScrollTop) {
        navabar.style.top = '-80px'
    } else {
        navabar.style.top = '0px'
    }

    lastScrollTop = nowScrollTop
})

const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")

let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")

        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})