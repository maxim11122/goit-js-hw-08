import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');
const KEY_STORAGE = 'feedback-form-state';

formEl.addEventListener('input', throttle(inputData, 500));
formEl.addEventListener('submit', submitForm);

const formData = {};
const storage = JSON.parse(localStorage.getItem(KEY_STORAGE));



fillForm(formEl);
checkStorage();

function checkStorage() {
  if (storage === null) {
    return;
  }
  for (let key in storage) {
    formData[key] = storage[key]
  }
}

function fillForm(form) {
  const storageData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  const formElements = form.elements;

  for (const key in storageData) {
    if (storageData.hasOwnProperty(key)) {
      formElements[key].value = storageData[key];
    }
  }
}

function inputData(ev) {
  const { target } = ev;
  formData[target.name] = target.value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function submitForm(ev) {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
  localStorage.removeItem(KEY_STORAGE);
  ev.target.reset();
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      delete formData[key];
    }
  }
}
