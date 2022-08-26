var teacher = 'Kyle';
otherTeacher();

function otherTeacher() {
	console.log(teacher);
	var teacher = 'Suzy';
	//  WIll log undefined, because the is a teacher "label" in the function scope, that is not declared before line 5
}
