//Brand
const wrapper = document.querySelector('.brand-list__wrapper')
const buttonBrand = document.querySelector('.brand-list__btn')
const brandArrow = document.querySelector('.brand-list__btn')
const brandText = document.querySelector('.btn__text-brand-list')

buttonBrand.addEventListener('click', () => {
  wrapper.classList.toggle('swiper-up')
  brandArrow.classList.toggle('arrow-rotate')
  brandText.textContent === 'Показать все'
    ? (brandText.textContent = 'Скрыть')
    : (brandText.textContent = 'Показать все')
})

//Repair
const wrapperRepair = document.querySelector('.repair-list__wrapper')
const buttonRepair = document.querySelector('.repair-list__btn')
const repairArrow = document.querySelector('.repair-list__btn')
const repairText = document.querySelector('.btn__text-repair-list')

buttonRepair.addEventListener('click', () => {
  wrapperRepair.classList.toggle('swiper-up')
  repairArrow.classList.toggle('arrow-rotate')
  repairText.textContent === 'Показать все'
    ? (repairText.textContent = 'Скрыть')
    : (repairText.textContent = 'Показать все')
})
