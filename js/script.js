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

const a = { x: 2, f: 7 };
const b = { x: 8, j: 7 };
const c = { ...a, ...b };
console.log(c);
