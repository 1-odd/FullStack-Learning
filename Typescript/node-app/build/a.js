"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        console.log("You are not a legal user!");
        return false;
    }
}
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(msg) {
        console.log(`${this.name}: ${msg}`);
    }
}
function isLega(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        console.log("You are not a legal user!");
        return false;
    }
}
function PrintId(id) {
    console.log(id);
}
const p = {
    name: 'John',
    id: 54321,
    breed: 'Labrador'
};
const arr = [1, 2, 3, 4, 5, 5];
function max(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max)
            max = arr[i];
    }
    return max;
}
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
var day;
(function (day) {
    day[day["monday"] = 200] = "monday";
    day["tuesday"] = "tue";
})(day || (day = {}));
function doGym(d) {
    if (d == day.monday) {
        console.log("Go to Gym and do exercise for chest");
    }
    else if (d == day.tuesday) {
        console.log("Go to Gym and do exercise for arms and sholder");
    }
}
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
function firstEle(arr) {
    return arr[0];
}
function firstEle1(arr) {
    return arr[0];
}
const val1 = firstEle1(["hello", "world"]);
console.log(val1.toUpperCase());
const val2 = firstEle1(["hello", "world"]);
const val3 = firstEle1([1, 2, 3, 4, 5, 6]);
