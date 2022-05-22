const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile-menu");
});

let bugGuard = false;
var headerObserver = new IntersectionObserver(
  (entries) => {
    const header = document.querySelector(".header-frame");

    if (entries[0].intersectionRatio < 1 && bugGuard === false) {
      header.classList.add("headerFrame");
      bugGuard = true;
    } else {
      header.classList.remove("headerFrame");
      bugGuard = false;
    }
  },
  { threshold: [0.99] }
);
headerObserver.observe(document.querySelector(".hero"));

/* FAQ toggle answers */
function toggleHidden(val) {
  document.getElementById(val).classList.toggle("hidden");
}

const q4 = document.getElementById("q4");
const q3 = document.getElementById("q3");
const q2 = document.getElementById("q2");
const q1 = document.getElementById("q1");
const quarters = [q4, q3, q2, q1];
const quarterTitle = document.getElementById("quarterTitle");
const yearList = document.getElementById("yearList");
let year = 2022;
let currentQuarter = "Q4";

function removeClass(element) {
  element.classList.remove("foundation__quarter--current");
}

function renderHtml(quarter, year) {
  quarterTitle.innerHTML = `
  Foundation Report<br /> ${quarter} ${year}
  `;
}

/* select HTML element */
yearList.addEventListener("click", (e) => {
  year = e.target.value;
  renderHtml(currentQuarter, year);
});

/* Quarter DIVs */
q4.addEventListener("click", () => {
  quarters.forEach(removeClass);
  q4.classList.add("foundation__quarter--current");
  currentQuarter = "Q4";
  renderHtml(currentQuarter, year);
});

q3.addEventListener("click", () => {
  quarters.forEach(removeClass);
  q3.classList.add("foundation__quarter--current");
  currentQuarter = "Q3";
  renderHtml(currentQuarter, year);
});

q2.addEventListener("click", () => {
  quarters.forEach(removeClass);
  q2.classList.add("foundation__quarter--current");
  currentQuarter = "Q2";
  renderHtml(currentQuarter, year);
});

q1.addEventListener("click", () => {
  quarters.forEach(removeClass);
  q1.classList.add("foundation__quarter--current");
  currentQuarter = "Q1";
  renderHtml(currentQuarter, year);
});
