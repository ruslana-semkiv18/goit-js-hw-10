import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handlerCreate);

function handlerCreate(evt) {
    evt.preventDefault();

    const inputDelay = evt.target.elements.delay;
    const inputState = evt.target.elements.state;
    const delay = Number(inputDelay.value);
    const state = inputState.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => iziToast.show({
            message: `✅ Fulfilled promise in ${delay}ms`,
            messageColor: '#fff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            messageFontFamily: 'Montserrat',
            messageFontWeight: '400',
            backgroundColor: '#59a10d',
            close: false,
            position: 'topRight',
            progressBarColor: '#326101',
        }))
        .catch((delay) => iziToast.show({
            message: `❌ Rejected promise in ${delay}ms`,
            messageColor: '#fff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            messageFontFamily: 'Montserrat',
            messageFontWeight: '400',
            backgroundColor: '#ef4040',
            close: false,
            position: 'topRight',
            progressBarColor: '#b51b1b',
        }));
}