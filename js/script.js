// ПРОТОТИПНЕ НАСЛІДУВАННЯ

// const objC = {
//   z: 5,
// };
// console.log("objC ", objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log("objB ", objB);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log("objA ", objA);
//
//
//
//
//
//
//
// ФУНКЦІЇ КОНСТРУКТОРА

// const Car = function (brand, model, prise) {
//   this.brand = brand;
//   this.model = model;
//   this.prise = prise;
// };

// const myCar = new Car("Mersedes", "BENZ", 5000);

// console.log("myCar", myCar);
// console.log(this);
//
//
//
//
//
// brand, model, prise
// із об'єктом настройок (у функції замість brand, model, prise передали config)
// const Car = function (config = {}) {
//   this.brand = config.brand;
//   this.model = config.model;
//   this.prise = config.prise;
//   console.log(config);
// };

// const myCar1 = new Car({ brand: "Mersedes", model: "BENZ", prise: 5000 });

// const myCar2 = new Car({ brand: "BMW", model: "X5", prise: 40000 });

// const myCar3 = new Car();

// console.log("myCar", myCar);
//
//
//
//
//
//
//
//
//
// ДЕСТРУКТКРИЗАЦІЯ Ф-ЦІЇ (за вищеописаною задачею)
// const Car = function (config = {}) {
//   const { brand, model, prise } = config;

//   this.brand = brand;
//   this.model = model;
//   this.prise = prise;
//   console.log(config);
// };

// const myCar1 = new Car({ brand: "Mersedes", model: "BENZ", prise: 5000 });

// const myCar2 = new Car({ brand: "BMW", model: "X5", prise: 40000 });

// const myCar3 = new Car();
//
//
//
//
//
//
// ДЕСТРУКТКРИЗАЦІЯ (вдосконалення вищеописаної) Ф-ЦІЇ (за вищеописаною задачею)
// const Car = function ({ brand, model, prise } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.prise = prise;

//   // this.changePrise = function (newPrise) {
//   //   this.prise = newPrise;
//   // };
// };
// console.log(Car.prototype);

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this: ", this);
//   console.log("Hellow )))");
// };

// Car.prototype.changeBrand = function (newBrand) {
//   this.brand = newBrand;
// };

// Car.prototype.changePRISE = function (newPrise) {
//   this.prise = newPrise;
// };

// const myCar1 = new Car({ brand: "Mersedes", model: "BENZ", prise: 5000 });
// myCar1.sayHi();
// console.log(myCar1);

// myCar1.changeBrand("VAZ");
// console.log(myCar1);

// const myCar2 = new Car({ brand: "BMW", model: "X5", prise: 40000 });
// console.log(myCar2);

// myCar2.changeBrand("LADA");
// myCar2.changePRISE(1000000000000);
// console.log("myCar2 = ", myCar2);

// // const myCar3 = new Car();
// // console.log(myCar3);
//
//
//
//
//
//
//
//
// const Some = function (value) {
//   this.x = value;
// };

// const objA = new Some();

// objA.x = 555;
// console.log(objA);

// // console.log(objA.__proto__ === Object.prototype);
// // console.log(objA);

// Some.prototype.sometingChange = function (change) {
//   this.x = change;
// };
// objA.sometingChange(98765);

// console.log(objA);
