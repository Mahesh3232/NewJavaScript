//data types 
let a = 10
console.log(typeof a)//number

let b = "Mahesh"
console.log(typeof b)//String

let c = [1, 2, 3, 4, 5]
console.log(typeof c)//object

let d = {
    fullname:"Mahesh Aher",
    Age:23,
    Rollno: 45
}
console.log(typeof d)//object 

// let headOne = document.querySelector('h1')
// console.log(typeof headOne) //object

let e = true
console.log(typeof e)//boolean

//class using constructor

class Person{
    constructor(Fn,Ln,Ag,Rn){
        this.FirstName = Fn
        this.LastName = Ln
        this.Age = Ag
        this.Rollno = Rn
    }
}

let Mahesh = new Person("Mahesh","Aher",23,46)
console.log(Mahesh)
console.log(typeof Mahesh)//object
console.log(Mahesh instanceof Person)//true

//Map and Object = they both stores the key and value
//               = Map stores all data types as a key 

//String 
let aa =new String("Mahesh")
console.log(aa)

let bb = new Array()
console.log(bb)

//Map 
let Shrikant = new Map()
console.log(Shrikant)
let xx = ["Birthplace","CurrentPlace"]
let rr = ['Skills',"TechSkills"]
let bbb ={'BirthYear':'1999','BithDate':'23','BirthMonth':'06'}

Shrikant.set('FstName',"Shrikant")
Shrikant.set('LastName',"Patil")
Shrikant.set(xx,["Parner","Mumbai"])
Shrikant.set(rr,["Communication","Automation Tester"])
Shrikant.set(true,"Salaried")
Shrikant.set(bbb,"DOB")
console.log(Shrikant)

//retrive values in map
console.log(Shrikant.get('FstName'))
console.log(Shrikant.get('LastName'))
console.log(Shrikant.get(xx))
console.log(Shrikant.get(rr))
console.log(Shrikant.get(true))
console.log(Shrikant.get(bbb))

//get and set 
//get returns the singal value
//set returns the all map
console.log(Shrikant.set(1,2))

//keys = return the all keys in Map
console.log(Shrikant.keys())

//values = returns the all values in Map
console.log(Shrikant.values())

//Entries = returns all key and values of the map
console.log(Shrikant.entries())

let JobRole = new Map([
    ['Mahesh','Process executive'],
    ['Sandesh','Software eng'],
    ['Rahul','QA'],
    ['Karan','Tester']
])

console.log(JobRole)

// loop for Keys
for (let key of JobRole.keys()){
    console.log(key)
}

//loop for values
for (let val of JobRole.values()){
    console.log(val)
}

//loop for key and values
for (let [key,value] of JobRole.entries()){
    console.log(key,value)
}

//size = return the count of elements of map
console.log(JobRole.size)

//clear = delete the all elements of map 
// JobRole.clear()
// console.log(JobRole)

//delete  = delete the element
JobRole.delete('Mahesh')
console.log(JobRole)