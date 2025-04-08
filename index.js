$(document).ready(function () {
    // esconde e mostra o btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 160) { // distancia que tem que rolar antes de aparecer
            $('.go-top').fadeIn(250);
        } else {
            $('.go-top').fadeOut(250);
        }
    });
    // manda pro topo
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1200);
    });
})

$(document).ready(function () {
    // esconde e mostra o btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 160) { // distancia que tem que rolar antes de aparecer
            $('.iconeWhatsapp').fadeIn(250);
        } else {
            $('.iconeWhatsapp').fadeOut(250);
        }
    });
})
