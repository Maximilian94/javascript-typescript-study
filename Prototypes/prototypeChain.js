function GenerateUser(user) {
	this.user = user;
}

const GenerateAnotherUser = (user) => {
	this.user = user;
};

GenerateUser.prototype.printUser = function (message) {
	console.log(this.user, message);
};

const max = new GenerateUser('Max');
const ellen = new GenerateUser('Ellen');
const isabella = GenerateUser('Isabella');
// const leko = new GenerateAnotherUser('Leko');
//  TypeError: GenerateAnotherUser is not a constructor
//  Because arrow function does not have this, constructor and prototype

max.printUser("I'm 28");
ellen.printUser("I'm 34");
// isabella.printUser("I'm 8");
//  Will cause error, because we are not using "new"

console.log(max);
//  As we can see, there is no ask method on max object, and how can we access ask method ?
//  By the prototype chain, the ask method is on GenerateUser prototype, and as we are using the "new" key word
//  we are actually creating a new object and linkin / binding the object to that prototype,
