async function getMindData() {
  try {
    const url = `http://localhost:3000/Mind`
    const res = await fetch(url)
    const Minddata = await res.json()
    console.log(Minddata)
    localStorage.setItem('MindData', JSON.stringify(Minddata))
  } catch (error) {
    console.log(error, 'Error')
  }
}
getMindData()

function appendMindData() {
  const mind = JSON.parse(localStorage.getItem('MindData'))
  mind.map((el) => {
    let main_div = document.createElement('div')
    main_div.style.display = 'flex'
    main_div.setAttribute('id', 'main')
    let div1 = document.createElement('div')
    let image = document.createElement('img')
    image.src = el.image
    image.setAttribute('id', 'poster')
    div1.append(image)

    let div2 = document.createElement('div')
    div2.id = 'dataImg'
    div2.style.marginTop = '-38px'
    let Title = document.createElement('h2')
    Title.innerText = el.title
    Title.style.fontWeight = '100'
    Title.style.letterSpacing = '1px'
    let desce = document.createElement('p')
    desce.innerText = el.description
    desce.style.fontSize = '15px'
    desce.style.lineHeight = '22px'
    desce.style.color = '#4e4e4e'
    desce.style.width = '100%'
    let Size = document.createElement('p')
    Size.innerText = el.size
    Size.style.color = '#4e4e4e'
    Size.style.marginTop = '50px'
    div2.append(Title, desce, Size)
    main_div.append(div1, div2)
    document.getElementById('MindImg').append(main_div)
  })
}
appendMindData()
