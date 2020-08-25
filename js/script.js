// Задача 5 - 1
// function-constructor
// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

// Write code under this line
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };

// // console.log(typeof Account.prototype.getInfo);
// // 'function'

// // const mango = new Account("Mangozedog", "mango@dog.woof");
// // console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// // const poly = new Account("Poly", "poly@mail.com");
// // console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'
//
//
//
//
//
//
// Задача 5 - 2
// class
//     Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

// Write code under this line
// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// // console.log(typeof User);
// // 'function'

// const mango = new User("Mango", 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// // console.log(typeof mango.getInfo);
// // 'function'

// // const poly = new User( 'Poly', 3, 17);
// // console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'
//
//
//
//
//
//
//
// Задача 5 - 3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления
// складом товаров.При вызове будет получать один аргумент - начальный
// массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// Write code under this line
// class Storage {
//   constructor(goods) {
//     this.items = goods;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     for (let i = 0; i < goods.length; i += 1) {
//       if (item === this.items[i]) {
//         let newArrayGoods = this.items.splice(i, 1);
//         goods = newArrayGoods;
//       }
//     }
//   }
// }

// // console.log(typeof Storage);
// // 'function'

// let goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// const storage = new Storage(goods);

// // console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem("Дроид");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */
//
//
//
//
//
//
// Задача 5 - 4
// переиспользование методов класса
// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// Write code under this line

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     return (this._value += str);
//   }

//   prepend(str) {
//     return (this._value = str + this._value);
//   }

//   pad(str) {
//     return this.append(str) + this.prepend(str);
//   }
// }

// // console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder(".");

// console.log(builder);

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
//
//
//
//
//
//
//
//
// Задача 5 - 5
// класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//     /*
//      * Добавь `статический` метод
//      * `getSpecs(car)`, который принимает
//      * объект-машину как параметр
//      * и возвращает шаблонную строку
//      * со свойствами и значениями объекта.
//      * Свойства:
//      *   maxSpeed,
//      *   speed,
//      *   isOn,
//      *   distance,
//      *   price
//      * Пример строки, полученной этим методом:
//      * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
//      */

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость,
//      *          начальное значение `0`
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль.
//      *         Значения `true` или `false`,
//      *         начальное значение false
//      *  distance - пробег в километрах,
//      *             начальное значение `0`
//      */
//     constructor() { }

//     /*
//      * Добавь геттер и сеттер
//      * для свойства `price`, который будет
//      * работать с свойством цены автомобиля.
//      *
//      * ВАЖНО: для записи методов get и set
//      * значение параметра записывают с
//      * подчеркиванием. См. ниже пример 1.
//      */

//     /*
//      * Метод, который заводит автомобиль
//      * Записывает в свойство `isOn` значение `true`
//      */
//     turnOn() { }

//     /*
//      * Метод, чтобы заглушить автомобиль
//      * Этот метод должен записывать
//      * в свойство isOn значение false,
//      * и сбрасывать текущую скорость до 0
//      */
//     turnOff() { }

//     /*
//      * Этот метод должен добавлять
//      * к свойству `speed` полученное
//      * значение, при условии,
//      * что результирующая скорость
//      * не больше чем значение свойства `maxSpeed`
//      */
//     accelerate(value) { }

//     /*
//      * Этот метод должен отнимать
//      * от свойства `speed`
//      * полученное значение, при условии,
//      * что результирующая скорость не меньше 0
//      */

//     decelerate(value) { }

//     /*
//      * Этот метод должен добавлять к свойству
//      * `distance` пробег в километрах,
//      * т.е. hours * speed,
//      * но только в том случае,
//      * если машина заведена!
//      */
//     drive(hours) { }
// }

// #### Пример 1.

//     ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

class Car {
  // Write code under this line
  static getSpecs(objectCar) {
    return `maxSpeed: ${objectCar.maxSpeed}, speed: ${objectCar.speed}, isOn: ${objectCar.isOn}, distance: ${objectCar.distance}, price: ${objectCar._price}`;
  }
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 } = {}) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    return (this.isOn = false) && (this.speed = 0);
  }
  accelerate(value) {
    if (this.speed + value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += value;
    }
    // let newSpeed = this.speed + value;
    // if (newSpeed < this.maxSpeed) {
    //   this.speed = newSpeed;
    // } else {
    //   return this.maxSpeed;
    // }
  }
  decelerate(value) {
    if (this.speed - value < 0) {
      this.speed = 0;
    } else {
      this.speed -= value;
    }

    // let newSpeed = this.speed - value;
    // if (newSpeed > 0) {
    //   this.speed = newSpeed;
    // } else {
    //   return "Швидкість 0";
    // }
  }
  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += hours * this.speed;
    } else this.distance = 0;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(mustang.accelerate);
console.log(mustang.speed);

// console.log(mustang);

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// console.log(mustang.drive());

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000

// console.log(mustang.turnOff());
// console.log(mustang._isOn);
// console.log(mustang.turnOn());
// console.log(mustang._isOn);
