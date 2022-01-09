//foreach() 
let Names = ['Shrikant','Rahul','Sandesh','Ram']

//Program1
//Using for loop 

for(let i = 0;i<Names.length;i++){
    console.log('Welcome ' +Names[i])
}

//Using foreach()
let aa= Names.forEach(function(el){
    console.log(`welcome ${el}`)
})
console.log(aa)

//every() = return boolean values
let Numbers = [23,565,23,54,67,75,85]
let bb = Numbers.every(function(el,index){
    return el > 10
})
console.log(bb)

//some() = return boolean values
let cc = Numbers.some(function(el){
    return el < 100
})
console.log(cc)

//reverse()= reverse the array
let dd =Numbers.reverse()
console.log(dd)

//concat()
let ee =[1,2,3,4,5]
let ff = [6,7,8,9,10]
let gg =ee.concat(ff)
console.log(gg)

//join()
let Name = "Mahesh - Aher- 9881966732"
let hh = Name.split("-")//[ 'Mahesh ', ' Aher', ' 9881966732' ]
console.log(hh)

let ii = hh.join('-')//Mahesh - Aher- 9881966732
console.log(ii)





