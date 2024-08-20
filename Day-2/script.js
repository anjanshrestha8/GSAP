gsap.from("#text-animation", {
  y: 100,
  color: "blue",
  rotate: 720,
  delay: 1,
  duration: 4,
});
gsap.from("h1", {
  y: 100,
  color: "cyan",
  delay: 3,
  duration: 2,
  stagger: 1,
  opacity: 0,
});
