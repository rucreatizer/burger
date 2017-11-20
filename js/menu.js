var state = false;

function change(s) {
    if (s) {
        document.getElementById('menu').style.left = '-450px';
        document.getElementById('menu').style.top = $(window).scrollTop()+'px';
        document.getElementById('burger').className = 'menu-icon__burger';
    } else {
        document.getElementById('menu').style.left = 0;
        document.getElementById('burger').className = 'menu-icon__burger_cl';
        document.getElementById('menu').style.top = $(window).scrollTop()+'px';
    }
    state = !state;
}

    $(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
//        $('.header').addClass('header__scroll');
        document.getElementById('menu').style.top = $(window).scrollTop()+'px';
    }
    else {
//        $('.header').removeClass('header__scroll');
        document.getElementById('menu').style.top = $(window).scrollTop()+'px';
    }
})

;

