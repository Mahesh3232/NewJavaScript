//program 1 = Count of the char in string 

let cityname = "karnataka"
let count = 0
for (let i = 0; i < cityname.length; i++) {
    if (cityname[i] === 'a') {
        count = count + 1
    }
}

console.log(count)

//prog =2
let Actor = "salmann khann"
let ncount = []
for (let i = 0; i < Actor.length; i++) {
    if (Actor[i] === "n") {
       ncount.push(Actor[i])
       ncount.push(i)
    }
}
console.log(ncount)

//prog 3 =count of vovels in the string 

let State = "Maharashtraei"
let vowelscount = 0 
for (let i = 0 ;i<State.length;i++){
    if (State[i] === 'a' ||State[i] === 'e' || State[i] === 'i' || State[i] === 'o' || State[i] === 'u'){
        vowelscount = vowelscount+1
    }
}
console.log(vowelscount)

//charCodeAt() = return the unicode value of the char 

let vegetable = "pupkin"
let a = vegetable.charCodeAt(4)
console.log(a)

//charAtIndex() = Returns the character at the specified index.

let b = vegetable.charAt(3)
console.log(b)

//Split()= divide a string into substrings using the any char of the string and also space  and return them as an array.
let Fullname = "Mahesh Aher"
let c = Fullname.split(' ')
console.log(c)

let cricket  = "virat kohali" 
let d = cricket.split(" ") //['virat','kohali']
console.log(d)
console.log(d[0][0] + d[1][0])

let info = "Mahesh-Aher-9309181402"
let mobile = info.split("-")
console.log(mobile[2])

//includes() = find the occurance of the sub string, return the boolean values

let Friends = "Mahesh Akash Ganesh Karan Krishna"
let dd = Friends.includes('nesh')
console.log(dd)

//String + String  ===> String 
//String + Number  ===> String 
//Numbre + string  ===> String 
//Number + Number  ===> Number

//concat()
let Firstname = "Mahesh"
let Lastname  = "Aher"
console.log(`Welcome ${Firstname}  ${Lastname}!`)
console.log("welcome"+""+Firstname+""+Lastname)
