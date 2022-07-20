const quantityOfItem=document.querySelectorAll('.quantity');
const incrementButton=document.querySelectorAll('.plus');
console.log(incrementButton)
for (let i=0;i<incrementButton.length;i++){
    incrementButton[i].addEventListener('click',function(){
        quantityOfItem[i].innerHTML++
    })
}


