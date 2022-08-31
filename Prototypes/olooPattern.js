const Movements = {
	accelerate(speed) {
		this.speed = speed;
	},
	stop() {
		this.speed = 0;
	},
};

const CarGenerator = Object.assign(Object.create(Movements), {
	setCarName(name) {
		this.carName = name;
	},
});

const Mercedes = Object.create(CarGenerator);
Mercedes.setCarName('Max');
Mercedes.accelerate(50);
console.log(Mercedes);

//  Using object create, we can link the prototypes easily
