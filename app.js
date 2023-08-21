let buttons = document.querySelectorAll('.button');
let cartValue = document.getElementById('cart-value')
let itemsArray = [];

buttons.forEach((button,index) => {
    button.addEventListener('click',()=>{
        let currentValue = parseInt(cartValue.textContent);
        cartValue.textContent = currentValue + 1;
    })
});