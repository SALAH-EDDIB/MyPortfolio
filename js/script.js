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
];

document.addEventListener("click", () => {
  const newColor = color[Math.floor(Math.random() * 5)];

  const colorSvg = document.querySelector(".cls-2 ");

  document.documentElement.style.setProperty("--color", newColor);
});
