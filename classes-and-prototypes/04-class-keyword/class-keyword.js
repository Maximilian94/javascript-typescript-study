//  Using class, we are doing the same thing like the files before, but in a simple way

class Car {
	constructor(name) {
		this.name = name;
		this.speed = 0;
	}

	//  Will have access by the prototype
	speedUpBy10() {
		this.speed = this.speed + 10;
	}
}

const car1 = new Car('BMW 320I');
const car2 = new Car('Ford Ka');

console.log(car1);
console.log(car2);
car1.speedUpBy10();
console.log(car1);
console.log(car2);
