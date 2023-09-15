// let a=0
// while(a<=10){
//     console.log(a)
//     a=a+1
// }

// for(let x=0; x<=50; x++){
//     console.log(x)
// }

let box='<div class="box"></div>'
let box_list = document.querySelector('.box_list')
let x = prompt('Введите число')
for(let y=0; y<x; y++){
    box_list.insertAdjacentHTML('beforeend',box)
}