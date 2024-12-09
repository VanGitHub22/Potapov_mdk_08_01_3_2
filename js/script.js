let dWidth = document.body.style.width

let slider = document.querySelector('.slider')
const slides = Array.from(slider.querySelectorAll('.sliders'))
const slideCount = slides.length
let slideIndex = 0;

let aWidth = 262
let maxWidth = aWidth * 4;

let leftBtn = document.querySelector('.left-btn')
let rightBtn = document.querySelector('.right-btn')

let oWidth = 0

leftBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount
    if(-1 * oWidth > 0){
        oWidth += aWidth
        slides.forEach((slide) => {
            slide.style.transform = "translateX(" + oWidth + "px)"
        })

    }
})

rightBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount
    if(oWidth > -1 * maxWidth){
        oWidth -= aWidth
        slides.forEach((slide) => {
            slide.style.transform = "translateX(" + oWidth + "px)"
        })

    }
})

let burger = document.getElementsByClassName('burger')[0]
let nav_links2 = document.getElementsByClassName('nav_links2')[0]
let crestik = document.getElementsByClassName('crestik')[0]

burger.addEventListener('click', () => {
    nav_links2.style.transform = "translateX(0%) translateY(40px)"
})

crestik.addEventListener('click', () => {
    nav_links2.style.transform = "translateX(100%) translateY(40px)"
})