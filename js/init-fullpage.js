var myFullpage = new fullpage('#fullpage', {
// Navigation
    menu: '.navigation-container',
    lockAnchors: false,
    anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    // Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 600,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowMacStyle: false,
    scrollOverflowReset: false,
    touchSensitivity: 10,
    bigSectionsDestination: null,

    // Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    // Design
    controlArrows: true,
    controlArrowsHTML: [
        '<div class="fp-arrow"></div>', 
        '<div class="fp-arrow"></div>'
    ],
    verticalCentered: true,
    paddingTop: '0',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
    waterEffect: false,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    // Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,
    observer: true,

    // Events
    afterLoad: () => {
        const locals = document.querySelectorAll(`.navigation-container>ul>li>a`);
        for(e of locals){
            e.style.borderBottom = "none";
        }
        const local = document.querySelector(`nav li>a[href="#${fullpage_api.getActiveSection().anchor}"]`);
        local.style.borderBottom = "#fff solid 2px";
    },
});
