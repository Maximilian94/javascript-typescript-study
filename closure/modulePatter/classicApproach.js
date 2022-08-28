const car = (function () {
  let speed = 0;

  return {
    acelerate: () => (speed = speed + 10),
    slowDown: () => (speed = speed - 10),
    showSpeed: () => console.log(speed),
  };
})();

car.showSpeed();
car.acelerate();
car.showSpeed();
car.acelerate();
car.showSpeed();
car.slowDown();
car.showSpeed();

//  We canot acess speed variable, bacause speed is on car scope
//  But not in car returned object
console.log(car.speed);
