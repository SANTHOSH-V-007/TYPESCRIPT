class Car{
    static cars:Car[] = [];
 
    constructor(private carmodel:string,private carprice:number,private carbrand:string){
        Car.cars.push(this);
    }
 
    get cmodel(){
        return this.carmodel;
    }
 
    get cprice(){
        return this.carprice;
    }
 
    get cbrand(){
        return this.carbrand;
    }
 
    static getCarCount(): number {
        return Car.cars.length;
    }
    static displayAllCars(){
        console.log("List of all cars:");
        this.cars.forEach((car, index) => {
            console.log(`${index + 1}. ${car.cbrand} ${car.cmodel} - ${car.cprice}`);
        });
    }
}
 
let car1 = new Car("Model S", 79990, "Tesla");
let car2 = new Car("Mustang", 35000, "Ford");
let car3 = new Car("Civic", 22000, "Honda");
let car4 = new Car("Hector", 100000, "MG");
let car5 = new Car("Thar", 220000, "Mahendra");
 
console.log(`Total number of cars: ${Car.getCarCount()}`);
Car.displayAllCars();