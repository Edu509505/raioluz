const asideCard1 = document.getElementById('asideCard1')
const asideCard2 = document.getElementById('asideCard2')

window.addEventListener('scroll', () => {
    
    if(scrollY >= 100){
        asideCard1.classList.add('play')
        asideCard2.classList.add('play')
    }
})