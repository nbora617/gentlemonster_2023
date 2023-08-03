// nav-open
const nav = document.querySelector('#nav')
const open_nav = document.querySelector('#open_nav')
console.log(nav,open_nav)
nav.addEventListener('click',function(){
    open_nav.style.display = 'block'

})
//nav 닫기
const nav_close = document.querySelector('#nav_close')
nav_close.addEventListener('click',function(){
    open_nav.style.display = 'none'
})
// nav_adver swiper
const nav_adver = new Swiper('#nav_adver', {
    // Optional parameters
    loop: true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-prev',
        prevEl: '#nav_adver .swiper-button-next'
    }
})
