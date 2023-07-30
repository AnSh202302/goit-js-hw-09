import { Notify } from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  e.preventDefault();
  let delay = Number(formEl.delay.value);
  for (let i = 1; i <= formEl.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(formEl.step.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    const obj = { position, delay };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    });
  }, delay);
}
