// interface

interface User{
    name?:string;   // add question mark for make any field optional
    age:number;
    greet(msg: string):void;
}


function isLegal(user:User):boolean{
    if(user.age>18){
        return true;
    }else{
        console.log("You are not a legal user!");
        return false;
    }
}

// console.log(isLegal({
//     name:"Tom",
//     email:"tom@gmail.com",
//     age:25
// }))


// interface can be use to implement the claases


class Employee  implements User {
    name: string ;
    age:number;

    constructor(n:string,a:number){
        this.name = n;
        this.age=a;
    }

    greet(msg:string) : void {
        console.log(`${this.name}: ${msg}`);
    }


}

// const e = new  Employee('John',30); //  class instance
// e.greet("Hello");




// type

// type is similer to interface but you cant implement classes from it 



type User2={
    name:string,
    age:number,
}


function isLega(user:User2):boolean{
    if(user.age>18){
        return true;
    }else{
        console.log("You are not a legal user!");
        return false;
    }
}

// console.log(isLega({
//     name:"John",
//     age:45
// }))



// type doesnt allow implement classes from it but it gives you some extra feature


/****************************** Unions types **********************************/

// 1. Unions :- allow to allocate  memory for multiple types of data in single variable or parameter.
//            It means that the value can be any one of those types.

type StringOrNumber = string | number;

function PrintId(id:StringOrNumber) {
    console.log(id);
}

// PrintId(7896); // valid
// PrintId('Hello'); // valid



/****************************** INTERSECTION TYPES **********************************/

// 2. Intersection Types:- Allows to create an object which has all properties of several other types and interface.

interface Dog {
    breed:string,
    color?:string
}

type Person = {
    name:string,
    id:number
}

type DogPerson = Dog & Person; // this will give a new type with all properties of both Dog and Person interface


const p : DogPerson ={
    name:'John',
    id:54321,
    breed:'Labrador'
}


// console.log(p.name);
// console.log(p.breed);



/****************************** Arrays **********************************/




// const arr = number[];
const arr: number []=[1,2,3,4,5,5];

// max value findout 

function max(arr: number[]): number {
    let max = 0;
    for(let i = 0;i<arr.length ; i++){
        if(arr[i]>=max) 
            max=arr[i];
    }
    return max;
}

// console.log(max(arr)); // output is 5



//Given a list of users, filter out the users that are legal (greater than 18 years of age)


interface User3 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User3[]) {
    return users.filter(x => x.age >= 18);
}

// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// },{
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 76
// } ]));





/****************************** ENUMS **********************************/


// enums  in typescript can be used to represent sets of values which have some type safety . Enum members areenum DaysOfWeek {Sunday, Mondayenum Days {Mon, Tue, Wed,enum Days {Mon = 1, Tueenum Color {Red, Green, Blue};


// do something based on day

enum day{
    monday = 200 ,
    tuesday = "tue" ,
 
}
// can assign  any value to enum but by default it starts from 0 and increments by one .


function doGym(d : day){
    if(d == day.monday){
        console.log("Go to Gym and do exercise for chest");
    }else if ( d== day.tuesday) {
         console.log("Go to Gym and do exercise for arms and sholder");
    }
}

// doGym(day.monday);
// console.log(day.monday)
// console.log(day.tuesday);


// common use in express


enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })






/****************************** GENRICS **********************************/


// allow to create  a component that can be used with any type of data type without  knowing the exact type at compile time and still provide compile time type checking


// problem : function that take array as argument but array can have string and  number both return the first element 
// if it is string convert to uppercase


type Input = Number | String;

function firstEle(arr:Input[]){
    return arr[0];
}

// const val = firstEle(["hello", "world",23,45,67]);
// console.log(val.toUpperCase());

// problem 1 : here we get a probelm because  here compiler don't know the type of returned value it could be string and  number both
// problem 2: we couldn't able to send mixed value of number and string in single array either array  of numbers or array of strings but not both at

// solution 1  : using genrics

function firstEle1 <T>(arr : T[]){
    return arr[0]
}
const  val1 = firstEle1([ "hello", "world" ]);
console.log( val1.toUpperCase());   // now its nows the type of returned value


// solution 2: using genric

const  val2 = firstEle1<string>([ "hello", "world" ]); // now it contains only string
const  val3 = firstEle1<number>([ 1,2,3,4,5,6 ]); // now it contains only number



// probel 2 can be solve this way as well

// function retrunVal(arr: Number[] | String[]){
//     return arr[0]
// }

// this function only accept the either number array or string array not mixed array