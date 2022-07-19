const card = document.querySelector('.card')
const submitBtn = card.querySelector('button[type="submit"]')
const ratingList = card.querySelector('.rating-scale')
const rates = Array.from(ratingList.querySelectorAll('input[type="radio"]'))
const template = document.querySelector('template')

submitBtn.addEventListener('click', e => {
  e.preventDefault()

  const userRateInput = rates.find(rate => rate.checked)

  if (userRateInput === undefined) {
    const error = card.querySelector('.error')
    error.textContent = 'Please select your rating first. Thank you!'
  }

  const userRate = userRateInput.value

  const templateClone = template.content.cloneNode(true)
  const ratingInfo = templateClone.querySelector('.rating-info')
  ratingInfo.textContent = `You selected ${userRate} out of 5`

  const cardCurrentContent = card.firstElementChild

  card.replaceChild(templateClone, cardCurrentContent)
})
