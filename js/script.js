// ОБ'ЄКТИ
// const playlist = {
//   name: "My super list",
//   rating: 5,
//   track: ["track-1", "track - 2", "track - 3"],
//   trackCount: 3,
//   getName(qwe) {
//     console.log("Ага, це функція getName :)", qwe);
//   },
// };

// // console.log(playlist.track);
// playlist.getName([1, 2, 5]);

// ПЕРЕБІР ОБ'ЄКТІВ

// const feedback = {
//   good: 5,
//   netural: 10,
//   bad: 3,
// };
// let total = 0;

// // const keys = Object.keys(feedback);
// // // console.log(keys);
// // // console.dir(keys);
// // for (const key of keys) {
// //   console.log(key);
// //   console.log(feedback[key]);
// // }

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
//   total += value;
// }
// console.log(total);
//
//
//
//
//
// МАСИВ ОБЄКТІВ
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
//   friend.newprop = 555;
//   console.table(friends);

//   // console.log(friend);
// }
// console.table(friends);
//
//
//
//ПОШУК ІМЕН
// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     // console.log(friend.name);
//     if (friend.name === name) {
//       return "Найдено таке імя";
//     }
//   }
//   return "Відсутнє name в даному переліку";
// };

// console.log(findFriendByName(friends, "123"));
//
//
//
// Створення масиву із імен
// const getAllNames = function (friends) {
//   const names = [];

//   for (const friend of friends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));
//
//
//
//
// ОТРИМАТИ ІМЕНА ДРУЗІВ, ЯКІ ОНЛАЙН
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.online);
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));
//
//
//
//
// ОТРИМАТИ ІМЕНА ДРУЗІВ, ЯКІ і ОНЛАЙН і офлайн в різні масиви
// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendByStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendByStatus.online.push(friend);
//     } else {
//       friendByStatus.offline.push(friend);
//     }
//   }
//   return friendByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));
//
//
//
//
//
//
// РОЗПИЛЕННЯ
// const temps = [15, 45, 89, 65, 32, 85, 78];
// console.log(temps);
// console.log(...temps);
// console.log([1000, ...temps, 10000]);

// const a = [15, 45, 89, 65, 32, 85, 78];
// const b = a;
// console.log(a === b); //true

// const a = [15, 45, 89, 65, 32, 85, 78];
// const b = [a];
// console.log(a === b); //false
// a[0] = 900; // і на а і на в
// console.log("a:", a);
// console.log("a:", b);

// const a = [15, 45, 89, 65, 32, 85, 78];
// const b = [...a];
// console.log(a === b); //false
// a[0] = 1000; //лише на а
// console.log("a:", a);
// console.log("a:", b);

// const a = [{ x: 15 }, { y: 45 }];
// const b = [...a];
// console.log(a === b); //false
// a[0].x = 1000; // і на а і на в
// console.log("a:", a);
// console.log("a:", b);

// const a = { x: 2, f: 7 };
// const b = { x: 8, j: 7 };
// const c = { ...a, ...b };
// console.log(c);
//
//
//
//
//
//
//
// Задача 3 - 1
// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')

// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// //Write code under this line
// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

// console.log("message: ", message);

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }
// // Write code under this line

// console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
//
//
//
//
//
//
// Задача 3 - 2
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться

// const countProps = function (obj) {
//   "use strict";
//   // Write code under this line
//   const key = Object.keys(obj);
//   let count = key.length;
//   return count;
// };

//console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
//
//
//
//
//
//
//
// Задача 3 - 3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект
// сотрудников и возвращает имя самого продуктивного(который выполнил больше
//   всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства
// объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line

//   let maxValue = 0;
//   let bestEmployee = "";

//   let entries = Object.entries(employees);
//   for (const [name, value] of entries) {
//     if ([value] > maxValue) {
//       maxValue = value;
//       bestEmployee = name;
//     }
//   }
//   return bestEmployee;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// // console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// // console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// 'lux'
//
//
//
//
//
//
//
//
// Задача 3 - 4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.Каждое
// поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   let total = 0;

//   const values = Object.values(employees);
//   console.log(values);
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// // console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// 500
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
// Задача 3 - 5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   let arrayOfProperty = [];

//   for (const arr of array) {
//     if (prop === "name") {
//       arrayOfProperty.push(arr.name);
//     } else if (prop === "quantity") {
//       arrayOfProperty.push(arr.quantity);
//     } else if (prop === "category") {
//       arrayOfProperty;
//     }
//   }
//   return arrayOfProperty;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// ["Радар", "Радар", "Радар", "Сканер", "Сканер", "Дроид", "Захват"];

// console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
//  []
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
// Задача 3 - 6
// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая
// получает массив объектов и имя продукта(значение свойства name).Возвращает
// общую стоимость продукта(цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800
function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line

  let total = 0;

  for (const arr of array) {
    if (arr.name === prop) {
      total += arr.price * arr.quantity;
    }
  }
  return total;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

// console.log(calculateTotalPrice(products, "Радар"));
// 9080

//console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

// console.log(calculateTotalPrice(products, "Захват"));
// 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// 2800
