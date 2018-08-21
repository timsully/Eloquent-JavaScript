console.log(typeof 4.5)
// → number


console.log(typeof "x")
// → string


// The minus operator can be used both as a binary operator and as a unary operator
console.log(- (10 - 2))
// → -8


console.log(3 > 2)
// → true
console.log(3 < 2)
// → false


// When comparing strings, JavaScript goes over the characters from left to right
// comparing the Unicode codes one by one
console.log("Aardvark" < "Zoroaster")
// → true


console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false


// The ONLY value in JavaScript that is not equal to itself, NaN (Not a number)
console.log(NaN == NaN)
// → false


console.log(true && false)
// → false
console.log(true && true)
// → true


console.log(false || true)
// → true
console.log(false || false)
// → false


// Ternary operator, operating on three values, written with a question mark
// and a colon. Also known as a conditional operator
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2


console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


console.log(null == undefined);
// → true
console.log(null == 0);
// → false


console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
