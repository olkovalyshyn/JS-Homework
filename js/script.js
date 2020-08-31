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
// MAP
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
const players = [
  { id: "player-1", name: "Mango", timePlayed: 180, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 458, points: 45, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 13, points: 25, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 89, points: 322, online: true },
  { id: "player-5", name: "Chelsy", timePlayed: 130, points: 3, online: false },
];
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
const playerToUpdate = "player-3";
const updatedPlayers = players.map((player) =>
  playerToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.points + 10000000000,
        name: "DARYNA",
      }
    : player
);
console.table(updatedPlayers);
