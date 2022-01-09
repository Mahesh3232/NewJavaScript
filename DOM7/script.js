let UlList = document.querySelector('ul')
let button = document.querySelector('.add')
let input = document.querySelector('input')
let LiList = document.querySelectorAll('li')
console.log(UlList)
console.log(button)
console.log(input)
console.log(LiList)
for (let i = 0; i < LiList.length; i++) {
    createButton(LiList[i])
}

button.addEventListener('click', function () {
    text = input.value
    console.log(text)
    let li = document.createElement('li')
    li.textContent = text
    createButton(li)
    UlList.append(li)
    input.value = " "
})

function createButton(li) {
    let up = document.createElement('Button')
    up.textContent = "Up"
    up.className = 'up'
    li.append(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.className = 'down'
    li.append(down)

    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.className = "remove"
    li.append(remove)
}



