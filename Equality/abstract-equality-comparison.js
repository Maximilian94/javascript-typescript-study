//  Rules
//  x == y
//  Actually compares the same type, but if they are different, it tries to convert(Coercion) before
//  Only compares primitive types, if they are not, will to it
//  If both are non primitives, return false

//  1 - If type(x) is the same as Type(y) then return the result of === Strict Equality Comparison (x === y)
//  2 - If x is null and y is undefined, return True and vice versa
//  3 - //
if (null == undefined) {
} //True

//  4 - If type(x) is Number and Type(y) is String, return the result of the comparison x === ToNumber(y)
//  So the code prefers to do numeric comparison
if (5 > '4') {
}
if (5 > Number('4')) {
}

//  8 - If type(x) is either String, Number or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y)
//  9 - Else, return false

//  Examples

const num1 = 42;
const num2 = [42];

//  if(num1 == num2){}
//  if(42 == toPrimitive()){}
//  if(42 == "42"){}
//  if(42 == toNumber("42")){}
//  if(42 == 42){}
//  true
