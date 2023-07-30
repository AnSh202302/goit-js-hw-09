import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timeDifference = 0;
let formatDate = null;
let timerId = null;

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {
      Notify.failure('Please choose a date in the future');

      btnStart.disabled = true;
      return;
    }
    btnStart.addEventListener('click', onClick);
    btnStart.disabled = false;
    console.log(selectedDates);
  },
};
const fp = flatpickr(inputEl, options);

function onClick() {
  timerId = setInterval(() => {
    getDifferenceTime();
  }, 1000);
}

function getDifferenceTime() {
  // const selectedDates = flatpickr.parseDate(inputEl.value);
  const currentDate = Date.now();
  timeDifference = fp.selectedDates[0] - currentDate;
  formatDate = convertMs(timeDifference);
  inputEl.disabled = 'true';
  btnStart.disabled = true;
  changeTimerHTML(formatDate);
  if (fp.selectedDates[0] < currentDate) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    clearInterval(timerId);
    Notify.success('Time is up ✅');
  }
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function changeTimerHTML({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
