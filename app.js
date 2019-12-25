const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const title = intro.querySelector("h1");
const heartText = intro.querySelector(".heart");
const armText = intro.querySelector(".hand");
const waistText = intro.querySelector(".waist");
const feetLeftText = intro.querySelector(".feet1");
const feetRightText = intro.querySelector(".feet2");
const lootText = intro.querySelector(".loot");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9400,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const titleAnim = TweenMax.fromTo(title, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(titleAnim)
  .addTo(controller);
//heartText Animation
const heartTextAnim=TweenMax.fromTo(heartText,3,{opacity:0},{opacity:1});

let scene3=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:1200
})
.setTween(heartTextAnim)
.addTo(controller);

const heartTextAnimOut=TweenMax.fromTo(heartText,3,{opacity:1},{opacity:0,immediateRender:false});

let scene4=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:2000
})
.setTween(heartTextAnimOut)
.addTo(controller);

//armText Animation
const armTextAnim=TweenMax.fromTo(armText,3,{opacity:0},{opacity:1});

let scene5=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:2200
})
.setTween(armTextAnim)
.addTo(controller);

const armTextAnimOut=TweenMax.fromTo(armText,3,{opacity:1},{opacity:0,immediateRender:false});

let scene6=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:3000
})
.setTween(armTextAnimOut)
.addTo(controller);

//waistText Animation
const waistTextAnim=TweenMax.fromTo(waistText,3,{opacity:0},{opacity:1});

let scene7=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:5200
})
.setTween(waistTextAnim)
.addTo(controller);

const waistTextAnimOut=TweenMax.fromTo(waistText,3,{opacity:1},{opacity:0,immediateRender:false});

let scene8=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:6000
})
.setTween(waistTextAnimOut)
.addTo(controller);

//feetLeftText Animation
const feetLeftTextAnim=TweenMax.fromTo(feetLeftText,3,{opacity:0},{opacity:1});

let scene9=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:7500
})
.setTween(feetLeftTextAnim)
.addTo(controller);

const feetLeftTextAnimOut=TweenMax.fromTo(feetLeftText,3,{opacity:1},{opacity:0,immediateRender:false});

let scene10=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:8200
})
.setTween(feetLeftTextAnimOut)
.addTo(controller);

//feetRightText Animation
const feetRightTextAnim=TweenMax.fromTo(feetRightText,3,{opacity:0},{opacity:1});

let scene11=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:7500
})
.setTween(feetRightTextAnim)
.addTo(controller);

const feetRightTextAnimOut=TweenMax.fromTo(feetRightText,3,{opacity:1},{opacity:0,immediateRender:false});

let scene12=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:8200
})
.setTween(feetRightTextAnimOut)
.addTo(controller);

//lootText Animation
const lootTextAnim=TweenMax.fromTo(lootText,3,{opacity:0},{opacity:1});

let scene13=new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
  offset:8900
})
.setTween(lootTextAnim)
.addTo(controller);
//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos,delay);

  video.currentTime = delay;
}, 33.3);
