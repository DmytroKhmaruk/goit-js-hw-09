const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  body: document.body,
};

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function startColorChange() {
  disableButton(refs.startButton);
  enableButton(refs.stopButton);
  
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    changeBackgroundColor(refs.body, randomColor);
  }, 1000);
}

function stopColorChange() {
  enableButton(refs.startButton);
  disableButton(refs.stopButton);
  clearInterval(intervalId);
}

function disableButton(button) {
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

refs.startButton.addEventListener('click', startColorChange);
refs.stopButton.addEventListener('click', stopColorChange);