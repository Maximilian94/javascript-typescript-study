let x = 'x from global scope';

function level1() {
	let x = 'x form level 1 function';
	function level2() {
		return x;
	}
	//  We are not saving the value, but the variable access, is the live link
	x =
		'x form level 1 changed - That means the the value saved is not a snapshot';
	return level2;
}

const value = level1();
console.log(value());
