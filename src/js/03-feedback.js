import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

if (localStorage.getItem(STORAGE_KEY)) {
  currentValueForm();
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (
    refs.inputEmail.value.trim() === '' ||
    refs.textarea.value.trim() === ''
  ) {
    alert('Please fill all fields of the form');
  } else {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log('test:');
    console.log(savedData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.message = '';
    formData.email = '';
  }
}

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function currentValueForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    const { email, message } = savedMessage;
    refs.inputEmail.value = email ? email : ``;
    refs.textarea.value = message ? message : ``;
  }
}
