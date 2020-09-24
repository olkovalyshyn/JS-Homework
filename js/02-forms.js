const formEL = document.querySelector(".js-register-form");

formEL.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // ЦЕ ДЛЯ ОДНОГО ЕЛЕМЕНТА, І ЦЕ ПОГАНО бо довго
  //   const formElements = event.currentTarget.elements;
  //   //   console.dir(event.currentTarget.elements.subscription.value);
  //   const mail = formElements.email.value;
  //   const password = formElements.password.value;

  //   console.log(mail, password);

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });

  console.log("Це сабміт форми");
}
