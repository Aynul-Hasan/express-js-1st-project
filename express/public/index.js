const mainNavigation= document.querySelector('.main-navigation');
const overlay = mainNavigation.querySelector('.overlay');
const toggler= mainNavigation.querySelector('.navbar-toggler');
const moon= document.getElementById('moon')
const opensideNav= ()=>mainNavigation.classList.add('active');
const closesideNav= ()=>mainNavigation.classList.remove('active');


toggler.addEventListener('click', opensideNav);
overlay.addEventListener('click', closesideNav);

document.addEventListener('swiped-right', opensideNav);
document.addEventListener('swiped-left', closesideNav);

moon.onclick= ()=>{ 
    document.body.classList.toggle('body-1');
    if(document.body.classList.contains('body-1')){
        moon.src= 'img/sun.png'
    }else{
        moon.src='img/moon.png'
    }
}
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*SCROLL HOME*
    sr.reveal('.hd-h1',{}); 
    sr.reveal('.button',{delay: 200}); 
    sr.reveal('.home_img',{delay: 400});  

    /*SCROLL ABOUT*
    sr.reveal('.about__img',{}); 
    sr.reveal('.about__subtitle',{delay: 400}); 
    sr.reveal('.about__text',{delay: 400}); 

    /*SCROLL SKILLS*
    sr.reveal('.skills__subtitle',{}); 
    sr.reveal('.skills__text',{}); 
    sr.reveal('.skills__data',{interval: 200}); 
    sr.reveal('.skills__img',{delay: 600});

    /*SCROLL WORK*
    sr.reveal('.work__img',{interval: 200}); 

    /*SCROLL CONTACT*
    sr.reveal('.contact__input',{interval: 200});*/
