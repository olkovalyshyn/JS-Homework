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
  { id: "player-1", name: Mango, timePlayed: 180, points: 54, online: false },
  { id: "player-1", name: Poly, timePlayed: 458, points: 45, online: true },
  { id: "player-1", name: Kiwi, timePlayed: 13, points: 25, online: true },
  { id: "player-1", name: Ajax, timePlayed: 89, points: 322, online: true },
  { id: "player-1", name: Chelsy, timePlayed: 130, points: 3, online: false },
];
const playerNames = players.map((player) => {
  console.log(player);
  return player.name;
});
console.log(playerNames);
