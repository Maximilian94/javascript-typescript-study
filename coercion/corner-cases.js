console.log(Number('')); //  0 OOPS!
console.log(Number('   asd ')); // NaN
console.log(Number('   \t\n')); // 0 OOPS!
console.log(Number(null)); // OOPS !
console.log(Number(undefined)); // NaN
console.log(Number([])); // 0 OOPS
console.log(Number([1, 2, 3])); // NaN
console.log(Number([null])); //0 OOPS
console.log(Number([undefined])); // 0 OOPS
console.log(Number({})); //NaN

console.log(String(-0)); //0 OOPS
console.log(String(null)); // Null
console.log(String(undefined)); //  Undefined
console.log(String([null])); // ""  OOPS
console.log(String[undefined]); //  ""  OOPS

console.log(Boolean(new Boolean(false))); // True OOPS
