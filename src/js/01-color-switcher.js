const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function startColorChange() {
  if (startButton.disabled === true) {
    stopButton.disabled = false;
  }
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

startButton.addEventListener('click', startColorChange);