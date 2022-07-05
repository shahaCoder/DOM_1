let phone = document.querySelector('.phone1')
let phone2 = document.querySelector('.phone2')
let img = document.querySelector('.phone-left')
let items = document.querySelectorAll('.item')
let line = document.querySelector('hr')
let block = document.querySelector('parent-block')

phone.onclick = () => {
    img.style.height = '500px'
    phone.style.boxShadow = '2px 2px 2px 2px blue'
    phone2.style.boxShadow = 'none'
    phone2.style.borderColor = '#D6D6D6F'
    line.style.opacity = '100%'
    line.style.transform = 'scale(1)'
    items.forEach(btn => {
        btn.style.opacity = '100%'
        btn.style.transform = 'scale(1)'
        
    })

    
}   
phone2.onclick = () => {
    img.style.height = '600px'
    phone.style.boxShadow = 'none'
    phone.style.borderColor = '#D6D6D6FF'
    phone2.style.boxShadow = '2px 2px 2px 2px blue'
    line.style.opacity = '100%'
    line.style.transform = 'scale(1)'
    items.forEach(btn => {
        btn.style.opacity = '100%'
        btn.style.transform = 'scale(1)'
        
    })
}

// OPEN MODAL WINDOW 

let link = document.querySelector('.link');
let modal = document.querySelector('.modal')
let obertka = document.querySelector('.obertka')

link.onclick = () => {
    modal.style.display = 'block'
    obertka.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = '1'
        obertka.style.opacity = '1'
        modal.style.transform = 'translate(-50%, -50%) scale(1)'
    },200)
}

// CLOSE MODAL WINDOW

let close = document.querySelector('.close-block-img')

close.onclick = () => {
    modal.style.display = 'none'
    obertka.style.display = 'none'
    modal.style.opacity = '0'
    obertka.style.opacity = '0'
}

// let qa = document.querySelector('.arrow_down')
let itms = document.querySelectorAll('.items')



   itms.forEach(a => {
       a.onclick = () => {
        itms.forEach(elements => elements.classList.remove('active'))
        a.classList.toggle('active')
       }
    })

let rl1 = document.querySelector('.rl1')
let rl2 = document.querySelector('.rl2')
let rl3 = document.querySelector('.rl3')
let rl4 = document.querySelector('.rl4')
let rl5 = document.querySelector('.rl5')

rl1.onclick = () => {
    img.src = 'картинки/iphone-13-pro-green-select.png'
}
rl2.onclick = () => {
    img.src = 'картинки/iphone-13-mini-pink-select-2021 (1).png'
}
rl3.onclick = () => {
    img.src = 'картинки/iphone-13-mini-blue-select-2021.png'
}
rl4.onclick = () => {
    img.src = 'картинки/iphone-13-mini-midnight-select-2021.png'
}
rl5.onclick = () => {
    img.src = 'картинки/iphone-13-mini-starlight-select-2021.png'
}

