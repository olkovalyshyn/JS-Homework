const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

addListenerBtn.addEventListener("click", () => {
  console.log("Конопка ДОБАВИТЬ СЛУШТЕЛЬ дає доступ до дії при натисненні другої кнопки ЦЕЛЕВАЯ КНОПКА");
  targetBtn.addEventListener("click", onTargetButtonClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Кнопка СНЯТЬ СЛУЖАТЕЛЬ знімає доступ до кнопки ЦЕЛЕВАЯ КНОПКА");
  targetBtn.removeEventListener("click", onTargetButtonClick);
});

function onTargetButtonClick() {
  console.log("Kліііік");
}
