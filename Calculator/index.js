let op = "";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            op=eval(op)
            document.querySelector('input').value = op
        }
        else if(e.target.innerHTML == 'AC'){
            op=''
            document.querySelector('input').value = op
        }
        else if(e.target.innerHTML == '~'){
            op=op.slice(0,op.length-1)
            console.log(op)
            document.querySelector('input').value = op
        }
        else{
            console.log(e.target)
            op = op + e.target.innerHTML;
            document.querySelector('input').value = op
        }
    })
})





// let op = "";
// disable=false;
// var count=0;
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         count+=1
//         if(count>5){
//             disable=true
//         }
//         if(disable==false){
//             if(e.target.innerHTML == '='){
//                 op=eval(op)
//                 document.querySelector('input').value = op
//             }
//             else if(e.target.innerHTML == 'AC'){
//                 op=''
//                 disable=false
//                 document.querySelector('input').value = op
//             }
//             else if(e.target.innerHTML == '~'){
//                 op=op.slice(0,op.length-1)
//                 console.log(op)
//                 document.querySelector('input').value = op
//             }
//             else{
//                 console.log(e.target)
//                 op = op + e.target.innerHTML;
//                 document.querySelector('input').value = op
//             }
//         }
//     })
// })




// let op = "";
// disable=false;
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         if(disable==false){
//             if(e.target.innerHTML == '='){
//                 op=eval(op)
//                 document.querySelector('input').value = op
//             }
//             else if(e.target.innerHTML == 'AC'){
//                 op=''
//                 disable=false
//                 document.querySelector('input').value = op
//             }
//             else if(e.target.innerHTML == '~'){
//                 op=op.slice(0,op.length-1)
//                 console.log(op)
//                 document.querySelector('input').value = op
//             }
//             else{
//                 console.log(e.target)
//                 op = op + e.target.innerHTML;
//                 document.querySelector('input').value = op
//             }
//         }
//     })
// })
