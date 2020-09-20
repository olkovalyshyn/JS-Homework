import products from "./data/products.js";
import product from "./data/products.js";
/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

// const product = {
//   name: "Сервоприводы",
//   description:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

const productContainerEl = document.querySelector(".js-products");

const makeProductCard = (product) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.textContent = product.name;
  nameEl.classList.add("product__name");

  const descEl = document.createElement("p");
  descEl.textContent = product.description;
  descEl.classList.add("product__descr");

  const priceEl = document.createElement("p");
  priceEl.textContent = `Цена: ${product.price} кредитов`;
  priceEl.classList.add("product__price");

  productEl.append(nameEl, descEl, priceEl);

  return productEl;
};

const elements = products.map(makeProductCard);
console.log(elements);

productContainerEl.append(...elements);
console.log(productContainerEl);
