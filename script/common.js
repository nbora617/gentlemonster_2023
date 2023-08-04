//header, footer JS
//header 전체메뉴 스크립트 flow
//변수생성
const nav = document.querySelector('#nav') //햄버거메뉴
const open_nav = document.querySelector('#open_nav') //nav클릭=open-nav
const nav_close = document.querySelector('#nav_close') //x닫기
console.log(nav,open_nav)
//1. open-nav 초기 숨기기 #open_nav {transform:translateX()}
open_nav.style.transform = 'translateX(100%)'
//2. 햄버거메뉴(nav) 클릭 == open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)';
    //css값 상태에 따라 변경이 일어날 경우 에니메이션 transition
    open_nav.style.transition = '0.7s ease-in'
    //display:none으로 숨긴대상을 다시 보이게 할 경우
    //기존 디자인css에서 flex로 정렬한 대상이면 display:='flex'
    //기존 디자인에서 flex 설정이 없다면 display='block'
})
//3. open-nav 안 X버튼(nav_close) 클릭 == open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)'
})

// swiper-slide open-nav 광고영역 #nav_adver
const nav_adver = new Swiper('#nav_adver', {
    // Optional parameters
    direction:'horizontal',
    loop: true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-prev',
        prevEl: '#nav_adver .swiper-button-next'
    }
})
