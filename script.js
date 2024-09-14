// TO live reload tailwindcss run:
// npx tailwindcss -i ./input.css -o ./output.css --watch

const timeline = gsap.timeline({
  defaults: { duration: 2 },
});

timeline
  // Screen 1 animations
  .fromTo(".screen1", { display: "none" }, { duration: 1, display: "block" })
  .fromTo(
    ".screen1 .text-1",
    { opacity: 0, y: -200 },
    { opacity: 1, y: 0, ease: "bounce.out" }
  )
  .fromTo(".screen1 .text-2", { opacity: 0 }, { opacity: 1 })
  //   Removing screen 1
  .fromTo(
    ".screen1",
    { y: 0, opacity: 1 },
    { y: 100, opacity: 0, ease: "power4.out" },
    "<4"
  )
  .to(".screen1", { duration: 0, display: "none" })
  //   Adding screen 2
  .fromTo(".screen2", { display: "none" }, { duration: 0, display: "block" })
  // Screen 2 animations
  .fromTo(".screen2 .text-1", { opacity: 0 }, { opacity: 1 })
  //   Removing screen 2
  .fromTo(".screen2", { opacity: 1 }, { opacity: 0 }, "<3")
  .to(".screen2", { duration: 0, display: "none" })
  //   Adding screen 3
  .fromTo(".screen3", { display: "none" }, { duration: 0, display: "block" })
  // Screen 3 animations
  .fromTo(
    ".screen3 .text-1",
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, ease: "bounce.out" }
  )
  .fromTo(
    ".screen3 .text-2 span",
    { opacity: 0 },
    { opacity: 1, duration: 0.1, stagger: 0.2 },
    "+=1"
  )
  //   Removing screen 3
  .fromTo(
    ".screen3",
    { opacity: 1, x: 0 },
    { opacity: 0, x: 100, ease: "power4.out" }
  )
  .to(".screen3", { duration: 0, display: "none" })
  //   Adding screen 4
  .fromTo(".screen4", { display: "none" }, { duration: 0, display: "block" })
  // Screen 4 animations
  .fromTo(
    ".screen4 .text-1",
    { opacity: 0, y: -200 },
    { opacity: 1, y: 0, ease: "power4.out" }
  )
  .fromTo(
    ".screen4 .text-2 span",
    { opacity: 0 },
    { opacity: 1, duration: 0.2, stagger: 0.05 }
  )
  .fromTo(".screen4 .text-3", { opacity: 0 }, { opacity: 1 })
  //   Removing screen 4
  .fromTo(
    ".screen4",
    { opacity: 1, y: 0 },
    { opacity: 0, y: 100, ease: "power4.out" }
  )
  .to(".screen4", { duration: 0, display: "none" })
  //   Adding screen 5
  .fromTo(".screen5", { display: "none" }, { duration: 0, display: "block" })
  // Screen 5 animations
  .fromTo(
    ".screen5 .text-1",
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, ease: "power4.out" }
  )
  .fromTo(
    ".screen5 .text-2",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
  )
  .to(".screen5 .text-1", { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen5 .text-2", { opacity: 0, scale: 5, ease: "power4.out" }, "<3")
  //   Removing screen 5
  .to(".screen5", { duration: 0, display: "none" })
  //   Adding screen 6
  .fromTo(".screen6", { display: "none" }, { duration: 0, display: "block" })
  // Screen 6 animations
  .fromTo(
    ".screen6 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  //   Removing screen 6
  .fromTo(".screen6", { opacity: 1 }, { opacity: 0, ease: "power4.out" })
  .to(".screen6", { duration: 0, display: "none" })
  //   Adding screen 7
  .fromTo(".screen7", { display: "none" }, { duration: 0, display: "block" })
  // Screen 7 animations
  .fromTo(
    ".screen7 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(".screen7 .text-2", { opacity: 0 }, { opacity: 1 })
  //   Removing screen 7
  .fromTo(".screen7", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen7", { duration: 0, display: "none" })
  //   Adding screen 8
  .fromTo(".screen8", { display: "none" }, { duration: 0, display: "block" })
  // Screen 8 animations
  .fromTo(
    ".screen8 .text-1 span",
    { scale: 3, opacity: 0, rotation: 15 },
    { scale: 1, opacity: 1, rotation: 0, stagger: 0.8, duration: 0.5 },
    "+=1"
  )
  .to(".screen8 .text-1 span", {
    scale: 3,
    opacity: 0,
    rotation: -15,
    stagger: 0.8,
    duration: 0.5,
  })
  //   Removing screen 8
  .fromTo(".screen8", { opacity: 1 }, { opacity: 0, ease: "power4.out" })
  .to(".screen8", { duration: 0, display: "none" })
  //   Adding screen 9
  .fromTo(".screen9", { display: "none" }, { duration: 0, display: "block" })
  // Screen 9 animations
  .fromTo(
    ".screen9 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(".screen9 .text-2", { opacity: 0 }, { opacity: 1 })
  //   Removing screen 9
  .fromTo(".screen9", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen9", { duration: 0, display: "none" })
  //   Adding screen 10
  .fromTo(".screen10", { display: "none" }, { duration: 0, display: "block" })
  // Screen 10 animations
  .fromTo(
    ".screen10 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(".screen10 .text-2", { opacity: 0 }, { opacity: 1 })
  //   Removing screen 10
  .fromTo(".screen10", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen10", { duration: 0, display: "none" })
  //   Adding screen 11
  .fromTo(".screen11", { display: "none" }, { duration: 0, display: "block" })
  // Screen 11 animations
  .fromTo(
    ".screen11 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  //   Removing screen 11
  .fromTo(".screen11", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen11", { duration: 0, display: "none" })
  //   Adding screen 12
  .fromTo(".screen12", { display: "none" }, { duration: 0, display: "block" })
  // Screen 12 animations
  .fromTo(
    ".screen12 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  //   Removing screen 12
  .fromTo(".screen12", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen12", { duration: 0, display: "none" })
  //   Adding screen 13
  .fromTo(".screen13", { display: "none" }, { duration: 0, display: "block" })
  // Screen 13 animations
  .fromTo(
    ".screen13 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(".screen13 .text-2", { opacity: 0 }, { opacity: 1 })
  .fromTo(".screen13 .text-1 .bar", { x: "-100%" }, { x: "0%" })
  //   Removing screen 13
  .fromTo(".screen13", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen13", { duration: 0, display: "none" })
  //   Adding screen 14
  .fromTo(".screen14", { display: "none" }, { duration: 0, display: "block" })
  // Screen 14 animations
  .fromTo(
    ".screen14 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  //   Removing screen 14
  .fromTo(".screen14", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen14", { duration: 0, display: "none" })
  //   Adding screen 15
  .fromTo(".screen15", { display: "none" }, { duration: 0, display: "block" })
  // Screen 15 animations
  .fromTo(
    ".screen15 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  //   Removing screen 15
  .fromTo(".screen15", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<2")
  .to(".screen15", { duration: 0, display: "none" })
  //   Adding screen 16
  .fromTo(".screen16", { display: "none" }, { duration: 0, display: "block" })
  // Screen 16 animations
  .fromTo(
    ".screen16 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  //   Removing screen 16
  .fromTo(".screen16", { opacity: 1 }, { opacity: 0, ease: "power4.out" }, "<4")
  .to(".screen16", { duration: 0, display: "none" })
  //   Adding screen 17
  .fromTo(".screen17", { display: "none" }, { duration: 0, display: "block" })
  // Screen 17 animations
  .fromTo(
    ".screen17 .text-1",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(
    ".screen17 .text-2",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(
    ".screen17 .text-3",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  )
  .fromTo(
    ".screen17 .text-4",
    { opacity: 0 },
    { opacity: 1, ease: "power4.out" }
  );

const replayBtn = document.getElementsByClassName("replay");

replayBtn[0].addEventListener("click", () => {
  timeline.restart();
});
