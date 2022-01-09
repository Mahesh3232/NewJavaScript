let UlList = document.querySelector('ul')
let button = document.querySelector('button')
let input = document.querySelector('input')

button.addEventListener('click',function(){
    text = input.value 
    // console.log(text)
    let li = document.createElement('li')
    li.textContent = text
    UlList.append(li)
    input.value = " "

})