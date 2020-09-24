// const input = document.querySelector(".js-input");
// const nameLabel = document.querySelector(".js-button > span");
// const licenseCheckbox = document.querySelector(".js-license");
// const btn = document.querySelector(".js-button");

//АЛЕ КРАЩЕ ПИСАТИ ЗА ДОП ОБ'ЄКТа, де можна зберігати усі елементи

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("change", onInputChange);
// refs.input.addEventListener("input", onInputInput);

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log("Інпут отримав фокус - подія Focus");
}

function onInputBlur() {
  console.log("Інпут втратив фокус - подія Blur");
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onInputInput(event) {
  console.log(event.currentTarget.value);
}

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);

  refs.btn.disabled = !event.currentTarget.checked;
}
