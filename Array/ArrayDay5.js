let Mahesh = {
    FullName: "Mahesh Aher",
    Age: 23,
    RollNo: 45,
    City: "Sangamaner"
}

//retrive = dot notation & bracket notation 
console.log(Mahesh.FullName)
console.log(Mahesh['RollNo'])

//Update 
Mahesh.Age = 33
Mahesh.City = 'Pune'
console.log(Mahesh)

//Add 
Mahesh.Lang = "Marathi"
Mahesh.MoNo = 9881966732
console.log(Mahesh)

//delete 
delete Mahesh.Lang
delete Mahesh['MoNo']
console.log(Mahesh)

//Sort()
let Fruits = ["Apple", "Chiku", "PineApple", "Banana", "Mango"]
let sorted = Fruits.sort()
console.log(sorted)

//flat()
let Num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
console.log(Num[0])
console.log(Num[2][1])
let aa = Num.flat()
console.log(aa)

//flatmap() = Perform action on each element and returns the New Array 
let tt = [22, 33, 44, 55, 66]
let bbb = tt.flatMap(function (el) {
    return el + 3
})
console.log(bbb)

//find() = returns the first occrance
let kk = tt.find(function (el) {
    return el > 30
})
console.log(kk)

//findIndex() = Returns the index of the first occrance otherwise returns -1
let oo = tt.findIndex(function (el) {
    return el > 43
})
console.log(oo)

//Splice()
// let Fruits = ["Apple", "Chiku", "PineApple", "Banana", "Mango"]
aaaa = ["Banana", "Orange", "Apple", "Mango", "Chiku", "Papaya"];
//       StratPosition, Delete Count
let vv = aaaa.splice(1, 4,"asasdad","sdsdff")
console.log(vv)
console.log(aaaa)


//fill()= Changes all array elements from start to end index to a static value and returns the modified array
 let colours = ["Yellow","green","red"]
let ggg=colours.fill("black",2)
 console.log(ggg)

 let arrj = [22,33,44,55,66,77,88,99,100]
 let ghgh = arrj
 //.fill("chinmay",3)
 .fill('a',3,4) // endpoint not included
 console.log(ghgh)
