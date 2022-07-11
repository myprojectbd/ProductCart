// const increment = document.getElementById("incrementItem1");
// const decrement = document.getElementById("decrementItem1");
// const decrement2 = document.getElementById("decrementItem2");
// const increment2 = document.getElementById("incrementItem2");




// function productChange(isIncreaseNew) {
//     const quantityOfItem2 = document.getElementById("quantityOfItem2");
//     const item2 = parseInt(quantityOfItem2.value);
//     quantityOfItem2.value = item2;

//     const priceOfItem2 = document.getElementById("priceOfItem2");
//     const price2 = parseInt(priceOfItem2);

    

//     let total = item2 ;

//     if (isIncreaseNew == true) {
//         total = item2 + 1 ;
//     }
//     if (isIncreaseNew == false && item2>0) {
//         total = item2 - 1 ;
//     }
   
//     const priceItem2 = total * 59;

//     document.getElementById("quantityOfItem2").value = total;

//     document.getElementById("priceOfItem2").innerText= priceItem2;
// }


function handleProductChange(product , isIncrease) {
     const Case = document.getElementById(product +'-input');
     let caseinput = parseInt(Case.value);


    let tottal = caseinput;
    if (isIncrease == true) {
        tottal = caseinput + 1;
    }
    if (isIncrease == false && caseinput>0) {
        tottal = caseinput -1 ;
    }

    //  const tottal = caseinput + 1 ;

    Case.value = caseinput;

    let price = document.getElementById(product + '-total');
    const newPrice = parseInt(price);

    // let priceTottal = tottal * 12;

    let priceTottal = 0;
   if (product == 'phone') {
      priceTottal = tottal * 12;
   }
   if (product == 'case') {
      priceTottal = tottal * 59;
   }
   
    document.getElementById(product + '-total').innerText = priceTottal;
  
    
    document.getElementById(product + '-input').value = tottal;

    calculateAll();
}

function calculateAll() {
    
    const Phone = getInputValue('phone');

    const Case = getInputValue('case');

    const totalPrice = Phone * 12 + Case * 59 ;

    document.getElementById("subtotal").innerText = totalPrice;

    const tax = totalPrice * 0.05;
    document.getElementById("tax").innerText=tax;

    const grandtottal = totalPrice+tax;
    document.getElementById("total").innerText=grandtottal;

}

function getInputValue(product) {
    const productInput = document.getElementById(product +'-input')
    const productCount = parseInt(productInput.value);
    return productCount;
}
