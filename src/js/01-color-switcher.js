const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

let timer = null;
buttonStop.toggleAttribute('disabled', true);

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function onStart(e) {
  timer = setInterval(changeBgrColor, 1000);
  buttonStart.toggleAttribute('disabled', true);
  buttonStop.toggleAttribute('disabled', false);
}
function onStop() {
  clearInterval(timer);
  buttonStart.toggleAttribute('disabled', false);
  buttonStop.toggleAttribute('disabled', true);
}
function changeBgrColor() {
  buttonStart.parentElement.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
