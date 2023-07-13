const sliderCloseBtn = document.getElementById('close-btn')
const navbar = document.getElementById('navbar')
const drawableBtn = document.getElementById('drawable-btn')

if(drawableBtn){
    drawableBtn.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}

if(sliderCloseBtn){
    sliderCloseBtn.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}