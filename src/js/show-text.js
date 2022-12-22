const textBox = document.querySelector('.info__p')
const button = document.querySelector('.expand-button__expand-show')
const expandShow = document.querySelector('.expand-show')
const arrow = document.querySelector('.expand-button__expand-show')
const text = document.querySelector('.expand-button__text')

const btnInfo = document.querySelector('.show-info')

button.addEventListener('click', () => {
  textBox.classList.toggle('info__p-up')
  arrow.classList.toggle('arrow-rotate')
  button.classList.contains('show-info')
    ? (text.textContent = 'Скрыть') && btnInfo.classList.toggle('show-info')
    : (text.textContent = 'Читать далее') &&
      btnInfo.classList.toggle('show-info')
})
