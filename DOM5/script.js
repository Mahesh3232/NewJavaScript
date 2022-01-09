let LlList = document.querySelectorAll('li')
let button = document.querySelector('button')

//program 1 
// button.addEventListener('click',function(){
//     for (let i = 0 ;i< LlList.length;i++){
//         LlList[i].style.color = "green"
//         LlList[i].textContent = LlList[i].textContent.toUpperCase()
//     }
// })

//program 2 
// button.addEventListener('click',function(){
//     for(let i = 0 ;i< LlList.length;i++){
//         if (i % 2 ==0 ){
//             LlList[i].style.color = "red"
//             LlList[i].textContent = LlList[i].textContent.toUpperCase()
//         }
//         else{
//             LlList[i].style.color ="blue"
//         }
//     }
// })

let ListBlue = document.querySelectorAll(".blue")
let ListRed = document.querySelectorAll(".Red")
console.log(ListBlue)
console.log(ListRed)


//program 3 
// button.addEventListener('click',function(){
//     for(let i = 0 ;i<ListRed.length;i++){
//         ListRed[i].style.color = "red"
//         ListRed[i].style.backgroundColor = "yellow"
//     }
//     for(let i = 0 ;i<ListBlue.length;i++){
//         ListBlue[i].style.color = "blue"
//         ListBlue[i].style.backgroundColor = "orange"
//     }
// })


//program 4 
button.addEventListener('click',function(){
    for(let i = 0;i<LlList.length;i++){
        if (LlList[i].className =='Red'){
            LlList[i].style.color = "red"
            LlList[i].style.backgroundColor ="yellow"
        }else {
            LlList[i].style.color = "orange"
            LlList[i].style.backgroundColor = "blue"
        }
    }
})

