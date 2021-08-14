const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyEl: document.querySelector("body"),
};

let intervalId;

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);

function onStartClick({ target }) {
  target.setAttribute("disabled", true);
  refs.stopBtn.removeAttribute("disabled");

  intervalId = setInterval(() => {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    const randomColor = colors[randomIndex];

    refs.bodyEl.style.background = randomColor;
  }, 1000);
}

function onStopClick({ target }) {
  target.setAttribute("disabled", true);

  refs.startBtn.removeAttribute("disabled");
  clearInterval(intervalId);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
