
// swiper slide
// const swiperOptions = {
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     spaceBetween: 30,
//     breakpoints: {
//         768: {
//             slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         }
//     }
// }
// const swiper= new Swiper('.swiper', swiperOptions)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });