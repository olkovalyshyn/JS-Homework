// КЛАСИ

// class Car {
//   static description = "Клас, який описує машину";

//   constructor({ model, prise } = {}) {
//     console.log("Виконується constructor");
//     this.model = model;
//     this.prise = prise;
//   }
//   changePrice(newPrise) {
//     this.prise = newPrise;
//   }

//   changeModel(newModel) {
//     this.model = newModel;
//   }
// }

// console.log(Car.description);

// console.dir(Car);

// const carInstance = new Car({ model: "BMW", prise: "x5" });

// console.log(carInstance);

// console.log(Object.getPrototypeOf(carInstance));
// console.log(Object.getPrototypeOf(carInstance) === Car.prototype);
//
//
//
//
//
// ГЕТЕРИ І СЕТЕРИ
class Car {
  constructor(model) {
    this._model = model;
  }

  //   setModel(newModel) {
  //     this.model = newModel;
  //   }
  set model(newModel) {
    this._model = newModel;
  }

  //   getModel() {
  //     return this.model;
  //   }
  get model() {
    return this._model;
  }
}
const myCar = new Car("Opel");
console.log(myCar);

// myCar.setModel("BMW");
myCar.model = "Jaguar";
console.log(myCar);

// console.log(myCar.getModel());
console.log(myCar.model);
