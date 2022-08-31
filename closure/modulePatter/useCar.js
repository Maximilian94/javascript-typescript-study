import { car } from "./modulePatern.js";

car.showSpeed();
car.acelerate();
car.showSpeed();
car.acelerate();
car.showSpeed();
car.slowDown();
car.showSpeed();

//  We canot acess speed variable, bacause speed is on car scope
//  But not in car returned object
console.log(car);
