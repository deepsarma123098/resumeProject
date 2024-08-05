
function valueSetters () { 
  var tl = gsap.timeline();
  
  tl 
 
 .set('.navbar a', { 
   
    y: "-100%",
    opacity: 0,
})

.set(".home .parent .child", {

  y:"100%",
 
})

.set(".home .row img", {

  opacity:0,

})

let svg = document.querySelectorAll('#Visual>g');

  svg.forEach(e => {
   let variable = e.children[0].children[0];


  variable.style.strokeDasharray = variable.getTotalLength() + 'px'; 
  variable.style.strokeDashoffset = variable.getTotalLength() + 'px'
  
})
}

function revealToSpan() {
    let element = document.querySelectorAll('.reveal');

    element.forEach( elem => { 
       
         let spanParent = document.createElement('span');
         let spanChild = document.createElement('span');
    
         spanParent.classList.add("parent");
         spanChild.classList.add("child");
    
    
         spanChild.innerHTML = elem.innerHTML;
    
         spanParent.appendChild(spanChild);
    
         elem.innerHTML = " ";
         elem.appendChild(spanParent);
    
    })
}

function loaderAnimation() {
  var tl = gsap.timeline();

tl
  
    .from('.child span', {
        x: 100,
        duration: 1.4,
        delay: 1,
        stagger: .2,
        ease: Power3.easeInOut,
    })

   .to('.loader .parent .child', {
      y: "-100%",
      duration: 1,
      delay:1,
      ease: Circ.easeInOut,
   })

  .to('.loader', { 
    height: 0,
    duration: 1,
    top:0,
    ease: Circ.easeInOut,

  })

  .to('.green', { 
    height: "100%",
    duration: 1,
    delay: -.5,
    top:0,
    ease: Circ.easeInOut,

  })

  .to('.green', { 
    height: "0%",
    duration: 1,
    delay: -.4,
    ease: Circ.easeInOut,
    onComplete: ()=> {

      animateHomePage();
    }

  })

  
}




// let x = document.querySelector('g path').getTotalLength();
// console.log(x);

function animateSvg() { 

  

gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
  strokeDashoffset: 0,
  duration: 2,
  ease: Expo.easeInOut
})


}


function animateHomePage() { 
  var tl = gsap.timeline(); 

 tl
 
 .to('.navbar a', { 
   
  y: 0,
  opacity:1,
  stagger:.05,
  ease: Expo.easeInOut,

})

.to('.home .parent .child', { 
   
  y: 0,
  stagger:.5,
  duration:1.5,
  ease: Expo.easeInOut,

})

// .to('.home .parent .child', { 
   
//   y: 0,
//   stagger:.5,
//   duration:1.5,
//   delay:1.5,
//   ease: Expo.easeInOut,

// })

.to('.home .row img', { 
  
  opacity:1,
  delay: -.5,
  ease: Expo.easeInOut,
  onComplete: () => { 
    animateSvg();
  }

})

}


revealToSpan();

valueSetters();

loaderAnimation();




