const nav = document.getElementById('nav')
const logo = document.getElementById('logoNav')
const menuLateral = document.getElementById('menuLateral')
const filtroMenuLateral = document.getElementById('filtroMenuLateral')
const opcoesMenu = document.getElementById('opcoesMenu_nav_others')
const opcoesMenu2 = document.getElementById('opcoesMenu_nav_others2')
const opcoesMenu3 = document.getElementById('opcoesMenu_nav_others3')
const opcoesMenuHamburguer = document.getElementById('opcoesMenuHamburguer_nav_others')
const opcoesMenuHamburguer2 = document.getElementById('opcoesMenuHamburguer_nav_others2')
const opcoesMenuHamburguer3 = document.getElementById('opcoesMenuHamburguer_nav_others3')




window.addEventListener('scroll', () => {

    console.log(window.scrollY)

    if (window.scrollY > 600) {

        nav.classList.add('show');
        nav.classList.remove('show2');

    } if (window.scrollY == 0) {

        nav.classList.add('show2');
        nav.classList.remove('show');

        menuLateral.classList.add('return')
        filtroMenuLateral.classList.add('return')
        logo.classList.remove('show')

        menuLateral.classList.remove('show')
        filtroMenuLateral.classList.remove('show')

        opcoesMenuHamburguer.classList.add('return')
        opcoesMenuHamburguer2.classList.add('return')
        opcoesMenuHamburguer3.classList.add('return')

        opcoesMenuHamburguer.classList.remove('show')
        opcoesMenuHamburguer2.classList.remove('show')
        opcoesMenuHamburguer3.classList.remove('show')

        menuAtivo = true
    }
})

let menuAtivo = true

logo.addEventListener('click', () => {

    if (menuAtivo == true) {

        menuLateral.classList.add('show')
        filtroMenuLateral.classList.add('show')
        logo.classList.add('show')
        
        opcoesMenuHamburguer.classList.add('show')
        opcoesMenuHamburguer2.classList.add('show')
        opcoesMenuHamburguer3.classList.add('show')

        opcoesMenuHamburguer.classList.remove('return')
        opcoesMenuHamburguer2.classList.remove('return')
        opcoesMenuHamburguer3.classList.remove('return')

        menuLateral.classList.remove('return')
        filtroMenuLateral.classList.remove('return')

        menuAtivo = false
    }
    else {
        
        opcoesMenuHamburguer.classList.add('return')
        opcoesMenuHamburguer2.classList.add('return')
        opcoesMenuHamburguer3.classList.add('return')

        opcoesMenuHamburguer.classList.remove('show')
        opcoesMenuHamburguer2.classList.remove('show')
        opcoesMenuHamburguer3.classList.remove('show')

        menuLateral.classList.add('return')
        filtroMenuLateral.classList.add('return')
        logo.classList.remove('show')

        menuLateral.classList.remove('show')
        filtroMenuLateral.classList.remove('show')

        menuAtivo = true
    }
})

function verificarTamanhoDaTela() {
    let largura = window.innerWidth

    console.log(largura)


    if (largura <= 670) {

        opcoesMenu.innerText = ''
        opcoesMenu2.innerText = ''
        opcoesMenu3.innerText = ''

    } if (largura > 670) {

        opcoesMenu.innerText = 'Sobre a Empresa'
        opcoesMenu2.innerText = 'Nossos Serviços'
        opcoesMenu3.innerText = 'Trabalhe conosco'

    }
}

verificarTamanhoDaTela()

window.addEventListener('resize', verificarTamanhoDaTela)