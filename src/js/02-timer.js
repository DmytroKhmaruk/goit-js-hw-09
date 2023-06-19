import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
  datetimePicker: document.getElementById("datetime-picker"),
  startButton: document.querySelector("[data-start]"),
  daysElement: document.querySelector("[data-days]"),
  hoursElement: document.querySelector("[data-hours]"),
  minutesElement: document.querySelector("[data-minutes]"),
  secondsElement: document.querySelector("[data-seconds]"),
};

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
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

let timerInterval;
let targetDate;

function startTimer() {
  clearInterval(timerInterval);

  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  timerInterval = setInterval(() => {
    const time = convertMs(targetDate.getTime() - new Date().getTime());
    refs.daysElement.textContent = addLeadingZero(time.days);
    refs.hoursElement.textContent = addLeadingZero(time.hours);
    refs.minutesElement.textContent = addLeadingZero(time.minutes);
    refs.secondsElement.textContent = addLeadingZero(time.seconds);

    if (time.seconds <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

flatpickr(refs.datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure(' the date or time should be greater than it is now.');
      refs.startButton.disabled = true;
      targetDate = null;
    } else {
      targetDate = selectedDate;
      refs.startButton.disabled = false;
    }
  },
});


refs.startButton.addEventListener('click', () => {
  startTimer();
  refs.startButton.disabled = true;
});