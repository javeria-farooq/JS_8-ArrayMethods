//   //      // forEach method as a loop:

/* let arr = [1, 2, 3, 4, 5]

arr.forEach((idx) => {
    console.log(idx)
}) */

/* let arr = [1, 2, 3, 4, 5]

arr.forEach(function myFunction(idx) {
    console.log(idx)
}) */

/* let arr = [1, 2, 3, 4, 5]

const myFunction = (idx) => {
    console.log(idx)
}

arr.forEach(myFunction) */

/* let arr = [1, 2, 3, 4, 5]

function myFunction(idx) {
    console.log(idx)
}

arr.forEach(myFunction) */


/*// now start: */
/* let arr = [1, 2, 3, 4, 5]

arr.forEach((idx) => {
    console.log(`the value of the array at each index: ${idx}.`)
})

let cities = ["karachi", "islamabad", "peshawar", "quetta", "gilgit"]

cities.forEach((city) => {
    console.log(`here the list of cities in our country: ${city.toUpperCase()}.`)
}) */

/* let foodItems = ["biryani", "dahi barre", "fruit chat", "ice-cream"]

foodItems.forEach((val, idx, foodItems) => {
    console.log(val, idx, foodItems)
}) */

/*///practice questions: */

//        /qno: 1
/* let num1 = 1 //+prompt("enter 1st number")
let num2 = 2 //+prompt("enter 2nd number")
let num3 = 3 //+prompt("enter 3rd number")
let num4 = 4 //+prompt("enter 4th number")
let num5 = 5 //+prompt("enter 5th number")

let nums = [num1, num2, num3, num4, num5]

let exponentiation = 2 //+prompt("enter exponent for your numbers") */

/*function calSquare(val) {
    console.log(`your selected numbers are: ${nums}. and the square of each value is: ${val**exponentiation}`)
}*/

/* const calSquare = (val) => {
    console.log(`your selected numbers are: ${nums}. and the square of each value is: ${val**exponentiation}`)
}

nums.forEach(calSquare) */

/*// map: */

/* let arr = [1, 2, 3, 4, 5]

arr.map((val) => {
    console.log(val)
}) */

/* t ye t hgya hmara map ko use krke saari values ko print krna lkn iske ilawa map ko use krke
hm apna naya array bh bna skte hn t ab swl ye aata h k wo kia hm forEach se nh krskte t iska jwb
yhi h k nh ye kaam forEach se nh hskta*/

/*forEach apni value ko return nh krta jbke map krdta h*/

/* let arr = [1, 2, 3, 4, 5]

let newArray = arr.map((val) => {
    return val * val
})

console.log("these are the values of new array:", newArray)
console.log("these are the values of old array:", arr)

let arr2 = [4, 5, 6, 7, 8]
let newArray2 = arr2.forEach((val) => {
    return val
})
console.log(newArray2)
console.log("these are the values of array without forEach", arr2) */

// by using forEach loop: this method can't do this bcz this is not return the value in it

/* let arr = [1, 2, 3, 4, 5]

let newArray = arr.forEach((val) => {
    return val
})

console.log(newArray) */

/*//filter */

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenArr = arr.filter((val) => {
    return val % 2 === 0
})

console.log(evenArr) */

/*//yhi kaam hm map r forEach se krnge t nh hga qk wo true ya false m ans dnge wo btaenge nh k
knse nmbr even hn ya nh:*/

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = arr.map((val) => {
    return val % 2 === 0
})

console.log(newArray)*/

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.forEach((val) => {
    console.log(val % 2 === 0)
}) */

/*///reduce: */

/*reduce method bh hmari array k lye ek method hta h jo kia kaam krta h jo ksi array ko reduce
krne ka kaam krta h ab reduce ka kaam krne ka mtlb ye h k for E.g hmari array m bht saare nmbrs
hn r hmn inpe sum perform krwna h ya avg perform krwna h to zhir h array m itne saare nmbrs th
lkn ans reduce ho ke sbko sum krke ek ans nkl k aaya t is trhn k kaamon k lye reduce method use
hta h*/

/*let arr = [1, 2, 3, 4, 5]
let reduceMethod = arr.reduce((pre, curr) => {
    return pre + curr
})

console.log(reduceMethod)*/
/*yhn hm reduce k undr hi console krwa rh hn jo nh hga:*/

/* let arr2 = [1, 2, 3, 4]
arr2.reduce((pre, curr) => {
    console.log(pre + curr)
}) */

// console.log(reduceMethod2)

/*now we extract largest number from an array */

/* let arr = [4, 7, 101, 6, 9, 8]
let res = arr.reduce((prev, curr) => {
    return prev > curr? prev : curr
})
console.log(`the array is: ${arr}. and the largest number from an array is: ${res}.`) */

/*/////   practice questions: */
/*qno: 1 */

/* let stuMarks = [50, 90, 84, 95, 91, 43, 68]
let toppers = stuMarks.filter((marks) => {
    return marks >= 90
})

console.log(`the marks of total students are: ${stuMarks} and the highest marks of students from an array is: ${toppers}`) */

/*qno: 2 part (i) */

/* let n = prompt("enter a number : ");

let arr = [];

for(let i = 1; i<=n; i++) {
    arr[i-1] = i
}

console.log(arr)

let arrSum = arr.reduce((prev, curr) => {
    return prev + curr
})

console.log(arrSum) */

/*qno: 2 part (ii) */ // now we find factorial of user wants number:

/* let n = prompt("enter a number")

let arr = [];
for(let i = 1; i <= n; i++) {
    arr[i-1] = i
}

let sumOfArr = arr.reduce((prev, curr) => {
    return prev * curr
})

console.log(sumOfArr) */