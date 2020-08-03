// ЗАДАЧА 1.1
// const name = "«Генератор защитного поля»"; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'
//
//
//
//
//
// ЗАДАЧА 1.2
// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message = invoice <= stock ? "Заказ оформлен, с вами свяжется менеджер" : "На складе недостаточно товаров!";

// console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
//
//
//
//
//
//
// ЗАДАЧА 1.3
// const userPassword = 123;

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === null) {
//     message = CANCELED_BY_USER;
// } else if (userPassword === ADMIN_PASSWORD) {
//     message = ACCESS_IS_ALLOWED;
// } else {
//     message = ACCESS_DENIED;
// }

// console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'
//
//
//
//
//
//
//
// ЗАДАЧА 1.4
// const orderPieces = 1;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
// if (orderPieces == null) {
//     message = CANCELED_BY_USER;
// }
// else if (orderPieces * pricePerDroid > credits) {
//     message = ACCESS_DENIED
// }
// else {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
// }

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
//
//
//
//
//
//
//
//
//
// ЗАДАЧА 1.5
// const countryName = null;

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//     message = CANCELED_BY_USER;
// } else {
//     country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//     switch (country) {
//         // Write code under this line
//         case "Китай":
//             price = 100;
//             break;
//         case "Австралия":
//             price = 170;
//             break;
//         case "Индия":
//             price = 80;
//             break;
//         case "Ямайка":
//             price = 120;
//             break;
//         default:
//             message = NO_DELIVERY;
//     }
// }
// if (price > 0) { // Write code on this line
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
//   }

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

//
//
//
//
//
//
//
//
// ТЕСТУВАНННЯ МАСИВІВ
// const friends = ["dfg", "vbn", "jkl", "tyu", "adrgfadfg", "12345"];
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// for (let i = 0; i < friends.length; i += 1) {
//   //   console.log(friends[i]);
//   //   console.log(friends);
//   friends[i] += `- ${i + 1}`;
// }
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
// }
//
//
//
//
//
// СУМА ЕЛЕМНТІВ МАСИВУ
// const calculateTotalPrice = function (items) {
//   console.log(`items всередині функції: `, items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([123, 345, 444, 678, 789]));
// console.log(calculateTotalPrice([1, 1, 1, 1, 1]));
//
//
//
//
//
// let summ = 0;

// // варіант 1
// const cart = [1, 2, 3, 4];
// for (const car of cart) {
//   summ += car;
// }
// console.log(summ);

// варіант - 2
// const cart = [1, 2, 3, 4];
// for (const car of cart) {
//   summ += car;
// }
// console.log(summ);
//
//
//
//
//
//
// // ДОБАВЛЯЄ % ДО КОЖНОГО ЕЛЕМЕНТА МАСИВУ

// const array = [10, 10, 10, 10];
// for (let i = 0; i < array.length; i += 1) {
//   array[i] *= 1.1;
// }
// console.log(array);
//
//
//
//
//
//
//
//
//
//
// СУМУЄ ПАРНІ ЧИСЛА
// let total = 0;
// const base = [1, 2, 3, 4, 10];

// for (const bas of base) {
//   if (bas % 2 === 0) {
//     console.log("Парне число", bas);
//     total += bas;
//   }
// }
// console.log(total);
//
//
//
//
//
//
//
// НАЙТИ ЛОГІН
/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */
// варіант-1
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = "";

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Логін ${loginToFind} є в базі`;
//     // console.log(`Логін ${loginToFind} є в базі`);
//     break;
//   }
//   message = `Логін ${loginToFind} НЕ ЗНАЙДЕНО`;
// }

// console.log(message);
//
//
// варіант2
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";

// const message = logins.includes(loginToFind) ? `Логін ${loginToFind} є в базі` : `Логін ${loginToFind} НЕ ЗНАЙДЕНО`;

// console.log(message);
//
//
//
//
//
//
//
// ПОШУК НАЙМЕНШОГО ЧИСЛА
/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let minValue = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (minValue > numbers[i]) {
//     minValue = numbers[i];
//   }
// }
// console.log(minValue);
//
//
//
//
//
// let result = [];
// const getItemsString = function (array) {
//     "use strict";
//     // Write code under this line

//     for (let i = 0; i < array.length; i += 1) {
//         result[i] = `${i + 1} - ${array[i]}`;
//     }
//     return result.join("\n");
// };
//
//
//
//
// ЗАДАЧА 2.1
// const getItemsString = function (array) {
//   "use strict";
//   // Write code under this line
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
//
//
//
//
//
//
//
//
// ЗАДАЧА 2 - 2
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of, for in, forEach или функциональных методов.

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => message.split(" ").length * pricePerWord; // Write code in this line

// console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100
//
//
//
//
//
//
//
//
//
//
// Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.
function findLongestWord(string = "") {
  //   "use strict";
  // Write code under this line
  const words = string.split(" ");
  let lengthLongestWord = words[0].length;
  let nameLongestWord = words[0];

  for (let i = 0; i < words.length; i += 1) {
    if (lengthLongestWord < words[i].length) {
      lengthLongestWord = words[i].length;
    }
  }
  for (let i = 0; i < words.length; i += 1) {
    if (lengthLongestWord === words[i].length) {
      nameLongestWord = words[i];
    }
  }

  return nameLongestWord;
  console.log(lengthLongestWord);
  console.log(nameLongestWord);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

// console.log(findLongestWord("Google do a roll"));
// 'Google'

// console.log(findLongestWord("May the force be with you"));
// 'force'
