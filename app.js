let buttons = document.querySelectorAll('.button');
let cartValue = document.getElementById('cart-value')
let itemsArray = [];
let totalPrice = 0;
var whatsappApi = "https://api.whatsapp.com/send?phone=6374134070&text=Order%20details";

function orderDetails(){
    itemsArray.forEach((ele) =>{
        if (ele.quantity!==0){
            whatsappApi+='%0A'+ele.itemName+'%20'+ele.quantity
        }
    })
    whatsappApi+='%0A'+"The total payable amount is $"+totalPrice
}


buttons.forEach((button,index) => {
    button.addEventListener('click',(event)=>{
        let currentValue = parseInt(cartValue.textContent);
        cartValue.textContent = currentValue + 1;
        const h3element = event.currentTarget.parentNode.previousElementSibling.querySelector('h3');
        const pelement = event.currentTarget.parentNode.querySelector('p');

        const itemName = h3element.textContent;
        const existingObject = itemsArray.find(obj => obj.itemName === itemName);
        
        if (existingObject){
            existingObject.quantity++
        }

        else{
            const newObj = {
                itemName: itemName,
                quantity: 1,
            }
            itemsArray.push(newObj)
        }

        totalPrice = totalPrice+parseFloat(pelement.textContent.slice(1));
    })
});

document.getElementById('cart').addEventListener('click',()=>{
    itemsArray.forEach((obj) => {
        console.log(obj)
    })
    console.log("The total payable amount is $"+totalPrice)
    orderDetails();
    window.open(whatsappApi);
})