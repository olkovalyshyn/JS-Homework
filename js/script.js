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
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const allTags = tweets.reduce((tags, tweet) => {
  tags.push(...tweet.tags);
  return tags;
}, []);
console.log(allTags);
