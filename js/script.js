const color = [
  "#2dc7aa",
  "#e41e60",
  "#f7c04a",
  "#3f80b5",
  "#d67078",
  "#09a5b2",
  "#af0f06",
  "#f98883",
  "#1f2c33",
  "#F97F51",
  "#FD7272",
  "#58B19F",
  "#57606f",
  "#4a69bd",
  "#fa983a",
  "#3c6382",
  "#38ada9",
  "#60a3bc",
  "#1B9CFC",
  "#B33771",
];

const preloader = document.querySelector(".preload");
window.addEventListener("load", randomColor);

document.addEventListener("click", randomColor);

window.addEventListener("load", () => {
  preloader.classList.add("end");
});

function randomColor() {
  const newColor = color[Math.floor(Math.random() * 20)];

  const colorSvg = document.querySelector(".cls-2 ");

  document.documentElement.style.setProperty("--color", newColor);
  animCursor();
}

const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    `top: ${e.pageY - 10}px  ; left : ${e.pageX - 10}px  ;`
  );
});

function animCursor() {
  cursor.classList.add("active");
  cursor.addEventListener("animationend", () => {
    cursor.classList.remove("active");
  });
}

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const inducator = document.querySelector(".inducator");
let index = 0;

prev.addEventListener("click", () => {
  prevSlide();
});

next.addEventListener("click", () => {
  nextSlide();
});

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  inducator.innerHTML = "";
  circleInducator();
  changeSlide();
  resetTimer();
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  inducator.innerHTML = "";
  circleInducator();
  changeSlide();
  resetTimer();
}

function changeSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("activate");
  }

  slides[index].classList.add("activate");
}

function circleInducator() {
  for (i = 0; i < slides.length; i++) {
    const div = document.createElement("div");

    if (i == index) {
      div.classList.add("activate");
    }

    inducator.appendChild(div);
  }
}

circleInducator();

function autoPlay() {
  nextSlide();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 4000);
}

let timer = setInterval(autoPlay, 4000);
