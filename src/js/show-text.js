const textBox = document.querySelector('.info__p')
const button = document.querySelector('.expand-button__expand-show')
const expandShow = document.querySelector('.expand-show')
const arrow = document.querySelector('.expand-button__expand-show')
const text = document.querySelector('.expand-button__text')

button.addEventListener('click', () => {
  textBox.classList.toggle('info__p-up')
  arrow.classList.toggle('arrow-rotate')
  text.textContent === 'Читать далее'
    ? (text.textContent = 'Скрыть')
    : (text.textContent = 'Читать далее')
})
