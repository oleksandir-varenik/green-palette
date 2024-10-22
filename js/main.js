
let header = document.querySelectorAll("[data-name='acordeon-list']");

header.forEach(function (item) {

    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('acordeon__descar')
    });
});



const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 2,
    spaceBetween: 22,
    loop: true,

    navigation: {
    nextEl: '.reviews__item-prev',
    prevEl: '.reviews__item-next',
    },

});


let menu = document.querySelector('.menu__burger');
let list = document.querySelector('.header__list');

menu.addEventListener('click', function () {
    list.classList.toggle('header__list-open');
});