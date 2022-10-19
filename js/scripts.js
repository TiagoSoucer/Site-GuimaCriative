// Progress Bar
let containerA = document.getElementById("circleA");

let circleA = new ProgressBar.Circle(containerA, {
    color:' #ffcd00',
    strokeWidth: 8,
    duration: 1400,
    from:{ color: '#AAA'},
    to: {color: '#ffcd00'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 60);

        circle.setText(value);
    }


});

let containerB = document.getElementById("circleB");

let circleB = new ProgressBar.Circle(containerB, {
    color:' #ffcd00',
    strokeWidth: 8,
    duration: 1600,
    from:{ color: '#AAA'},
    to: {color: '#ffcd00'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 254);

        circle.setText(value);
    }


});

let containerC = document.getElementById("circleC");

let circleC = new ProgressBar.Circle(containerC, {
    color:' #ffcd00',
    strokeWidth: 8,
    duration: 2000,
    from:{ color: '#AAA'},
    to: {color: '#ffcd00'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 32);

        circle.setText(value);
    }


});

let containerD = document.getElementById("circleD");

let circleD = new ProgressBar.Circle(containerD, {
    color:' #ffcd00',
    strokeWidth: 8,
    duration: 2200,
    from:{ color: '#AAA'},
    to: {color: '#ffcd00'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 5243);

        circle.setText(value);
    }


});

// Iniciando o loader quando o usuário chega no elemento
let dataAreaOffset = document.querySelectorAll('#data-area')
let animationClass = circleA
let animationClassB = circleB
let animationClassC = circleC
let animationClassD = circleD
let stop = 0;

function scrollTop(){
    let scrolling = window.pageYOffset + ((window.innerHeight * 3) / 4)
    dataAreaOffset.forEach(function(e){
        if(scrolling > e.offsetTop){

           e.classList.add(animationClass.animate(1.0));
           e.classList.add(animationClassB.animate(1.0));
           e.classList.add(animationClassC.animate(1.0));
           e.classList.add(animationClassD.animate(1.0));

           
    } 

    
    
    })
}

scrollTop()

window.addEventListener('scroll', function(){
    scrollTop()
       
    
})



// Parallax

setTimeout(function(){
    $('#data-area').parallax({imageSrc:'imagens/cidadeparallax.png'})
    $('#apply-area').parallax({imageSrc:'imagens/pattern.png'})
})

// Filtro do portifólio

$('.filter-btn').on('click', function(){
    let type = $(this).attr('id')
    let boxes = $('.project-box')

    $('.main-btn').removeClass('active')
    $(this).addClass('active')

    if(type == 'dsg-btn'){
        eachBoxes('dsg',boxes)
    } else if (type == 'dev-btn') {
        eachBoxes('dev',boxes)
    } else if (type == 'seo-btn') {
        eachBoxes('seo',boxes)
    } else {
        eachBoxes('all',boxes)
    }
})

function eachBoxes(type, boxes){
    
    if(type == 'all'){
        $(boxes).fadeIn()
    } else{
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow')
            } else{
                $(this).fadeIn()
            }
        })
    }
}

// scroll para seções
let navBtn = $('.nav-item')

let bannerSection = $('#mainSlider')
let aboutSection = $('#about-area')
let servicesSection = $('#services-area')
let teamSection = $('#team-area')
let portifolioSection = $('#portifolio-area')
let contactSection = $('#contact-area')

let scrollTo = ''

$(navBtn).click(function() {

    let btnId = $(this).attr('id')
    
    if(btnId == 'about-menu') {
        scrollTo = aboutSection
    } else if(btnId == 'services-menu') {
        scrollTo = servicesSection
    } else if(btnId == 'team-menu') {
        scrollTo = teamSection
    } else if(btnId == 'portifolio-menu') {
        scrollTo = portifolioSection
    } else if(btnId == 'contact-menu') {
        scrollTo = contactSection
    } else {
        scrollTo = bannerSection
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500)
})

