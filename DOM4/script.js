let head1 = document.querySelector('h1')
let input = document.querySelector('input[class = "Class1"]')
let button = document.querySelector('button')

console.log(input)

button.addEventListener('click', function () {
    let text = input.value
    // console.log(text)
    head1.style.color = text
    head1.style.backgroundColor = "Yellow"
    input.value = " "
})