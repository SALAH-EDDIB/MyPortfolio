const color = [
  "#2dc7aa",
  "#e41e60",
  "#f7c04a",
  "#3f80b5",
  "#d67078",
  "#09a5b2",
  " #af0f06",
  "#f98883",
  "#1f2c33",
  "#F97F51",
  "#FD7272",
  "#58B19F",
  "#57606f",
];

window.addEventListener("load", randomColor);

document.addEventListener("click", randomColor);

function randomColor() {
  const newColor = color[Math.floor(Math.random() * 13)];

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
