const refs = {
  output: document.querySelector(".js-output"),
  clearButton: document.querySelector(".js-clear"),
};
window.addEventListener("keypress", onKeypress);
refs.clearButton.addEventListener("click", onClearOutput);

function onKeypress(event) {
  //   console.log(event);
  console.log("event.key ", event.key);
  console.log("event.code ", event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = "";
}
