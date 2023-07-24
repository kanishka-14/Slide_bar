const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const container = document.querySelector(".container");
const slider = Array.from(document.querySelectorAll(".slider"));
const counter = document.querySelector("span");
let index = 0;

function right() {
  const timeLine = gsap.timeline();

  timeLine
    .set(counter, {
      innerHTML: index + 1,
    })
    .to(slider[index], { duration: 0.6, x: 0 });
}

function left() {
  const timeLine = gsap.timeline();

  timeLine
    .set(counter, {
      innerHTML: index,
    })
    .to(slider[index], { duration: 0.6, x: "-100%" });
}

nextBtn.addEventListener("click", () => {
  if (index === slider.length - 1) {
    gsap.to(container, {
      keyframes: [
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 4 },
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 0 },
      ],
    });
    return;
  }

  index++;
  right();
});

prevBtn.addEventListener("click", () => {
  if (index === 0) {
    gsap.to(container, {
      keyframes: [
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 4 },
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 0 },
      ],
    });
    return;
  }

  left();
  index--;
});