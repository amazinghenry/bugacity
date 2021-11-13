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



const getty = document.querySelector("#menubar");

getty.addEventListener("click", change);

function change(){
    alert("Thank you for visiting, Menu is under development")
}
