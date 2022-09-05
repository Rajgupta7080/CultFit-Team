const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const ampm = document.getElementById('ampm')

function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()

  if (h > 12) {
    h = h - 12
  }
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  hour.innerText = h
  minute.innerText = m
  second.innerText = s
  setTimeout(() => {
    updateClock()
  }, 1000)
}
updateClock()

async function getdata() {
  try {
    const url = `http://localhost:3000/Labdata`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    localStorage.setItem('Labdata', JSON.stringify(data))
  } catch (error) {
    console.log(error)
  }
}
getdata()
function appendData() {
  const labdata = JSON.parse(localStorage.getItem('Labdata')) || []
  labdata.map((el) => {
    let main_div = document.createElement('div')
    let image = document.createElement('img')
    image.src = el.image
    image.id = 'Labpic'
    let pricediv = document.createElement('div')
    pricediv.id = 'PriceDiv'
    let price = document.createElement('p')
    price.innerText = '₹ ' + el.price
    price.id = 'price'
    price.style.textDecoration = 'line-through'
    let Price = document.createElement('p')
    Price.innerText = el.Price
    Price.style.fontWeight = '100'
    Price.style.color = 'black'
    pricediv.append(Price, price)
    let Offerdiv = document.createElement('div')
    Offerdiv.id = 'OfferDiv'
    let offer = document.createElement('p')
    offer = '₹ ' + el.Offer
    offer.id = 'offer'
    let Offer = document.createElement('p')
    Offer.innerText = el.offer
    Offer.style.fontWeight = '100'
    Offer.style.color = 'black'
    Offerdiv.append(Offer, offer)
    main_div.append(image, pricediv, Offerdiv)
    document.getElementById('labImg').append(main_div)
  })
}
appendData()
