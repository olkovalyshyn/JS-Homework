// МАСИВИ перебирання
//
//
//
// forEach
//
//
// const numbers = [5, 25, 100, 190, 550];

// numbers.forEach(
//   function (number) {
//     console.log("number -", number);
//     console.log(this);
//   },
//   { a: 123, b: 987 }
// );
//
//
//
//
//
//
// MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP
//
// const numbers = [5, 25, 100, 190, 550];
// const doubledNums = numbers.map((number) => {
//   console.log(number);
//   return number * 3;
// });
// console.log(doubledNums);
//
//
//
//
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const playerNames = players.map((player) => player.name);
// console.log(playerNames);

// const playerId = players.map((player) => player.id);
// console.log("playerId ", playerId);
//
//
// якщо треба із масиву кілька вигрузити значень
// const res = players.map((player) => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });
//
//
//
// скорочений запис верхнього коду
// const res2 = players.map(({ name, online }) => ({ name, online }));
// console.log("Збірка вигрузок ", res2);
//
//
//
//
//
// зміна значення властивості
// const updatedPlayers = players.map((player) => {
//   return { ...player, points: player.points * 10 };
// });
// console.table(updatedPlayers);

// скорочений запис верхнього коду
// const updatedPlayers = players.map((player) => ({ ...player, points: player.points / 10 }));
// console.table(updatedPlayers);
//
//
//
//
//
// ЗАМІНА ОДНІЄЇ ВЛАСТИВОСТІ У МАСИВІ ІЗ МАСИВІВ
// const playerToUpdate = "player-3";
// const updatedPlayers = players.map((player) => {
//   if (playerToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.points + 100000,
//       name: "Sasha",
//     };
//   }
//   return player;
// });
// console.table(updatedPlayers);

//
//
// скорочений запис верхнього кода ЧЕРЕЗ ТЕРНАРНИК
// const playerToUpdate = "player-3";
// const updatedPlayers = players.map((player) => {
//   return playerToUpdate === player.id
//     ? {
//         ...player,
//         timePlayed: player.points + 10000000000,
//         name: "DARYNA",
//       }
//     : player;
// });
// console.table(updatedPlayers);

// скорочений запис верхнього кода ЧЕРЕЗ ТЕРНАРНИК
// const playerToUpdate = "player-3";
// const updatedPlayers = players.map((player) =>
//   playerToUpdate === player.id
//     ? {
//         ...player,
//         timePlayed: player.points + 10000000000,
//         name: "DARYNA",
//       }
//     : player
// );
// console.table(updatedPlayers);
//
//
//
//
//ПРИКЛАД КОЛИ ОБ'ЄКТИ САМІ НЕ РІВНІ (false), а їх компоненти true
// const obj = {
//   a: 5,
//   b: {
//     c: 7,
//     d: 10,
//   },
// };

// const copy = { ...obj };

// console.log(copy);

// console.log(obj.a === copy.a);
// console.log(obj.b === copy.b);
// console.log(obj === copy);
//
//
//
//
//
//
//
//
// FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER FILTER

// const numbers = [5, 15, 7, 30, 45];

// const filteredNumbers = numbers.filter((number) => {
//   console.log(number);
//   return number > 25;
// });
// console.log(filteredNumbers);

// простіший запис через стірлку
// const numbers = [5, 15, 7, 30, 45];

// const filteredNumbers = numbers.filter((number) => number > 25);
// console.log(filteredNumbers);
//
//
//
//
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const playersOnline = players.filter((player) => player.online);
// console.table(playersOnline);
//
//
//
// const playersTime = players.filter((player) => player.timePlayed > 150);
// console.table(playersTime);
//
//
//
//
//
//
//
//
// FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND FIND
// const numbers = [5, 15, 7, 30, 45];
// const unucumNumber = numbers.find((number) => number === 15);
// console.log(unucumNumber);
//
//
//
//
//
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const findPlayer = players.find((player) => player.id === "player-3");
// console.log(findPlayer);

