async function Therapydata() {
  try {
    const url = `http://localhost:3000/Therapy`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    localStorage.setItem('Therapy', JSON.stringify(data))
  } catch (error) {
    console.log(error)
  }
}
Therapydata()

function append() {
  const therapy = JSON.parse(localStorage.getItem('Therapy'))
  therapy.map((el) => {
    const main_div = document.createElement('div')
    const Image = document.createElement('img')
    Image.src = el.image
    Image.id = 'DataImg'
    Image.style.width = '650px'
    const title = document.createElement('h2')
    title.innerText = el.title
    const sign = document.createElement('p')
    sign.innerText = el.Msign
    sign.style.fontSize = '20px'
    sign.style.fontWeight = '900'
    sign.style.marginLeft = '3px'
    const desc = document.createElement('p')
    desc.innerText = el.des
    desc.style.color = '#404040'
    // desc.style.marginBottom = '-5px'
    // desc.style.fontSize = '12px'
    const time = document.createElement('p')
    time.innerText = el.Timeimg
    time.style.color = '#404040'
    // time.style.marginLeft = '24px'
    const moneyDiv = document.createElement('div')
    const price = document.createElement('p')
    price.innerText = el.Price
    price.style.textDecoration = 'line-through'
    price.id = 'price'
    const Offerprice = document.createElement('p')
    Offerprice.innerText = el.Offer
    Offerprice.id = 'offer'
    moneyDiv.append(price, Offerprice)
    moneyDiv.style.display = 'flex'
    moneyDiv.style.columnGap = '10px'
    main_div.append(title, sign, desc, time, moneyDiv)
    // main_div.style.border = '2px solid blue'
    // main_div.style.width = '44%'
    // main_div.style.marginTop = '-250px'
    document.getElementById('Therapypage').append(Image)
    document.getElementById('TherapyData').append(main_div)
  })
}
append()
