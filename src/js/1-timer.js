import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate;

const buttonStart = document.querySelector("button");
const inputTime = document.querySelector("#datetime-picker");
const elements = {
    seconds: document.querySelector("span[data-seconds]"),
    minutes: document.querySelector("span[data-minutes]"),
    hours: document.querySelector("span[data-hours]"),
    days: document.querySelector("span[data-days]"),
};

buttonStart.disabled = true;

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
                titleFontWeight: '700',
                message: 'Please choose a date in the future',
                messageColor: '#fff',
                messageSize: '16px',
                messageLineHeight: '1.5',
                messageFontWeight: "400",
                backgroundColor: '#ef4040',
                close: true,
                close: '#fff',
                position: 'topRight',
                progressBarColor: '#b51b1b',
            });
        } else {
            buttonStart.disabled = false;
        }
    },
};


flatpickr("#datetime-picker", options);

buttonStart.addEventListener("click", () => {
    if (userSelectedDate < new Date()) {
        return;
    }

    buttonStart.disabled = true;
    inputTime.disabled = true;

    const counterInterval = setInterval(() => {
        const currentDate = Date.now();
        const selectedDate = userSelectedDate.getTime();
        const diff = selectedDate - currentDate;
   
        if (diff < 0) {
            clearInterval(counterInterval);
            inputTime.disabled = false;
            return;
        }

        const remainingTime = convertMs(diff);
        elements.seconds.textContent = addLeadingZero(remainingTime.seconds);
        elements.minutes.textContent = addLeadingZero(remainingTime.minutes);
        elements.hours.textContent = addLeadingZero(remainingTime.hours);
        elements.days.textContent = addLeadingZero(remainingTime.days);
    }, 1000);
});





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


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}