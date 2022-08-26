teacher2 = 'Max';
var teacher2;
console.log(teacher2);
//  Will log max, because will hoist the var

teacher = 'Kyle';
let teacher;
console.log(teacher);
//  Error called TDZ - Temporary dead Zone, because Let donsent hoist

//  Let vs Var
//  Var on compile time, the program will create a space on memory and define that the value undefined
//  Let on compile time, the program will create a space on memory but will not inicialize it
//  Uninitialized !== undefined
