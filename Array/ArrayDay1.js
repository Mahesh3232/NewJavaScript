let Numbers = [12, 43, 43, 532, 52]
console.log(Numbers[2])
console.log(Numbers[4])

//loop 
for (let i = 0; i <= Numbers.length - 1; i++) {
    console.log(Numbers[i])
}

console.log(" reversed array")
for (let i = Numbers.length - 1; i >= 0; i--) {
    console.log(Numbers[i])
}

console.log(" Array methods")

let friends = ["Mahesh", "Shrikant", "Akash", "Dipak"]
//1) Push() = Action - Add the new element at the last of the array 
//            return - new length of the array 
let aa = friends.push("Sandesh")
console.log(aa)// 5
console.log(friends)//[ 'Mahesh', 'Shrikant', 'Aksah', 'Dipak', 'Sandesh' ]


//2) pop() = Action - delete the element at the last of the array 
//           return - returns the deleted last element of the array 

let bb = friends.pop()
console.log(bb)//Sandesh
console.log(friends)//[ 'Mahesh', 'Shrikant', 'Aksah', 'Dipak' ]

//3) indexof() = Action - gives the indexof of first occurance of element if element not present gives the -1 
//               return - index no of the element if element not present returns -1
let cc = friends.indexOf("Akash")
console.log(cc)//2
let dd = friends.indexOf("akash")
console.log(dd) // -1

//4)shift() = Action - delete the first element from the array 
//            return - returns the deleted element of the array 

let city = ["Nagpur", "Sangamaner", "Pune", "Mumbai", "Nashik"]
let ee = city.shift()
console.log(ee)//Nagpur
console.log(city)//[ 'Sangamaner', 'Pune', 'Mumbai', 'Nashik' ]

//5)unshift() = Action - add the element at the stating position of the array 
//              return - returns the new length of the array

let ff = city.unshift("Goa")
console.log(ff)//5
console.log(city)// [ 'Goa', 'Sangamaner', 'Pune', 'Mumbai', 'Nashik' ]

//6) includes() = Action - search the element are available or not in the array
//                return - if available then returns the boolean values (true / false)

let gg = city.includes("Pune")
console.log(gg)

//7) slice() = Action - slice the array into sub-array 
//             return - returns the new aaray 
//                0         1        2        3       4        5
let Student = ["Radhey", "Darshan", "Mansi", "Nikita", "Nidhi", "Kshitija"]
//              -6         -5       -4      -3       -2        -1
//ArrayName.slice(StartPosition,EndPosition)
let hh = Student.slice(3)
console.log(hh)//[ 'Nikita', 'Nidhi', 'Kshitija' ]

let ii = Student.slice(2, 4)
console.log(ii) //["Mansi","Nikita"]

let jj = Student.slice(1, 4)
console.log(jj)//["Darshan","Manasi","Nikita"]

let kk = Student.slice(3, 5)
console.log(kk) // ["Nikita","Nidhi"]

let ll = Student.slice(-5, 4)
console.log(ll)//["Darshan","Mansi","Nikita"]

let mm = Student.slice(-4, 5)
console.log(mm)//["Mansi","Nikita","Nidhi"]

let nn = Student.slice(0)
console.log(nn)//["Radhey","Darshan","Mansi","Nikita","Nidhi","Kshitija"]

let oo = Student.slice(-4, -2)
console.log(oo)//[Mansi","Nikita"]

//Program 1 = Calculate the age 

let BirthYear = [2009, 1998, 1976, 1967, 2003, 1986, 2008, 2002]
let Ages = []
for (let i = 0; i <= BirthYear.length - 1; i++) {
    let age = 2021 - BirthYear[i]
    Ages.push(age)
}

console.log(Ages)//[12, 23, 45, 54,18, 35, 13, 19]


//Program 2 = Sort the Ages Greater than 25
let Gtr25 = []

for (let i = 0; i <= Ages.length - 1; i++) {
    if (Ages[i] >= 25) {
        Gtr25.push(Ages[i])
    }
}
console.log(Gtr25)//[ 45, 54, 35 ]

//Program 3 = Sum of all elements
let Marks = [33, 44, 56, 24, 764, 27, 35]
sum = 0
for (let i = 0; i <= Marks.length - 1; i++) {
    sum = sum + Marks[i]
}
console.log(sum)//983