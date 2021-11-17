$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dot:true,
    
    responsive:{
        0:{
            items:1,
            autoplay: true,
        },
        600:{
            items:2,
            autoplay: true,
        },
        1000:{
            items:3
        }
    }
    });
  });


const timeline = gsap.timeline({defaults: {duration: 1}})
timeline
    .from('h1', {y:'-500px', ease:'bounce' })
    .from('#start', {x: '-100vw'}, .5)
    .from('.float-burger', {x: '100vw'}, .8)



const menuOn = document.querySelector('#menubar').addEventListener("click", showMenu);
const menuOff = document.querySelector('#cancel').addEventListener("click", hideMenu);
const headin = document.querySelector('h1');


function showMenu(e){
    e.preventDefault();
    document.querySelector('.navigation').style.display='block';
    document.querySelector('.blanket').style.display='block';
    // gsap.from('.navigation', {duration:0.5, x:'-100%'}   )
    // gsap.from('.nav-a', {duration:0.5, opacity: 0, delay:0.5, stagger: .2, ease:''}   )

    const timeline2 = gsap.timeline({defaults: {duration:0.3}})
    timeline2
        .from('.navigation', {x : '-100%'})
        .from('.nav-a', {opacity: 0,}  )

}

function hideMenu(){
    document.querySelector('.navigation').style.display='none';
    document.querySelector('.blanket').style.display='none';
        timeline2.reverse()

    //  const timeline = gsap.timeline({defaults: {duration:0.3}})
    // timeline
    //     .from('.navigation', {x : '-100%'})
    //     .from('.nav-a', {opacity: 0,}  )
    
}