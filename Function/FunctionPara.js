//function Declaration 

let add = function(x,y){
    return x+y
}
let a = add(10,20)
console.log(a)

//Passing function as a parameter 

function Adiition (fn,x,y){
    let b = fn (x,y)
        return b
}

let c = Adiition(add,10,40)
console.log(c)

let sub = function (p,q){
    return p-q
}

let Subtraction = function(fnn,p,q){
    let d = fnn(p,q)
    return d
}
let e = Subtraction(sub,50,25)
console.log(e)

let mul =function(t,w){
    return t*w
}

let Multiplication = function(fn,t,w){
    let f = fn(t,w)
    return f
}

let g =Multiplication(mul,10,10)
console.log(g)

let div = function (r,s){
    return r/s
}

let Divide =function (fn,r,s){
    let h =fn(r,s)
    return h
}
let i = Divide(div,100,5)
console.log(i)

console.log("Passing Array as a Parameter")

let marks = [11,22,33,44,55,66]

let Addition1 = function(arr){
    let total = arr.reduce(function(acc,el){
        return  acc+el
    },0)
    return total
}

let Sum = Addition1(marks)
console.log(Sum)

//Program 2 
let Names = ["Mahesh","Akash","Sandip","Roshan"]

let Welcome = function(arr){
    let rrr = arr.map(function(el){
          return (`Welcome ${el}`)
    })
    return rrr
}
 
let aaa = Welcome(Names)
console.log(aaa)

//program 3 
let marks1 = [11,22,55,77,33,57,42]


let MarksGtr50 =function(arr){
    let tt= arr.filter(function(el,index,arr){
        return el > 50
    })
    return tt
}

let gg= MarksGtr50(marks1)
console.log(gg)

console.log("*******Passing string as a parameter**********")

let str = "Hello my name is Mahesh"

let reverseStr = function(str){
    let rvstr = ""
    for(let i = 0;i<= str.length-1;i++){
        rvstr = str[i]+rvstr
    }
    return rvstr
}

let rrrr = reverseStr(str)
console.log(rrrr)

//program 2 
let str1 = "Good Morning"

let Greet = function (str){
    return (`${str} Mahesh`)
}
let ss = Greet(str1)
console.log(ss)

console.log('*******Passing object as a parameter *********')

let info= {
    fullname : "Mahesh Aher",
    Age : 23,
    Rollno: 56
}

function addvalue (obj){
    obj.Language = "Sangamaner"
    return obj
}
let ttt = addvalue(info)
console.log(ttt)

let Printkeyvalue = function(obj){
    for(let key in obj){
        console.log(key,obj[key])
    }

}

Printkeyvalue(info)

