const VehicleModule = require ('./vehicle').Vehicle // "I used to solution code to find this out" 
class Car extends VehicleModule {

    constructor(make, model, year, color, mileage) {

        super(make, model, year, color, mileage);

        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}
loadPassenger(num); {
    if (this.passenger < this.maximumPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
  
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
    }

    
    start (); {
        if (this.fuel > 0) {
            return this.started == true;
            console.log("engine started !!!");

        } else {

            return this.started == false;
            console.log("engine cannot start !!!");
        }
    }
}
    
scheduleService(mileage); {
    if (this.mileage > 30000) {
        this.scheduleService == true; 
        return this.scheduleService;
    }
}
//this shows how to call from this module...new

let v = new VehicleModule.Vehicle ("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

myCar.loadPassenger(5)
myCar.start()
myCar.scheduleService()

console.log(myCar)