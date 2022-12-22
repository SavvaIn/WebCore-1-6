const burgerButtonChat = document.querySelector('.burger__button-chat')
const headerButtonChat = document.querySelector('.header__button-chat')
const modalFeedback = document.querySelector('.modal-feedback')
const buttonChatClose = document.querySelector('.button-close-feedback')
const zoneCloseFeedback = document.querySelector('.zone-close-feedback')
const containerMain = document.querySelector('.container-main')
const burger = document.querySelector('.burger')
const body = document.querySelector('body')

burgerButtonChat.addEventListener('click', () => {
  modalFeedback.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
})

headerButtonChat.addEventListener('click', () => {
  modalFeedback.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
})

buttonChatClose.addEventListener('click', () => {
  modalFeedback.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
})

zoneCloseFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
})

//Open-close
const burgerButtonCall = document.querySelector('.burger__button-call')
const headerButtonCall = document.querySelector('.header__button-call')
const modalCall = document.querySelector('.modal-call')
const buttonCallClose = document.querySelector('.buttom-close-call')
const zoneCloseCall = document.querySelector('.zone-close-call')

burgerButtonCall.addEventListener('click', () => {
  modalCall.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
})

headerButtonCall.addEventListener('click', () => {
  modalCall.classList.toggle('feedback-open')
  containerMain.classList.add('container-main-blur')
  burger.classList.add('burger-blur')
  burger.classList.remove('burger-open')
  body.classList.add('body-overflow-hiden')
})

buttonCallClose.addEventListener('click', () => {
  modalCall.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-open')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
})

zoneCloseCall.addEventListener('click', () => {
  modalCall.classList.remove('feedback-open')
  containerMain.classList.remove('container-main-blur')
  burger.classList.remove('burger-open')
  burger.classList.remove('burger-blur')
  body.classList.remove('body-overflow-hiden')
})

const focusCall = document.querySelectorAll('.focus-call')

for (let el of focusCall) {
  el.addEventListener('click', () => {
    document.getElementById('tmp').focus()
  })
}

const focusChat = document.querySelectorAll('.focus-chat')

for (let els of focusChat) {
  els.addEventListener('click', () => {
    document.getElementById('tmp2').focus()
  })
}
