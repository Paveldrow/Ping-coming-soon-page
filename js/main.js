const form = document.querySelector('.form');
const emailInput = form.querySelector('.form__input-email');

const REGEXMAIL = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

const errorMessage = document.createElement('p');

const getValidationEmail = () => {
  if (!REGEXMAIL.test(emailInput.value)) {
    emailInput.classList.add('form__input-email--invalid');

    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please provide a valid email address';
    emailInput.after(errorMessage);
  } else {
    emailInput.classList.remove('form__input-email--invalid');
    errorMessage.remove();
  }
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  getValidationEmail();
});