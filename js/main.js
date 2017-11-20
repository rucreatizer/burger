////////////////////////////////////////////////////////////////////
// Задаём переменные
let body = document.querySelector("body");

let burger = document.getElementById("burger-menu");
burger.addEventListener("click", showMenu);
let burgerClose = document.getElementById("close__button_mob");
burgerClose.addEventListener("click", hideMenu);
let burgerMenu = document.getElementsByClassName("mobile__menu_item");

// Для аккордеона команды
let teamName = document.getElementsByClassName("team__people");
Array.from(teamName).forEach(function(element) {
    element.addEventListener('click', accordeonTeam);
});

// Для аккордеона меню
let menuName = document.getElementsByClassName("menu__item");
Array.from(menuName).forEach(function(element) {
    element.addEventListener('click', accordeonMenu);
});

// Для всплывашек отзывов
let review = document.getElementsByClassName("review__more_href");
Array.from(review).forEach(function(element) {
    element.addEventListener('click', reviewMoreShow);

})

// Закрываем окно всплывашки
document.getElementById("review-more__close").addEventListener('click', function() {
    //console.log(this);
    document.getElementById("review-more").classList.add("hide");
})



////////////////////////////////////////////////////////////////////

function reviewMoreShow(e) {
    // Запрещаем действие по умолчанию
    e.preventDefault();
    //console.log(this);
    document.getElementById("review-more").classList.remove("hide");

    let authorName = this.parentElement.children[0].innerHTML;
    let reviewText = this.parentElement.children[1].innerHTML;
    // console.log(authorName);
    // console.log(reviewText);

    document.getElementById("review-more__title").innerHTML = authorName;
    document.getElementById("review-more__text").innerHTML = reviewText;
}


function accordeonMenu() {
    this.lastElementChild.classList.toggle("menu__description_active");
    for (i = 0; i < menuName.length; i++) {
        if ((menuName[i].lastElementChild.classList.contains("menu__description_active")) && (menuName[i] != this)) {
            menuName[i].lastElementChild.classList.toggle("menu__description_active");
        }
    }

}

function accordeonTeam() {
    for (i = 0; i < teamName.length; i++) {
        if (teamName[i].classList.contains("team__people_active")) {
            teamName[i].classList.toggle("team__people_active");
        }
    }
    this.classList.toggle("team__people_active");
}

function showMenu() {
    document.querySelector("body").classList.toggle("body__block");
    document.getElementById("mobile__menu").style.display = "Flex";
}

function hideMenu() {
    document.querySelector("body").classList.toggle("body__block");
    document.getElementById("mobile__menu").style.display = "None";
}

// Навешиваем события на все пункты меню
function setMenuItemEvents() {
    for (i = 0; i < burgerMenu.length; i++) {
        let burgerMenuItem = burgerMenu[i];
        //console.log(burgerMenuItem);
        burgerMenuItem.addEventListener("click", hideMenu);
    }
}

setMenuItemEvents();