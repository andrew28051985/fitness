/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const validityInputNumber = /^[0-9]{1,10}$/;
const contactsSection = document.querySelector('.contacts');
const contactsForm = contactsSection.querySelector('form');
const inputPhoneContacts = contactsForm.querySelector('#phone');
const inputNameContacts = contactsForm.querySelector('#name');
const MIN_LENGTH_PHONE = 10;
const MAX_LENGTH_PHONE = 10;
const URL_SERVER = 'https://echo.htmlacademy.ru';

const onInputValueMissing = (evt) => {
  const field = evt.target;
  if (field.validity.valueMissing) {
    field.setCustomValidity('Заполните обязательное поле');
    setFormError(field);
  }
};

const onInputValueError = (evt) => {
  const field = evt.target;
  setFormError(field);
};

const setFormError = (nameInput) => {
  nameInput.classList.add('invalid');
};

const setFormValidityOk = (evt) => {
  const field = evt.target;
  field.classList.remove('invalid');
};

const validityForm = (namePhone, name) => {
  namePhone.addEventListener('input', (evt) => {
    const lengthInputPhone = namePhone.value.length;

    if (!validityInputNumber.test(namePhone.value)) {
      onInputValueError(evt);
      namePhone.setCustomValidity('Номер телефона должен содержать только цифры');
    } else if (lengthInputPhone < MIN_LENGTH_PHONE) {
      onInputValueError(evt);
      namePhone.setCustomValidity(`Еще нужно ввести минимум ${MIN_LENGTH_PHONE - lengthInputPhone} цыфр`);
    } else if (lengthInputPhone > MAX_LENGTH_PHONE) {
      onInputValueError(evt);
      namePhone.setCustomValidity(`Нужно удалить ${lengthInputPhone - MAX_LENGTH_PHONE} цыфр`);
    } else {
      namePhone.setCustomValidity('');
      setFormValidityOk(evt);
    }
    namePhone.reportValidity();
  });
  name.addEventListener('input', (evt) => {
    const lengthInputName = name.value.length;
    if (lengthInputName > 0) {
      name.setCustomValidity('');
      setFormValidityOk(evt);
    } else {
      onInputValueError(evt);
      name.setCustomValidity('Введите свое имя');
    }
  });

  namePhone.addEventListener('invalid', onInputValueMissing, true);
  name.addEventListener('invalid', onInputValueMissing, true);
};

const reset = (nameForm) => {
  const formInputs = nameForm.querySelectorAll('input');
  formInputs.forEach((input) => {
    input.value = '';
  });
};

const openErrorAlert = (nameForm) => {
  const alertText = document.createElement('p');

  alertText.classList.add('error');
  alertText.textContent = 'Ошибка отправки! Перезагрузите страницу!';
  nameForm.append(alertText);
  const errorTrue = nameForm.querySelectorAll('.error');
  if (errorTrue.length > 1) {
    alertText.remove();
  }
};

const sendData = ((body, onSuccess, onFail) => {
  fetch(URL_SERVER, {method: 'POST', body}
  ).then((responce) => {
    if (responce.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => {
    onFail();
  });
});

const sendUserFormData = (nameForm) => {
  nameForm.addEventListener('submit', (evt) => {
    const field = evt.target;
    evt.preventDefault();
    sendData(new FormData(field), () => reset(nameForm), () => openErrorAlert(nameForm));
  });
};

export {validityForm, sendUserFormData, contactsForm, inputPhoneContacts, inputNameContacts};
