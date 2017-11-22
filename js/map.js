ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [59.94064569, 30.31145202],
        zoom: 12,
        scroll: false
    }, {
        searchControlProvider: 'yandex#search'
    })
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.94633586, 30.34890400], {
            //hintContent: 'LoftSchool',
            //balloonContent: 'Creatizer'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/map-marker.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
        myPlacemark2 = new ymaps.Placemark([59.96321013, 30.31113850], {
            //hintContent: 'LoftSchool',
            //balloonContent: 'Creatizer'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/map-marker.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
        myPlacemark3 = new ymaps.Placemark([59.91074607, 30.31487870], {
            //hintContent: 'LoftSchool',
            //balloonContent: 'Creatizer'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/map-marker.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),
        myPlacemark4 = new ymaps.Placemark([59.91988285, 30.47830033], {
            //hintContent: 'LoftSchool',
            //balloonContent: 'Creatizer'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../images/map-marker.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

    //,

    // myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
    //     hintContent: 'Собственный значок метки с контентом',
    //     balloonContent: 'А эта — новогодняя',
    //     iconContent: '12'
    // }, {
    //     // Опции.
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#imageWithContent',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'images/menu_img_1.png',
    //     // Размеры метки.
    //     iconImageSize: [48, 48],
    //     // Смещение левого верхнего угла иконки относительно
    //     // её "ножки" (точки привязки).
    //     iconImageOffset: [-24, -24],
    //     // Смещение слоя с содержимым относительно слоя с картинкой.
    //     iconContentOffset: [15, 15],
    //     // Макет содержимого.
    //     iconContentLayout: MyIconContentLayout
    // });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        //.add(myPlacemarkWithContent);
});