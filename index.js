var observer = new IntersectionObserver(
  (entries) => {
    const header = document.querySelector(".header-frame");

    if (entries[0].intersectionRatio != 1) {
      header.classList.add("headerFrame");
      observer.disconnect();
    }
  },
  { threshold: [0.99] }
);

// observing a target element
observer.observe(document.querySelector(".hero"));

function toggleHidden(val) {
  document.getElementById(val).classList.toggle("hidden");
}
