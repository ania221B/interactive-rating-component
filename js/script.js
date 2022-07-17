const card = document.querySelector('.card')
const template = document.querySelector('template')
const ratingList = card.querySelector('.rating-scale')
let rates = [...ratingList.children]
const submitBtn = card.querySelector('button[type="submit"]')

ratingList.addEventListener('click', e => {
  if (!e.target.closest('.btn[data-type="secondary"]')) return

  rates.forEach(rate => {
    rate.classList.remove('is-selected')
  })

  const selectedRate = e.target
  selectedRate.classList.add('is-selected')
})

submitBtn.addEventListener('click', e => {
  e.preventDefault()

  rates = [...ratingList.children]
  const userRateIndex = rates.findIndex(rate => rate.classList.contains('is-selected'))
  console.log(userRateIndex)
  if (userRateIndex === -1) {
    const error = card.querySelector('.error')
    error.textContent = 'Please select your rating first. Thank you!'
  } else {
    const templateClone = template.content.cloneNode(true)
    const ratingInfo = templateClone.querySelector('.rating-info')
    ratingInfo.textContent = `You selected ${userRateIndex + 1} out of 5`

    const cardCurrentContent = card.firstElementChild

    card.replaceChild(templateClone, cardCurrentContent)
  }
})
