//To String on Array

console.log([].toString()); // ""
console.log([1, 2, 3].toString()); //  "1,2,3"
console.log([null, undefined].toString()); //  ",""
console.log([[], [], []].toString()); //    ",,"

//To string on Object

console.log({}.toString());
console.log({ a: 2 }.toString());

const overWrited = {
  toString() {
    return "Test";
  },
};
console.log(overWrited.toString());
