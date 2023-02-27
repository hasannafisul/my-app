import '../App.css'
import React from 'react'
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from 'react';
const Gun = () => {



  
const check=()=>{
  gsap.timeline({
    scrollTrigger: {
      trigger: ".glock",
      start: "center bottom",
      end: "top top",
      scrub: true
    }
  })
  .to(".slide",  { yPercent: -40 }, 0)
  .to(".barrel", { yPercent:  45 }, 0)
  .to(".spring", { yPercent: 170 }, 0)
  .to(".base",   { yPercent:  35 }, 0)
}


  window.onscroll=()=>{
    check()
  }


  return (
    <div>
    <h1 class="header-section">Scroll to see what it's made of</h1>

<section class="glock" onClick={check}>
  <img src="https://assets.codepen.io/16327/teardown-barrel.png" class="barrel piece" alt="barrel"/>
  <img src="https://assets.codepen.io/16327/teardown-spring.png" class="spring piece" alt="spring"/>
  <img src="https://assets.codepen.io/16327/teardown-slide.png" class="slide piece" alt="slide"/>
  <img src="https://assets.codepen.io/16327/teardown-base.png" class="base piece" alt="base"/>
</section>

<h1 class="header-section">Boom.</h1>




<header>
   <a href="https://greensock.com/scrolltrigger">
     <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
  </a> 
</header>

    </div>
  )
}

export default Gun
