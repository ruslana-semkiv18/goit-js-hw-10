import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate;

const buttonStart = document.querySelector("button");
const elements = {
    seconds: document.querySelector("span[data-second]"),
    minutes: document.querySelector("span[data-minutes]"),
    hours: document.querySelector("span[data-hours]"),
    days: document.querySelector("span[data-days]"),
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0]; 
        if (userSelectedDate < new Date()) {
            iziToast.show({
                iconUrl: '../img/bi_x-octagon.svg',
                title: 'Error',
                titleColor: '#fff',
                titleSize: '16px',
                titleLineHeight: '1.5',
                titleFontWeight: "700",
                message: 'Please choose a date in the future',
                messageColor: '#fff',
                messageSize: '16px',
                messageLineHeight: '1.5',
                messageFontWeight: "400",
                backgroundColor: '#ef4040',
                close: true,
                position: "topRight",
            });
            buttonStart.disabled = true;
        } else {
            buttonStart.disabled = false;
        }
    },
};

flatpickr("#datetime-picker", options);

const second = userSelectedDate.getSeconds();
    const minute = userSelectedDate.getMinutes();
    const hour = userSelectedDate.getHours();
    const day = userSelectedDate.getDay();




setInterval(() => {
    


    elements.seconds.textContent = second;
    elements.minutes.textContent = minute;
    elements.hours.textContent = hour;
    elements.hours.textContent = day;
}, 1000);

buttonStart.addEventListener("click", setInterval);














function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



