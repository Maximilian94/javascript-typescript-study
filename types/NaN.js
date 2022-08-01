//  Does not mean "Not a Number", actually means invalid number
//  Type of NaN is a Number, because is an Invalid Number
//  If you are making an API, an you intend to return a number as a result of the operation, and for some reason there is no value to respond, DON'T USE -1, use NaN

let myAge = Number('0o46'); // 38
const myNextAge = Number('39'); //  39
const myCatsAge = Number('n/a'); //  NaN  (I don't have a cat, but don't use 0, because 0 is a number an we can have problems on code)

myAge - "My son's age"; //  NaN
//  Minus operator needs two numbers, and if we have other value, javascript will try to convert to a number
//  If is not possible, the value considered is NaN
//  myAge - NaN (This is happening behind the scene)

myCatsAge === myCatsAge; //  false OOPS!
//  NaN is the only value that is not equal to itself

isNaN(myAge); //  false
isNaN(myCatsAge); //  true
isNaN("My son's age"); //  true  OOPS!
//  We still get true because is not isNaN is not checking if the value is NaN, but if is not a valid number
//  Behind the scene, javascript will try to convert string "My son's age" to a number, and as is not possible, will result in NaN (Invalid Number)
//  And then we have the response true

Number.isNaN(myCatsAge); //  true
//  Number.isNaN() is different than isNaN(), in this case, we are actually checking if the value is NaN (Invalid Number)

Number.isNaN("My son's age"); //  false
