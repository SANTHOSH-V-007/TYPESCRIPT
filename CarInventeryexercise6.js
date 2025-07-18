var Car = /** @class */ (function () {
    function Car(carmodel, carprice, carbrand) {
        this.carmodel = carmodel;
        this.carprice = carprice;
        this.carbrand = carbrand;
        Car.cars.push(this);
    }
    Object.defineProperty(Car.prototype, "cmodel", {
        get: function () {
            return this.carmodel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "cprice", {
        get: function () {
            return this.carprice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "cbrand", {
        get: function () {
            return this.carbrand;
        },
        enumerable: false,
        configurable: true
    });
    Car.getCarCount = function () {
        return Car.cars.length;
    };
    Car.displayAllCars = function () {
        console.log("List of all cars:");
        this.cars.forEach(function (car, index) {
            console.log("".concat(index + 1, ". ").concat(car.cbrand, " ").concat(car.cmodel, " - ").concat(car.cprice));
        });
    };
    Car.cars = [];
    return Car;
}());
var car1 = new Car("Model S", 79990, "Tesla");
var car2 = new Car("Mustang", 35000, "Ford");
var car3 = new Car("Civic", 22000, "Honda");
var car4 = new Car("Hector", 100000, "MG");
var car5 = new Car("Thar", 220000, "Mahendra");
console.log("Total number of cars: ".concat(Car.getCarCount()));
Car.displayAllCars();
