function carCreator(name, brand) {
	const newCar = Object.create(carSpeedFunctionStore);
	newCar.name = name;
	newCar.brand = brand;
	newCar.speed = 0;

	return newCar;
}

const carSpeedFunctionStore = {
	move: function () {
		//  In this case, move will update the speed correctly
		//	"This" will refer to car1

		// console.log('Starting move function');
		// console.log('This in case of move function', this);

		this.speed = 20;
	},

	stop: function () {
		function stopCar() {
			//  In this case, move will not update the speed
			//	Because "this" is referring to global scope

			// console.log('Starting stopCar function');
			// console.log('This in case of stopCar function', this);

			this.speed = 0;
		}
		stopCar();
	},

	noMove: function () {
		const noMoveCar = () => {
			//	In this case will stop the car
			//	When the function will be called, the noMoveCar will create a new execution context, and "this" will refer to user1

			// console.log('Starting noMove function');
			// console.log('This in case of noMove function', this);

			this.speed = 0;
		};
		noMoveCar();
	},

	speedUpInTen: () => {
		//	In this ase will not SpeedUp the car
		//	Because we are using the "This" on context on carSpeedFunctionStore, and will not refer to car1

		// console.log('Starting speedUpInTen function');
		// console.log('This in case of speedUpInTen function', this);

		this.speed = this.speed + 10;
	},
};

const car1 = carCreator('120I', 'BMW');

console.log(car1);
car1.move();
console.log(car1);
car1.stop();
console.log(car1);
car1.noMove();
console.log(car1);
car1.speedUpInTen();
console.log(car1);
