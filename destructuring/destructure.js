
//array 

let aaa = [1, 2, 3]
console.log(aaa[0])
console.log(aaa[1])
console.log(aaa[2])


let [a, b, c] = aaa
console.log(a)
console.log(b)
console.log(c)

let aaaa = [[1, 2, 3], 5]
let [[aa, bb, cc], dd] = aaaa
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

let rr = [[11, 22, 33], [44, 55], 66]

let [[ee, ff, gg], [hh, ii], jj] = rr
console.log(ee)
console.log(ff)
console.log(gg)
console.log(hh)
console.log(ii)
console.log(jj)

let uu = [23, 45, 65, [33, 44, 55], [66]]
let [k, l, m, [n, o, p], [q]] = uu
console.log(k)
console.log(m)
console.log(p)
console.log(q)


//object 

let Mahesh = {
    fullname: "Mahesh Aher",
    age: 23,
    id: 45
}

let { fullname:zz, age:xx, id:yy } = Mahesh
// console.log(fullname)
// console.log(age)
// console.log(id)

console.log(zz)
console.log(xx)
console.log(yy)

let Roshan = {
    FirstName :"Roshan",
    MiddleName:"Sandip",
    LastName:"Datir",
    City:"Sangamaner"
}

let {FirstName:xxx,MiddleName:yyy,LastName:zzz,City:ppp} = Roshan
// console.log(FirstName)
// console.log(MiddleName)
// console.log(LastName)
// console.log(City)

console.log(xxx)
console.log(yyy)
console.log(zzz)
console.log(ppp)


let Person1 ={
    FName :"Mahesh",
    LName:"Aher",
    RollN :34,
    skils :["c++","Java","javascript"]
}

let {FName:bbbb,LName:vvvv,RollN:cccc,skils:[tt,ll,kk]} = Person1

console.log(bbbb)
console.log(vvvv)
console.log(cccc)
console.log(kk)

let friends = [
    {
        fullName:"Roshan",
        age:23

    },

    {
        fullName:"akash",
        age:22

    },
    {
        fullName:"sahil",
        age:20

    }
]

let [{fullName:FNameOne,age:AgeOne},{fullName:FNameTwo,age:Agetwo},{fullName:FNameThree,Age:AgeThree}] = friends
console.log(FNameOne)
console.log(AgeOne)
console.log(FNameTwo)
console.log(Agetwo)
console.log(FNameThree)
console.log(AgeThree)



