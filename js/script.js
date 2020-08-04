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
// function findLongestWord(string = "") {
//   //   "use strict";
//   // Write code under this line
//   const words = string.split(" ");
//   let lengthLongestWord = words[0].length;
//   let nameLongestWord = words[0];

//   for (let i = 0; i < words.length; i += 1) {
//     if (lengthLongestWord < words[i].length) {
//       lengthLongestWord = words[i].length;
//     }
//   }
//   for (let i = 0; i < words.length; i += 1) {
//     if (lengthLongestWord === words[i].length) {
//       nameLongestWord = words[i];
//     }
//   }

//   return nameLongestWord;
//   console.log(lengthLongestWord);
//   console.log(nameLongestWord);
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

// console.log(findLongestWord("Google do a roll"));
// 'Google'

// console.log(findLongestWord("May the force be with you"));
// 'force'
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
//
// Задача 2 - 4
// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ...,
// после чего возвращает укороченную версию.
// function formatString(string, maxLength = 40) {
//   // Write code under this line

//   let lengthSentences = string.length;

//   if (lengthSentences <= maxLength) {
//     return string;
//   }

//   let arraySentences = string.split("");
//   arraySentences.length = maxLength;
//   string = arraySentences.join("") + "...";
//   return string;
// }
//console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30));
// 'Vestibulum facilisis, purus ne...'
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
//
// Задача 2 - 5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция
// проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция
// возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке
// могут быть в произвольном регистре.
// function checkForSpam(str) {
//   "use strict";
//   // Write code under this line
//   let onLowerCase = "";
//   onLowerCase = str.toLowerCase();
//   const message = onLowerCase.includes("spam") || onLowerCase.includes("sale") ? true : false;
//   return message;
// }

//console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
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
//
//
//
//
//
//
//
//
// Задача 2 - 6
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет
// его числами из массива array умноженными на 10. Для перебора массива и добавления
// новых значений используй цикл for.По завершению перебора массива array возвращается
// массив numbers.
// function mapArray(array) {
//   "use strict";
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

// Задача 2 - 7
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным
// числом(Number.isFinite).Для проверки используй цикл for.Числа добавляются
// в новый массив numbers с помощью метода push, а не числа - игнорируются.По
// завершению проверки массива array возвращается массив numbers.
// function filterArray(array) {
//   "use strict";
//   let numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i]) === false) {
//       continue;
//     }
//     numbers.push(array[i]);
//   }

//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// [1]

// console.log(filterArray([0, -0, 100, "100"]));
// [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// [1]

// console.log(filterArray([{}, () => {}, 2]));
// [2]
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
//
//
// Задача 2 - 8
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива,
//     используя цикл for.Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.
// function reduceArray(array) {
//   "use strict";
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array.length === 0) {
//       return total;
//     }
//     total += array[i];
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

// console.log(reduceArray([1, 2, 2.5]));
// 5.5

// Задача 2 - 9
// Есть массив logins с логинами пользователей.Напиши скрипт
// добавления логина в массив logins.Добавляемый логин должен:

// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра
// login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов
// и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая
// true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'

// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.Это позволяет переиспользовать
// код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false.Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов
// других функций - isLoginUnique и isLoginValid.

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   let boolIsLoginValid = login.length >= min && login.length <= max;
//   return boolIsLoginValid;
// }

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   let boolIsLoginUnique = !allLogins.includes(login);
//   return boolIsLoginUnique;
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login, 4, 16) === false) {
//     return ERROR;
//   }

//   if (isLoginUnique(allLogins, login) === false) {
//     return REFUSAL;
//   }

//   allLogins.push(login);
//   return SUCCESS;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// console.log(logins);
// console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(isLoginValid("Ajwsdgfad"));

// console.log(isLoginUnique(logins, "Aj4x1sBozz"));
// console.log("111".length >= 4 && "111".length <= 16);
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
//
// ОБ'ЄКТИ
const playlist = {
  name: "My super list",
  rating: 5,
  track: ["track-1", "track - 2", "track - 3"],
  trackCount: 3,
};

console.log(playlist.rating);
