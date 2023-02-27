import React from 'react'
import '../App.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';
import home from '../Images/home1.jpg';
import image1 from "../Images/image_1.jpg";
import image2 from "../Images/image2.avif";
import image3 from "../Images/image3.avif";
import image4 from "../Images/image4.avif";



const AllDirectionAnimation = () => {



  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
    // eslint-disable-next-line no-restricted-globals
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});




const gotobutton=()=>{
  window.scrollTo({top:0,left:0,behavior:'smooth'})
}


  return (
    <div>
      
      <div id="page" class="site">

<div id="feather" class="feather"></div>

<header id="masthead" class="site-header" role="banner">
  <nav class="anchor-nav" role="navigation">
    <a href="#intro" class="anchor">Home</a>
    <a href="#panel-1" class="anchor">Panel 1</a>
    <a href="#panel-3" class="anchor">Panel 3</a>
    <a href="#panel-5" class="anchor">Panel 5</a>
    <a href="#map" class="anchor">Map</a>
  </nav>
</header>

<main id="content" class="site-content" role="main">

  <section id="intro" class="full-screen pt-5 blue">
    <h1>A cool title</h1>

    <div id="clouds-layer-1" class="clouds"></div>
    <div id="clouds-layer-2" class="clouds"></div>
  </section>

  <section id="panels">

    <div id="panels-container" style={{width:"500%"}}>
      <article id="panel-1" class="panel full-screen red">
        <div class="container">
          <div class="row">
            <div class="col-6">

              <img src={home} alt=""/>

            </div>
            <div class="col-6 d-flex flex-column">

              <h2>Panel 1</h2>

              <p class="step-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
              </p>

              <div class="panels-navigation text-right">
                <div class="nav-panel" data-sign="plus"><a href="#panel-2" class="anchor">Next</a></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="panel-2" class="panel full-screen orange">
        <div class="container">
          <div class="row">
            <div class="col-6">

              <img src={image1} alt=""/>

            </div>
            <div class="col-6 d-flex flex-column">

              <h2>Panel 2</h2>

              <p class="step-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
              </p>

              <div class="panels-navigation">
                <div class="nav-panel" data-sign="minus"><a href="#panel-1" class="anchor">Prev</a></div>
                <div class="nav-panel" data-sign="plus"><a href="#panel-3" class="anchor">Next</a></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="panel-3" class="panel full-screen purple">
        <div class="container">
          <div class="row">
            <div class="col-6">

              <img src={image2} alt=""/>

            </div>
            <div class="col-6 d-flex flex-column">

              <h2>Panel 3</h2>

              <p class="step-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
              </p>

              <div class="panels-navigation">
                <div class="nav-panel" data-sign="minus"><a href="#panel-2" class="anchor">Prev</a></div>
                <div class="nav-panel" data-sign="plus"><a href="#panel-4" class="anchor">Next</a></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="panel-4" class="panel full-screen green">
        <div class="container">
          <div class="row">
            <div class="col-6">

              <img src={image3} alt=""/>

            </div>
            <div class="col-6 d-flex flex-column">

              <h2>Panel 4</h2>

              <p class="step-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
              </p>

              <div class="panels-navigation">
                <div class="nav-panel" data-sign="minus"><a href="#panel-3" class="anchor">Prev</a></div>
                <div class="nav-panel" data-sign="plus"><a href="#panel-5" class="anchor">Next</a></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="panel-5" class="panel full-screen gray">
        <div class="container">
          <div class="row">
            <div class="col-6">

              <img src={image4} alt=""/>

            </div>
            <div class="col-6 d-flex flex-column">

              <h2>Panel 5</h2>

              <p class="step-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
              </p>

              <div class="panels-navigation text-right">
                <div class="nav-panel" data-sign="minus"><a href="#panel-4" class="anchor">Prev</a></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section id="map" class="full-screen">
    <h1  onClick={gotobutton} style={{cursor:'pointer'}}>
goto Top
    </h1>
  </section>

</main>

</div>
    </div>
  )
}

export default AllDirectionAnimation
