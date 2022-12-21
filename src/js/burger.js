const buttonBurgerOpen = document.querySelector('.button-burger-open')
const burger = document.querySelector('.burger')
const containerMain = document.querySelector('.container-main')
const buttonBurgerClose = document.querySelector('.burger__button-close')
const zoneClose = document.querySelector('.burger__zone-close')
const body = document.querySelector('body')

buttonBurgerOpen.addEventListener('click', () => {
  burger.classList.toggle('burger-open')
  containerMain.classList.toggle('container-main-blur')
  body.classList.add('body-overflow-hiden')
})

buttonBurgerClose.addEventListener('click', () => {
  burger.classList.remove('burger-open')
  containerMain.classList.remove('container-main-blur')
  body.classList.remove('body-overflow-hiden')
})

zoneClose.addEventListener('click', () => {
  burger.classList.remove('burger-open')
  containerMain.classList.remove('container-main-blur')
  body.classList.remove('body-overflow-hiden')
})
