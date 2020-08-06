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
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];
console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
//   friend.newprop = 555;
//   console.table(friends);

//   // console.log(friend);
// }
// console.table(friends);

const findFriendByName = function (allFriends, name) {};
