document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "top 80%",
        end: "100% 80%",
        scrub: 1,
        duration: 1,
      },
      ease: "elastric",
    })
    .to(".txt_up:nth-child(2)", { y: 0, opacity: 1 })
    .to(".txt_up:nth-child(3)", { y: 0, opacity: 1 })
    .to(".txt_up:nth-child(4)", { y: 0, opacity: 1 });
});
