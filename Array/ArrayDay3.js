//Program 1 = Calculate the Age
let BirthYears = [2003, 2005, 1998, 1994, 1976]
let CurrentAge = []

for (let i = 0; i <= BirthYears.length - 1; i++) {
    let age = 2021 - BirthYears[i]
    CurrentAge.push(age)
}
console.log(CurrentAge)

// Using map ()

let CurrentAg = BirthYears.map(function (el, index, arr) {
    return 2021 - el
})
console.log(CurrentAg)


//Program 2  = Sort the element grater than 25
//CurrentAge= [ 18, 16, 23, 27, 45 ]
let gtr25 = []

for (let i = 0; i <= CurrentAge.length - 1; i++) {
    if (CurrentAge[i] >= 25) {
        gtr25.push(CurrentAge[i])
    }
}
console.log(gtr25)

// Using filter()
//CurrentAge= [ 18, 16, 23, 27, 45 ]

let Greaterthan20 = CurrentAge.filter(function (el, index, arr) {
    return el >= 20
})
console.log(Greaterthan20)

//Program 3 = total value of bills

let bills = [345, 684, 753, 858, 366]
let total = 0

for (let i = 0; i <= bills.length - 1; i++) {
    total = total + bills[i]
}
console.log(total)

//Using reduce()

let totalbill = bills.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0)

console.log(totalbill)

//Program 4  = Total sum of Deposite And Withdraw

let allTransaction = [1000, 450, -350, 250, -600, 500, -900]

let Deposite = allTransaction.filter(function (el, index, arr) {
    return el >= 0
})
console.log(Deposite)

let Withdraw = allTransaction.filter(function (el, index, arr) {
    return el <= 0
})
console.log(Withdraw)

totalDeposite = Deposite.reduce(function (acc, el) {
    return acc + el
}, 0)

console.log(totalDeposite)

totalWithdraw = Withdraw.reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(totalWithdraw)

//Program5 = Apply 10% discount Using map()

let salePrice = [5000, 8000, 90000, 3000, 6000]

let DiscountPrize = salePrice.map(function (el, index) {
    return el - (el * 0.10)
})

console.log(DiscountPrize)