// те саме із деструктуризацією
// const findPlayer = players.find(({ id }) => id === "player-3");
// console.log(findPlayer);
//
//
//
//
//
//
//
//
// EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY EVERY
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const isOnline = players.every((player) => player.online);
// console.log(isOnline);
//
//
//
//
// SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME SOME
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const isSomeOnline = players.some((player) => player.online);
// console.log(isSomeOnline);
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
// reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce reduce
//
// const numbers = [5, 15, 7, 30, 45];
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);
//
//
//
// const salary = {
//   vova: 150,
//   petro: 100,
//   vala: 7,
// };
// const summSalary = Object.values(salary).reduce((acc, sallar) => acc + sallar, 0);
// console.log(summSalary);
//
//
//
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const totalPoints = players.reduce((total, player) => total + player.points, 0);
// console.log(totalPoints);
//
//
//
//
// const cart = [
//   { name: "Mango", price: 10, quantity: 1 },
//   { name: "Poly", price: 10, quantity: 1 },
//   { name: "Kiwi", price: 10, quantity: 1 },
//   { name: "Ajax", price: 10, quantity: 1 },
//   { name: "Chelsy", price: 10, quantity: 1 },
// ];
// const summCart = cart.reduce((total, value) => total + value.price * value.quantity, 0);
// console.log(summCart);

// попереднє із деструктуризацією
// const summCart = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
// console.log(summCart);
//
//
//
//
//
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(...tweet.tags);
//   return tags;
// }, []);
// console.log(allTags);

// попереднє із скороченням
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// підкрахунок кількості однакових тегів
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }

//   acc[tag] = 1;
//   return acc;
// }, {});
// console.log(tagsStats);

// пререробка для лінтерів - переписуємо імутабельно, тобто
// на кожній ітерації створюємо новий об'єкт акумулятора
// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});
// console.log(tagsStats);

// спрощення верхнього до тернарника
// const tagsStats = allTags.reduce((acc, tag) => {
//   return acc[tag] ? { ...acc, [tag]: acc[tag] + 1 } : { ...acc, [tag]: 1 };
// }, {});
// console.log(tagsStats);

// ще простіший тернарник
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);

// ще простіший тернарник без return
// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {}
// );
// console.log(tagsStats);
//
//
//
//
// const user = {
//   name: "Mango",
// };
// const key = "name";
// console.log(user[key]);
//
//
//
//
//
//
//
//
// SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT SORT
// const numbers = [5, 8, 1, 1, 4, 45, 6, 1, 458, 7];
// numbers.sort();
// console.log(numbers);

// сортування по зростанню
// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });
// console.log(numbers);

// сортування по спаданню
// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log(numbers);

// створення нового масиву для сортування
// const copy = [...numbers].sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });
// console.log(copy);
//
//
//
//
// СОРТУВАННЯ МАСИВІВ СОРТУВАННЯ МАСИВІВ СОРТУВАННЯ МАСИВІВ СОРТУВАННЯ МАСИВІВ СОРТУВАННЯ МАСИВІВ
//
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const copy = [...players];
// console.log(copy);

// copy.sort((first, second) => first.timePlayed - second.timePlayed);
// console.log(copy);

//
// СОРТУВАННЯ ІМЕН ПО ПЕРШІЙ БУКВІ
// const copy = [...players].sort((a, b) => {
//   const result = a.name[0] < b.name[0];
//   if (result) {
//     return -1;
//   }
//   if (!result) {
//     return 1;
//   }
// });
// console.table(copy);

// console.log("1".charCodeAt());
//
//
//
//
//
//
//
//
// FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT FLAT

// const array = [9, 4, [12, [5, 87], 11]];
// console.log(array.flat(2));

// спрощення раніше зазначених задач
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.map((t) => t.tags).flat();
// console.log(tags);

// FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap FlatMap
// спрощення попередного коду
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);
//
//
//
//
//
//
//
//
// ЦЕПОЧКИ ВИЗОВОВ  ЦЕПОЧКИ ВИЗОВОВ  ЦЕПОЧКИ ВИЗОВОВ   ЦЕПОЧКИ ВИЗОВОВ  ЦЕПОЧКИ ВИЗОВОВ  ЦЕПОЧКИ ВИЗОВОВ  ЦЕПОЧКИ ВИЗОВОВ
// задача відсортувати гравців онлайн і сортування за зростанням
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
//   { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
// ];
// const onlineAndSorted = players.filter((player) => player.online).sort((a, b) => a.points - b.points);

// console.table(onlineAndSorted);
//
//
//
//
//
//
//
// Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash Lodash
// https://www.jsdelivr.com/package/npm/lodash
// посилання на бібліотеку в НТМЛ
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script>;

// console.dir(_);
