let Head =document.querySelector('h1')
let button = document.querySelector('button')

console.log(Head)
console.log(button)


button.addEventListener('click',function(){
    Head.style.color="Red"
    Head.style.backgroundColor="Yellow"
})