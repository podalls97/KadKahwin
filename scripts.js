document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("no-scroll"); // Add to <html>
    document.body.classList.add("no-scroll");
    console.log("DOMContentLoaded event fired. Initializing countdown...");
    
    // Function to update countdown timer
    function updateCountdown() {
      const weddingDate = new Date("November 24, 2024 09:00:00").getTime();
      const now = new Date().getTime();
      const timeRemaining = weddingDate - now;
  
      console.log("Time remaining (milliseconds):", timeRemaining);
  
      if (timeRemaining < 0) {
        document.getElementById("countdown-container").innerHTML = "<h2 class='countdown-title'>We are Married!</h2>";
        return;
      }
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Log each calculated value for debugging
      console.log("Days:", days, "Hours:", hours, "Minutes:", minutes, "Seconds:", seconds);
  
      // Update HTML elements if they exist
      if (document.getElementById("days")) document.getElementById("days").textContent = days.toString().padStart(2, '0');
      if (document.getElementById("hours")) document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      if (document.getElementById("minutes")) document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      if (document.getElementById("seconds")) document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
  
    // Initial call and set interval for updating countdown every second
    updateCountdown(); // Initial call to set the timer immediately
    setInterval(updateCountdown, 1000); // Update every second
  
    // Initialize Particles.js with configuration for circular particles
  particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,  // Lowered value for testing
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#ffd700", "#ffdf00", "#ffcc00", "#ffffff"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true
        },
        "size": {
            "value": 5,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "random": true,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "resize": true
        }
    },
    "retina_detect": true
  });
  });
  
  
  
  
  
  
  
  // Floating animation for the first content (hero)
  gsap.to(".hero-content", {
    y: -10,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  // Floating animation for the SVG
  gsap.to(".svg-container", {
    y: -20,
    duration: 4.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.6
  });
  
  
  
  // Floating animation for the bride & groom SVG
  gsap.to(".bride-groom-svg-container", {
    y: -10,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  // Floating animation for the leaves in the hero section
  gsap.to(".leaf-1", {
    x: 20,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-2", {
    x: -20,
    rotation: -5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-3", {
    x: 15,
    rotation: 7,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-4", {
    x: -25,
    rotation: -7,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-5", {
    x: 10,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  
  // Apply similar animations to the golden leaves around the "Save the Date" content
  gsap.to(".leaves-1", {
    x: 20,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaves-2", {
    x: -20,
    rotation: -5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaves-3", {
    x: 15,
    rotation: 7,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaves-4", {
    x: -25,
    rotation: -7,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaves-5", {
    x: 10,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-6", {
    x: 10,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-7", {
    x: 10,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-8", {
    x: 10,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-9", {
    x: 10,
    rotation: 5,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  gsap.to(".leaf-10", {
    x: 15,
    rotation: 7,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  
  gsap.to(".flower-1", {
    x: 15,
    rotation: 7,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  
  gsap.to(".arabic-phrase", {
    y: -10,
    duration: 4,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.6
  });
  
  gsap.to(".save-the-date-svg-container", {
    y: -10,
    duration: 4.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.6
  });
  

  
  
  // Apply similar floating animations to the Arabic phrase and Save the Date SVG
  gsap.to(".arabic-phrase", {
    y: -10,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  gsap.to(".majlis-text", {
    y: -10,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  gsap.to(".save-the-date-svg-container", {
    y: -10,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  gsap.to(".instruction", {
    y: -10,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  // gsap.to(".maps-svg-container", {
  //   y: -10,
  //   duration: 3,
  //   ease: "power1.inOut",
  //   repeat: -1,
  //   yoyo: true,
  //   delay: 0.2
  // });
  
// GSAP ScrollTrigger and animations
gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered animation for the first content (hero section)
gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",        // Triggering the animation on the hero section
    start: "top top",        // Start when the top of the hero section hits the top of the viewport
    end: "bottom top",       // End when the bottom of the hero section reaches the top of the viewport
    scrub: 3,             // Smooth transition during scroll
    pin: true,               // Pin the hero section during the scroll
    markers: false           // Disable markers for production
  }
})
.to(".hero-content", {
  scale: 2,                // Scale up the first content (invitation) as you scroll
  opacity: 0,              // Fade out the content
  filter: "blur(20px)",    // Apply blur to the content
  y: -200,                 // Move content up
  ease: "power1.inOut",
  duration: 1
})
.to(".hero", {
  scale: 1.1,              // Slight zoom in of the background
  ease: "power1.inOut"
}, "<");                   // Sync with previous animation

  
  // Scroll-triggered animation for the second content (Save the Date) with SVG and Arabic Phrase
gsap.timeline({
    scrollTrigger: {
      trigger: ".save-the-date",  // Trigger the animation when the save-the-date section comes into view
      start: "top top",           // Start when save-the-date hits the top of the viewport
      end: "bottom top",          // End when bottom of the save-the-date section reaches the top of the viewport
      scrub: 3,                   // Extended scrub for smoother scroll-trigger
      pin: true,                  // Pin the save-the-date section during the scroll
      markers: false              // Disable markers for production
    }
  })
  .fromTo(".arabic-phrase", {
    scale: 2,                     
    opacity: 0,                   
    filter: "blur(20px)"          
  }, {
    scale: 1,                     
    opacity: 1,                   
    filter: "blur(0px)",          
    duration: 1.5,                // Extended duration for smoother animation
    ease: "power2.out"            // Smoother easing
  })
  .fromTo(".save-the-date-svg-container", {
    scale: 2,                     
    opacity: 0,                   
    filter: "blur(20px)"          
  }, {
    scale: 1,                     
    opacity: 1,                   
    filter: "blur(0px)",          
    duration: 1.5,
    ease: "power2.out"
  }, "<");
  
  // Scroll-triggered animation for the Majlis text
  gsap.timeline({
    scrollTrigger: {
      trigger: ".majlis-text",
      start: "top 80%",
      end: "bottom top",
      scrub: 3,
      markers: false
    }
  })
  .fromTo(".majlis-text", {
    scale: 2,
    opacity: 0,
    filter: "blur(20px)"
  }, {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.5,
    ease: "power2.out"
  });
  
  // Scroll-triggered animation for the Maps SVG
  gsap.timeline({
    scrollTrigger: {
      trigger: ".maps-svg-container",
      start: "top 80%",
      end: "bottom top",
      scrub: 3,
      markers: false
    }
  })
  .fromTo(".maps-svg-container", {
    scale: 2,
    opacity: 0,
    filter: "blur(20px)"
  }, {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.5,
    ease: "power2.out"
  });
  
  // Scroll-triggered animation for the Instructions
  gsap.timeline({
    scrollTrigger: {
      trigger: ".instruction6",
      start: "top 80%",
      end: "bottom top",
      scrub: 3,
      markers: false
    }
  })
  .fromTo(".instruction", {
    scale: 2,
    opacity: 0,
    filter: "blur(20px)"
  }, {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.5,
    ease: "power3.out"
  });
  
  
  // Ensure canvas size is correct on load and resize
  window.onload = adjustCanvasSize;
  window.onresize = adjustCanvasSize;
  
  
  
  
  
  
  
  // Function to dismiss splash screen with smooth transition and start audio playback
  function dismissSplash() {
    const splashScreen = document.getElementById("splash-screen");
    const backgroundBlur = document.getElementById("background-blur");
    const audio = document.getElementById("wedding-song");

    // Add the fade-out class to trigger transition
    splashScreen.classList.add("splash-exit");
    backgroundBlur.classList.add("splash-exit");

    // Remove splash screen, background blur, and re-enable scrolling after transition
    setTimeout(() => {
        splashScreen.style.display = "none";
        backgroundBlur.style.display = "none";
        
        // Remove the no-scroll class to re-enable scrolling
        document.documentElement.classList.remove("no-scroll"); // Remove from <html>
        document.body.classList.remove("no-scroll");
    }, 500); // Match this timeout to the CSS transition duration (0.5s)

    // Attempt to play audio with unmuting
    audio.muted = true; // Start muted for autoplay permission
    audio.play().then(() => {
        audio.muted = false; // Unmute if playback starts
    }).catch(error => {
        console.log("Autoplay was blocked. User interaction required.");
    });
}
