// 1️⃣ Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smoothWheel: true,
  smoothTouch: true,
  touchMultiplier: 2,
});

if (/Mobi|Android/i.test(navigator.userAgent)) {
  lenis.stop(); // Stop Lenis on mobile
  document.body.style.overflow = "auto"; // Enable normal scrolling
} else {
  lenis.start();
}


// Sync Lenis with GSAP
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// 2️⃣ Initialize Shery Mouse Follower
if (!/Mobi|Android/i.test(navigator.userAgent)) {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

lenis.start();
document.body.style.overflow = "auto"; // Enable scrolling


// 3️⃣ Image Hover Effect (Shery.js)
Shery.hoverWithMediaCircle("#elem1", {
  images: ["./kp.1.png", "./kp.2.png", "./kp.3.jpg","./kp.4.png"],
});

// //  GSAP ScrollTrigger with Lenis

gsap.to("#hero", { 
  // backgroundColor: "white",
  


  scrollTrigger: {
    trigger: "#hero",
    scroller: lenis ? lenis.rootElement : "body", // Use Lenis scroller if available
    // markers: true,
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true
  }
  
  
});

gsap.to("#try", { 
height:"50vh",
opacity:1,
delay:2,
  scrollTrigger: {
    trigger: "#page3",
    scroller: lenis.rootElement,
    // markers: true,
    start: "top 0",
    end: "bottom 0",
    scrub: 2,
    pin: true
  },

  
});
Shery.imageEffect("#wavy", {
  style: 5, //Select Style
  // debug: true, // Debug Panel
  // gooey:true,
  config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":3.406946547692285},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.23,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  
});
gsap.to("#try-1", { 
  height:"50vh",
  opacity:1,
  delay:2,
    scrollTrigger: {
      trigger: "#page4",
      scroller: document.body,
      // markers: true,
      start: "top 0",
      end: "bottom 0",
      scrub: 2,
      pin: true
    },
  
    
  });
  

// function loadingAnimation() {
//   var tl = gsap.timeline();

//   // Text animation
//   tl.from(".line h1", {
//       y: 150,
//       stagger: 0.25,
//       duration: 0.6,
//       delay: 0.5,
//   });

//   // Number counter animation
//   tl.from("#line1-part1", {
//       opacity: 0,
//       onStart: function () {
//           var h5timer = document.querySelector("#line1-part1 h5");
//           var grow = 0;
//           var interval = setInterval(function () {
//               if (grow < 100) {
//                   h5timer.innerHTML = grow++;
//               } else {
//                   h5timer.innerHTML = "100"; // Ensure it stops at 100
//                   clearInterval(interval); // Stop the counter
//               }
//           }, 27);
//       },
//   });

//   // Smooth appearance of 'Now'
//   tl.to(".line h2", {
//       animationName: "loaderAnime",
//       opacity: 1,
//   });

//   // Fading out loader
//   tl.to("#loader", {
//       opacity: 0,
//       duration: 0.5,
//       delay: 1.6, // Adjusted delay
//       onComplete: function () {
//           document.querySelector("#loader").style.display = "none"; // Hide loader properly
//       },
//   });

//   // Bringing page1 into view
//   tl.from("#page1", {
//       opacity:0,
//       y: 1600,
//       duration: 0.5,
   
//   });

//   // Navbar fade-in
//   tl.from("#nav", {
//       opacity: 0,
//   });
// }

// // Call the function after DOM loads
// document.addEventListener("DOMContentLoaded", loadingAnimation);

var videoContainer = document.querySelector("#video-container");
var video = document.querySelector("#video-container video")
videoContainer.addEventListener("mouseenter", function () {
  videoContainer.addEventListener("mousemove", function (dets) {
    gsap.to(".mousefollower", {
      opacity: 0
    });
    gsap.to("#video-cursor", {
      left: dets.x - 570,
      y: dets.y - 300,
    });
  });
});
videoContainer.addEventListener("mouseleave", function () {
  gsap.to(".mousefollower", {
    opacity: 1

  });
  gsap.to("#video-cursor", {
    left: "70%",
    top: "-15%",
  });
});


var flag = 0
videoContainer.addEventListener("click", function () {
  if (flag == 0) {
    video.play()
    video.style.opacity = 1
    document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
    gsap.to("#video-cursor", {
      scale: 0.5
    })
    flag = 1
  } else {
    video.pause()
    video.style.opacity = 0
    document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
    gsap.to("#video-cursor", {
      scale: 1
    })
    flag = 0
  }
})
