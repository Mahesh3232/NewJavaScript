let a = 10
let b = a
console.log(a)//10
console.log(b)//10

let c = 100
let d = c

c = 400
d = 300

console.log(c)//400
console.log(d)//300

let no = [1, 2, 3, 4]
let no1 = no

no[0] = 11
no1[1] = 22
console.log(no)//[11,22,3,4]
console.log(no1)//[11,22,3,4]

let Info1 = ["Mahesh", "Aher", 23, 45]

let info = {
    FstName: "Mahesh",
    LastName: "Aher",
    Age: 23,
    RoolNo: 45
}

//Retrive = dot notation and bracket Notation
console.log(info.FstName)
console.log(info['LastName'])

//Update 
info.FstName = "Akash"
info['LastName'] = "Ambre"

//add
info.lang = "Marathi"
info['height'] = 81
console.log(info)

//delete
delete info.height
delete info['Age']
console.log(info)

let aa = [11, 22, 33, 44, 55, 66]
//loop
for (let i = 0; i <= aa.length-1; i++) {
    console.log(aa[i])
}

//reverse loop

for (let i = aa.length-1; i >= 0; i--) {
    console.log(aa[i])
}

let car = {
    Company : "BMW",
    Type :"XUV",
    Reg_No : 12345,
    Colour : "Red"
}

for(let key in car){
    console.log(key , car[key])
}

let Mahesh = {
    firstname : "Mahesh",
    lastname: "Aher",
    Age : 23,
    Height : 8
}

for (let key in Mahesh){
    console.log(key , Mahesh[key])
}

//object does not stored the value by index
//object doest not stored the duplicakate values
// . dot notation does not work inside the object






