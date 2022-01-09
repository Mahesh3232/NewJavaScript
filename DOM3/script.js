let head = document.querySelector('.Head1')
let para1 = document.querySelector('.Para1')
let para2 = document.querySelector('.Para2')
let button = document.querySelector('button')
console.log(head)
console.log(para1)
console.log(para2)
console.log(button)

button.addEventListener('click',function(){
    head.style.color = "green"
    head.style.backgroundColor ="Purple"
    para1.style.color = "red"
    para1.style.backgroundColor ="yellow"
    para2.style.color = "blue"
    para2.style.backgroundColor ="orange"

})