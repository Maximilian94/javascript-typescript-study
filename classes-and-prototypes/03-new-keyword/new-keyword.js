//  In this way, we are duplicating the function plusOne

function multiplyBy2(num) {
	return {
		value: num * 2,
		plusOne: function () {
			this.value = this.value + 1;
		},
	};
}

const teste1 = multiplyBy2(2);
const teste2 = multiplyBy2(4);

console.log(teste1, teste2);

//  We can do like that

function multiplyBy3(num) {
	//  Like any function, we have an object, in this case an empty one but with a property called prototype
	//  Prototype is an empty object
	this.value = num * 3;
	//  We don't need to return the object, because we will call this function using new, which return
	// the this automatically
}

multiplyBy3.prototype.plusOne = function () {
	//  We are now accessing the Prototype object and creating a new property, that is actually a method
	this.value = this.value + 1;
};

//  New will return the "this" of the function
const teste3 = new multiplyBy3(6);
//  It will call the multiplyBy3(6), that means will create an execution context
//  It will create a new empty "this", but, with a __proto__ that links with the prototype of the multiplyBy3
//  That means we can use the function plusOne on object teste3
console.log(teste3);
teste3.plusOne();
console.log(teste3);
