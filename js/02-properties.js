const imageEl = document.querySelector(".hero__image");
console.log(imageEl);
console.log(imageEl.src);

console.log(imageEl.width);

imageEl.src = "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";

const heroTitleEl = document.querySelector(".hero__title");
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = "Заміна тексту Все про меня";
console.log("текст після зміни", heroTitleEl);
console.log("текст після зміни", heroTitleEl.textContent);

console.log(imageEl.getAttribute("src"));
console.log(imageEl.getAttribute("width"));

const actions = document.querySelectorAll(".js-actions button");
console.log("actions - ", actions);
console.log(actions[0].dataset);
console.log(actions[2].dataset.action);
