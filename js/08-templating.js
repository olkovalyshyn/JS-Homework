const titleEl = document.querySelector(".title");
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);

titleEl.innerHTML = "<a>Це посилання</a>";

titleEl.insertAdjacentHTML("afterbegin", "<a>Something</a>");
