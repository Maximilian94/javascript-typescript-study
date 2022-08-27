for (var i = 1; i <= 3; i++) {
	setTimeout(function () {
		console.log(`I: ${i}`);
	}, 1000);
}

//  Will print 4 4 4, because there is only one I, and the closure dont sabe the data
//  but the variable access

for (var i = 1; i <= 3; i++) {
	let j = i;
	setTimeout(function () {
		console.log(`I: ${j}`);
	}, 1000);
}

//  In this case, will print 1 2 3, because there is tree separate J, because he is declared inside the lexical scope
//

for (let i = 1; i <= 3; i++) {
	setTimeout(function () {
		console.log(`I: ${i}`);
	}, 1000);
}

//  After ES6, if we use let inside for, we are declaring I inside the loop, generating 4 diferentes "i's"
