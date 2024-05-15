gsap.registerPlugin(ScrollTrigger);

gsap.from(".paintings-list__item-1", {
  scrollTrigger: ".paintings-list__item-1",
  duration: 2,
  delay: 0.3,
  opacity: 0,
  y: 50,
  ease: "power2.out",
});

gsap.from(".paintings-list__item-2", {
  scrollTrigger: ".paintings-list__item-2",
  duration: 2,
  delay: 0.8,
  opacity: 0,
  y: -50,
  ease: "power2.out",
});

gsap.from(".paintings-list__item-3", {
  scrollTrigger: ".paintings-list__item-3",
  duration: 2,
  delay: 1.4,
  opacity: 0,
  y: 50,
  ease: "power2.out",
});

gsap.from(".catalog-item-1", {
  scrollTrigger: ".catalog-item-1",
  duration: 2,
  delay: 0.3,
  opacity: 0,
  x: -500,
  ease: "power2.out",
});

gsap.from(".catalog-item-2", {
  scrollTrigger: ".catalog-item-2",
  duration: 2,
  delay: 0.8,
  opacity: 0,
  x: 500,
  ease: "power2.out",
});

gsap.from(".catalog-item-3", {
  scrollTrigger: ".catalog-item-3",
  duration: 2,
  delay: 1.4,
  opacity: 0,
  x: -500,
  ease: "power2.out",
});
