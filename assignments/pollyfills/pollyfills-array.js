// Pollyfills of array 

// ++++ map pollyfill +++++++

// raw map 

let arr = [10, 20, 30]
let newArray = []

for (let i = 0; i < arr.length; i++) {
    newArray.push(dubole(arr[i], function (num) {
        num *= 2
    }))
}

function dubole(num, func) {
    return func(num)
}

// my map pollyfill
Array.prototype.myMap = function (cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i]))
    }
    return result
}
let doubleNum = arr.myMap(function (num) {
    return num * 2
})
console.log(doubleNum)

// +++++ Filter pollyfill +++++
// raw filter
let myResult = [];

for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], function (num) { return num % 2 === 0 }) === true) {
        myResult.push(arr[i])
    }
}

function filter(num, func) {
    return func(num)
}

// my filter pollyfilll

Array.prototype.myFilter = function (cb) {
    let myResult = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) === true) {
            myResult.push(this[i])
        }
    }
    return myResult
}
let mixNums = [1, 2, 3, 4, 5]
let filtery = mixNums.myFilter((item) => item % 2 === 0)
console.log(filtery);
