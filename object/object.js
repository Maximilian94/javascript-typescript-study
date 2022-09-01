let a;
let b;

a = {
	asd: 'asd',
};

// b = a;
// b = JSON.parse(JSON.stringify(a))
// b = Object.assign(a);
b = Object.create(a);

a.asd = 'qqq';

console.log(b);
