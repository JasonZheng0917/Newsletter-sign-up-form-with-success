const card = document.getElementById('card')
const content = document.getElementById('content')
const input = document.getElementById('input')
const p = document.getElementById('p')
const pic = document.getElementById('pic')
const success = document.getElementById('success')
const btn = document.getElementById('btn')



function goTo() {
    if(input.value === '' || /[@]/.test(input.value) !== true){
        p.style.display = 'block'
        input.style.backgroundColor = '#fbe9e6'
        input.style.borderColor = '#cb9993'
    }
    else{
        content.style.display = 'none'
        pic.style.display = 'none'
        success.style.display = 'block'
        card.style.width = '400px'
    }
}



function backTo() {
    content.style.display = 'block'
    content.style.display = 'flex'
    content.style.flexDirection = 'column'
    pic.style.display = 'block'
    p.style.display = 'none'
    success.style.display = 'none'
    card.style.width = '800px'
    input.value = ''
    input.style.backgroundColor = '#ffffff'
    input.style.borderColor = '#dadade'
}