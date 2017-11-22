const display = $('.content');
const sections = $('.section');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
    $('.pager__url').eq(sectionEq).children().addClass('pager__active').parent('.pager__url')
        .siblings().children().removeClass('pager__active');
}

const performTransition = sectionEq => {
    if (inScroll) return
    inScroll = true

    const position = (sectionEq * -100) + '%';

    display.css({
        'transform': `translate(0, ${position})`,
        '-webkit-transform': `translate(0, ${position})`
    })

    sections.eq(sectionEq).addClass('section__active')
        .siblings().removeClass('section__active');

    setTimeout(() => {
        inScroll = false;
        switchMenuActiveClass(sectionEq);
    }, 1300);
}

const difineSections = sections => {
    const activeSection = sections.filter('.section__active');
    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
}

const scrollToSection = direction => {

    const section = difineSections(sections)

    if (inScroll) return;

    if (direction === 'up' && section.nextSection.length) { // вниз
        performTransition(section.nextSection.index())
    }

    if (direction === 'down' && section.prevSection.length) { // вверх
        performTransition(section.prevSection.index())
    }
}

$('.wrapper').on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        let direction = (deltaY > 0) ?
            'up' :
            'down'

        scrollToSection(direction);
    },

    touchmove: e => (e.preventDefault())

});


$(document).on('keydown', e => {
    const section = difineSections(sections);

    if (inScroll) return

    switch (e.keyCode) {
        case 40: // вверх
            if (!section.nextSection.length) return;
            performTransition(section.nextSection.index());
            break;

        case 38: //вниз
            if (!section.prevSection.length) return;
            performTransition(section.prevSection.index());
            break;
    }
});

if (isMobile) {
    $(window).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            console.log(direction);
            scrollToSection(direction);
        }
    })
}


$('[data-scroll-to]').on('click touch', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to'));

    performTransition(sectionIndex);
});