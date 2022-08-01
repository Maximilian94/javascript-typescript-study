const userCreator = (name, score) => {
	return {
		name,
		score,
		increment: function () {
			this.score++;
		},
	};
};

const user1 = userCreator('Max', 1);
const user2 = userCreator('Ellen', 2);

user1.increment();
user2.increment();

console.log(user1.hasOwnProperty('name'));
console.log(user1.hasOwnProperty('increment'));
