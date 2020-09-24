const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", onMouseEnter);
boxRef.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter(event) {
  event.currentTarget.classList.add("box--active");
}

function onMouseLeave(event) {
  event.currentTarget.classList.remove("box--active");
}

// function onMouseMove(event) {
//   console.log(event);
// }
