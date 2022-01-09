{/* <h1 class="class1" id="Id1">HeadingOne</h1>
<p class="class2" id="Id2">Para</p> */}


//select the element by tag name 
let Head1 = document.querySelector('h1')
let Paragraph = document.querySelector('p')

console.log(Head1)
console.log(Paragraph)

//select the element by class 
let aa = document.querySelector('#Id1')
console.log(aa)

let bb = document.querySelector('#Id2')
console.log(bb)

//select the element by class
let aaa = document.querySelector('.class1')
let bbb = document.querySelector('.class2')
console.log(aaa)
console.log(bbb)

//select the element by css selector
//tagName[attribute="value"]
let aaaa = document.querySelector('h1[class = "class1"]')
let bbbb = document.querySelector('p[id = "Id2"]')
console.log(aaaa)
console.log(bbbb)