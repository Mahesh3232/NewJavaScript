//function declaration 
function add() {
    console.log(4 + 5)
}
add()//function calling
//parameter
function add1(x, y) {
    console.log(x + y)
}
add1(10, 5) // function calling


//function with parameter and with return type
function add2(x, y) {
    return x + y // with return keyword we stored the value and reuse it
}
let dd= add2(45, 89) //function calling
console.log(dd)

//function expresion 
//without parameter and without return type
let sub = function () {
    console.log(12 - 6)
}

sub()

//function with parameter and without return type

let sub1 = function (x, y) {
    console.log(x - y)
}

sub1(1000, 500)

//function with returntype and parameter

let sub2 = function (x, y) {
    return x - y
}

let cc =sub2(100, 75)
console.log(cc)


//arrow function 
//without parameter and without return type
let mul = () => {
    console.log(10 * 50)
}
mul()

//function with parameter and without return type
let mul1 = (x, y) => {
    console.log(x * y)
}
mul1(2,6)

//function with returntype and parameter
let mul2 = (x, y) => {
    return x * y
}
let bb =mul2(10,5)
console.log(bb)

//or if there is only one statement we can also write as
let mul3 = (x, y) => (x * y)
 let aa=mul3(2, 8)
 console.log(aa)


 //function paasing as a parameter
 let sub4 =function (x,y) {
     return x-y
 }

 let Subtraction = function(x,y,fn){
     let final = fn(x,y)
     return final
 }

 let final2 =Subtraction(100,50,sub4)
console.log(final2)

//Array passing as a paramter
let age = [23,45,32,54,12,45]

let Plus2 = function(arr) {
    let final = arr.map(function(el,index,arr){
        return el+2
    })
    return final
}

let aaa = Plus2(age)
console.log(aaa)

//object paasing as a parameter 

let info ={
    fullname : "Mahesh Aher",
    age : 23,
    RollNo : 45 
}

let updateName = function(obj){
    obj.fullname= "Sidhu temgire"
    return obj
}

let ccc= updateName(info)
console.log(ccc)

let deleteValue = function(obj){
    delete obj.RollNo
    obj.city ="Sangamaner"
    return obj
}
let ddd = deleteValue(info)
console.log(ddd)

//string as a parameter to a function 

let string= "Im new to javaScript"

let Revers =function(str){
    let revString = " "
    for(let i = 0 ; i < str.length ;i++){
       revString = str[i]+revString
    }
    
    return revString
}

let ggg =Revers(string)
console.log(ggg)





















