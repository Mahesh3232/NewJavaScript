//select element by tag name 
// let HeadOne = document.querySelector('h1')
// console.log(HeadOne)

//select element by Css selector
//tagName[attribute='value']
let Btn = document.querySelector("button[class='BUtton1']")
console.log(Btn)

//css selector class

let HeadTwo = document.querySelector(".Head2")
console.log(HeadTwo)

//select element by id 
let aa = document.querySelector('#One')
console.log(aa)

//Change the color on click on Btn
Btn.addEventListener('click', () => {
    aa.style.color = ('red')
    aa.style.backgroundColor = ('Yellow')
})

let button2 = document.querySelector('#BTn2')
console.log(button2)

let lists = document.querySelectorAll('li')
console.log(lists)



