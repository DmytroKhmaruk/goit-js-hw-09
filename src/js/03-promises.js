import Notiflix from "notiflix";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
  });
}
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
event.preventDefault();

  const refs = {
    delayInput: document.querySelector('.delay'),
    stepInput: document.querySelector('.step'),
    amountInput: document.querySelector('.amount'),
  }

  let delay = parseInt(refs.delayInput.value);
  const step = parseInt(refs.stepInput.value);
  const amount = parseInt(refs.amountInput.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const currentDelay = delay + i * step;

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});  