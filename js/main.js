// Contagem regressiva - Retirado do w3schools e adaptado (https://www.w3schools.com/howto/howto_js_countdown.asp)
let dateEvent = new Date('Nov 11, 2021 00:00:00').getTime()

// Atualiza a contagem a cada 1 segundo
let x = setInterval(function () {
  let dateNow = new Date().getTime()

  let timeToEnd = dateEvent - dateNow

  let days = Math.floor(timeToEnd / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeToEnd % (1000 * 60)) / 1000)

  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('minutes').innerHTML = minutes
  document.getElementById('seconds').innerHTML = seconds

  if (timeToEnd < 0) {
    document.getElementById('days').innerHTML = 0
    document.getElementById('hours').innerHTML = 0
    document.getElementById('minutes').innerHTML = 0
    document.getElementById('seconds').innerHTML = 0

    clearInterval(x)
    let dateText = document
      .getElementById('home-box-left')
      .getElementsByTagName('h3')[0]

    dateText.innerHTML = 'O grande dia chegou! <br /> Descontos até 50% off!!!'
    dateText.style.letterSpacing = '1px'
    dateText.style.textTransform = 'none'

    let discountText = document
      .getElementById('home-box-left')
      .getElementsByTagName('p')[0]
    discountText.style.display = 'none'
  }
}, 1000)

// Local Storage
const form = document.getElementById('subscribe-form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let name = document.getElementById('input-name').value
  let email = document.getElementById('input-email').value

  let subscribeDiv = document.getElementById('subscribe')

  let jsonData = JSON.stringify({ name, email })
  localStorage.setItem('lead', jsonData)

  subscribeDiv.innerHTML =
    '<p>Parabéns, você está inscrito e agora receberá em primeira mão todas as nossas promoções!</p>'
  subscribeDiv.style.paddingTop = '30px'
})
