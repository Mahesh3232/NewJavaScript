let BirthY = [1998, 2003, 1999, 2002]

let currentage = []

for (let i = 0; i <= BirthY.length - 1; i++) {
    let age = 2021 - BirthY[i]
    currentage.push(age)
}

console.log(currentage)

//Using map () = 

let Age1 = BirthY.map(function(el){
    return 2021 - el
})
console.log(Age1)

//[ 23, 18, 22, 19 ] Add 5 in each element 

gtr5 =Age1.map(function (el,index,arr) {
    return el +5
})

console.log(gtr5)



