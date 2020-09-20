const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "Це перший заголовок сторінки";
console.log(titleEl);
document.body.appendChild(titleEl);

const imageEl = document.createElement("img");
imageEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "Це якась назва фото";
imageEl.width = 640;
imageEl.setAttribute("width", 580); // аналогычне попередньому
console.log(imageEl);
document.body.appendChild(imageEl);
