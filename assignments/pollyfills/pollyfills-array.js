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


// ++++ reduce pollyfill +++++
// raw reduce 

function reducy(prev, curr) {
    return prev += curr
}
let acc = 0;
for (let i = 0; i < mixNums.length; i++) {
    acc = reducy(acc, mixNums[i]);
}

// my reduce pollyfill 
Array.prototype.myReduce = function (cb, init) {
    let acc = init;

    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc
}

let sum = mixNums.myReduce(function (prev, curr) {
    return prev += curr
}, 0)

console.log(sum)

// flat poyllyfill
// flat raw way

let f = [1, 2, 3, [4, 5, [6, 7]]]
function myFlaty(arr, depth) {
    let flatyResult = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            let flated = myFlaty(arr[i], depth - 1)
            flatyResult.push(...flated)
        } else flatyResult.push(arr[i])
    }
    return flatyResult
}

console.log(myFlaty(f, 2));

// my Flat pollyfill
Array.prototype.myFlat = function (depth) {
    function myFlaty(arr, depth) {
        let flatyResult = [];

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth > 0) {
                let flated = myFlaty(arr[i], depth - 1)
                flatyResult.push(...flated)
            } else flatyResult.push(arr[i])
        }
        return flatyResult
    }
    return myFlaty(this, depth)
}

// for eact pollyfill
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}

let e = arr.myForEach((item) => console.log(item));