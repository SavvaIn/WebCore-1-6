//Brand
const wrapper = document.querySelector('.brand-list__wrapper')
const buttonBrand = document.querySelector('.brand-list__btn')
const brandArrow = document.querySelector('.brand-list__btn')
const brandText = document.querySelector('.btn__text-brand-list')

const btnBrands = document.querySelector('.show-brands')

buttonBrand.addEventListener('click', () => {
  wrapper.classList.toggle('swiper-up')
  brandArrow.classList.toggle('arrow-rotate')
  buttonBrand.classList.contains('show-brands')
    ? (brandText.textContent = 'Скрыть') &&
      btnBrands.classList.toggle('show-brands')
    : (brandText.textContent = 'Показать все') &&
      btnBrands.classList.toggle('show-brands')
})

//Repair
const wrapperRepair = document.querySelector('.repair-list__wrapper')
const buttonRepair = document.querySelector('.repair-list__btn')
const repairArrow = document.querySelector('.repair-list__btn')
const repairText = document.querySelector('.btn__text-repair-list')

const btnRepair = document.querySelector('.show-repair')

buttonRepair.addEventListener('click', () => {
  wrapperRepair.classList.toggle('swiper-up')
  repairArrow.classList.toggle('arrow-rotate')
  buttonRepair.classList.contains('show-repair')
    ? (repairText.textContent = 'Скрыть') &&
      btnRepair.classList.toggle('show-repair')
    : (repairText.textContent = 'Показать все') &&
      btnRepair.classList.toggle('show-repair')
})
