let x = 10
console.log(typeof x)

x = true
console.log(typeof x)

x ="mahesh"
console.log(typeof x)

// string ------>


let city = "pune"
city = "Mumbai"
console.log(city)

// const country = "India"
// country = "Us"
// console.log(country)

let T = "p"
console.log(typeof g)

// Number String Boolean

city = "pune"

// 0 1 2 3
// p u n e
console.log(city[0])
console.log(city[1])

// Object --- property and method
// human --> 
//property - age , weight , height , name
//method - walk(),talk()
// vehicle ---->
// property --> register number ,color ,type
// methods --> start() , stop()


// Everything in js is object
// Object -- property and method 

city = "pune"

// property
let a  = city.length
console.log(typeof a)

// string methods

let b = city.toUpperCase()
console.log(b)
console.log(typeof b)

// method -->
// action --- covert every string character into upper
// return --- string 


// toLowerCase() 

let fruit = "Apple"

let bb = fruit.toLowerCase()
console.log(bb) // "apple"
console.log(typeof bb) // string

// toLowerCase() --> 
//action -- converts every char into lowercase
// return type -- strinf 

// Method chaining
let c = fruit.toLowerCase().toUpperCase().length
console.log(c)

// property ---- length
// method -- toLowerCase() , toUpperCase()

let ocean = "pacific"
//   0  1  2  3  4  5  6
//   p  a  c  i  f  i  c

let dd = ocean.indexOf('a')
console.log(dd)
console.log(typeof dd)

// action - index find passed charcter
// return - Number

let ee = ocean.indexOf('i') //3
let ff = ocean.lastIndexOf('i')// 5

console.log(ee)
console.log(ff)

g = "R"
console.log(typeof g)



ocean = "pacific"

//   0  1  2  3  4  5  6
//   p  a  c  i  f  i  c

console.log(ocean[0]) // p
console.log(ocean[1])

// loop 

console.log(ocean.length) // 7
console.log(ocean[ocean.length-1])
console.log(ocean[1])
for(let i = 0 ; i < ocean.length;i++){ // 1 , 2 ----6,7 
    //console.log(i) // 0 , 1 , 2, 3, 4, 5, 6
    console.log(ocean[i])
}


let country2 = "Cuba"

// 0  1  2  3
// C  u  b  a

for(let i = 0 ; i < country2.length ;i++){
    //console.log(i) // 0 ,1,2,3
    console.log(country2[i])
}

// print the character in reverse

console.log('----------------------')
for(let i = country2.length -1 ; i >=0 ;i--){
    console.log(country2[i])
}

//-------------------------------------------->
// toUpperCase(), toLowerCase(),indexOf(),lastIndexOf()


// Slice  ----> substring 


let fname = "Mahesh"
console.log(typeof fname)

//   0      1    2     3    4    5       
//   M      a    h     e    s    h       
//  -6     -5    -4    -3  -2    -1     -

let qqq = fname.slice(1,4)
console.log(qqq)  // ahe

let www = fname.slice(1)
console.log(www)

let rrr = fname.slice(2,6)
console.log(rrr)

// negative slicing 

fname = "Mahesh"
let ttt = fname.slice(-4)
console.log(ttt)

let qqqa = fname.slice(1,-4)
console.log(qqqa)

// to get substring endpoint should ahead start position

let uuu = fname.slice(-2,-4)
console.log(uuu)
//fname.slice(startposition,endposition(not included))


let mobile = "apple" // "Apple
console.log(mobile[0].toUpperCase()+mobile.slice(1))

mobile = "apple"
newString = ""
for(let i = 0 ; i < mobile.length ; i++){
    if(i == 0){
        newString = newString + mobile[i].toUpperCase()
    }
    else {
        newString = newString + mobile[i].toLowerCase()
    
    }
}
console.log(newString)


// reverse the string 
// amol   ------> loma

let rev = "ganesh"
let revString = " "
console.log(rev[1])  // a
for(let i = 0 ; i < rev.length ;i++){
   revString = rev[i]+revString
}

console.log(revString)
let yyy = 'ram'
let r = ""




for(let i = 0 ; i < yyy.length ;i++){  // 3
//console.log(i) // 0 , 1 , 2
//console.log(yyy[i])
    r = yyy[i] + r
}
console.log(r)

// -------------------------------_>

//Reverse the string
let hhh = "name"
let j = ""

for(let i = hhh.length-1 ; i >= 0 ; i--){
    j = j + hhh[i]
}

console.log(j)


//------------------------------>
// Arithmetic -- - (/ - % * +)
// comparision ---->    == , != ,  >= , <= , < , > , === , !==


console.log(3>4)     //boolean // false
console.log(77 < 22) // false
console.log(2 >= 1) // true 
console.log(3 <= 3) // true
console.log(6 >= 6) // true 
console.log(6 == 6) // true
console.log(7 != 9) // true
console.log(7 != 7) // false



let ray = '6'
let rayq = 6

console.log(typeof ray) // string
console.log(typeof rayq) // number

console.log(ray == rayq) // true (value)
console.log(ray === rayq) // flase (absolute value + type)


console.log(4 == "4") // true
console.log( 4 === 4) //true 
console.log( 4 === 5) // false
console.log(5 === '5')// false


console.log(3 !== '3')  // true
console.log( 3 !== 3) // false
console.log(4 !== '4') // true
console.log(5 !== 6) // !false // true

// logical operators


// AND OR NOT


//OR

// True  False  ----> True
// False True   -----> True 
// True   True  ----->  True 
// False  False  ---->  False

// AND

//True  False  ----> False
//False True   -----> False
//True   True  ----->  True 
//False  False  ---->  False

// NOT

//True  -- False
//False -- True

//||  --> OR
//&&  ---> AND
// !  ---> NOT

console.log(23 > 4 || 5 < 4)
console.log(22 >= 21 && 3 !=='3') // true
console.log(23 != 22 && 34 !== 33 || true) // true
