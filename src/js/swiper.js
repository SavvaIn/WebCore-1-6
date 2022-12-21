let swiper

const width = window.matchMedia('(max-width: 767.5px)')
resize(width.matches)
function resize(event) {
  if (event) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 17,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}
