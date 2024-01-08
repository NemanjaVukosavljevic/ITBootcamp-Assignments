
// init consts
const initDiv = document.getElementById('initDiv');
const heroDiv = document.getElementById('heroDiv');
const initOrderButton = document.getElementById('initOrderButton');
const realOrderButton = document.getElementById(`realOrderButton`);

const productDecrementButton = document.querySelectorAll('.decrement');
const productIncrementButton = document.querySelectorAll('.increment');
const roseProductValueField = document.querySelectorAll('.numberRose');

// modal
const closeModalButton = document.querySelector(`.closeModal`);
const totalPriceModal = document.querySelector(`.totalPrice`);
const cardRadioButton = document.getElementById(`card`);
const discountOption = document.querySelector(`.discount-option`);
const disclaimerSectionModal = document.querySelector(`.disclaimer`);

// final order button
const finalOrder = document.getElementById(`finalOrder`);

// other consts
const addToCartButton = document.querySelectorAll('.addToCart');
const productContainer = document.getElementById('productContainer');
const productsArray = document.querySelectorAll(`.product`);
const selectedProductsContainer = document.getElementById('selectedProductsContainer');
const paymentRadioButtons = document.getElementsByName('payment');
const productRadioButtons = document.querySelectorAll('input[name="product"]');
const allAddToCartButtons = document.querySelectorAll(`.addToCart`);

// total price
let total = 0;



productContainer.addEventListener('click', (event) => {
    const addToCartButton = event.target.closest('.addToCart');
    const product = event.target.closest('.product');
    const increment = event.target.closest(`.increment`);
    const decrement = event.target.closest(`.decrement`);
    const cost = event.target.closest(`.cost`);
    const index = Array.from(productContainer.children).indexOf(product);

    if (increment && product){
        let numberField = product.querySelector(`.numberRose`);
        let fieldValue = numberField.value;
        fieldValue++;

        let costField = product.querySelector(`.cost`);
        let costValue = costField.innerText;
        
        // inkrement cene
        
        if (index == 0){
            costField.innerText = `${fieldValue * 150} din`;
        } else if (index == 1){
            costField.innerText = `${fieldValue * 120} din`;
        } else if (index == 2){
            costField.innerText = `${fieldValue * 70} din`;
        }


        numberField.value = fieldValue;
    } else if (decrement && product){
        let numberField = product.querySelector(`.numberRose`);
        let fieldValue = numberField.value;
        fieldValue--;

        let costField = product.querySelector(`.cost`);
        let costValue = costField.innerText;

        if (fieldValue < 1){
            fieldValue = 1;
        }

        // dekrement cene

        if (index == 0){
            costField.innerText = `${fieldValue * 150} din`;
        } else if (index == 1){
            costField.innerText = `${fieldValue * 120} din`;
        } else if (index == 2){
            costField.innerText = `${fieldValue * 70} din`;
        }

        numberField.value = fieldValue;
    }

    if (addToCartButton && product) {
        addToCartButton.className = `addToCart bg-yellow-500 w-[65%] text-sm lg:text-base text-red-500 transition-colors duration-150 my-2 rounded-lg`;
        addToCartButton.innerHTML = `ADDED TO CART`
        
        const selectedProduct = document.createElement('div');
        selectedProduct.className = 'flex flex-row w-full lg:w-full mb-2 py-2 border rounded-md';

        
        const productImage = document.createElement('img');
        productImage.src = product.querySelector('img').src; 
        productImage.className = 'w-[3rem] md:w-[3.4rem] lg:w-[3.5rem] mr-5';

        
        const productDetails = document.createElement('div');
        productDetails.className = 'flex flex-col justify-center items-start text-white';

        
        const productName = document.createElement('label');
        productName.textContent = product.querySelector(`.name`).innerText; 
        const productCost = document.createElement('span');
        productCost.textContent = product.querySelector(`.cost`).innerText; 
        
        
        const numericTotal = parseFloat(product.querySelector('.cost').innerText);

        
        total += numericTotal;

        

        
    



        
        productDetails.appendChild(productName);
        productDetails.appendChild(productCost);

        
        selectedProduct.appendChild(productImage);
        selectedProduct.appendChild(productDetails);

        
        selectedProductsContainer.appendChild(selectedProduct);
    }

    realOrderButton.classList.remove(`hidden`);

    
});








const chocolateRadioButton = document.querySelector('input[type="radio"][name="chocolate"]');
const chocolateBoxRadioButton = document.querySelector('input[type="radio"][name="chocolate box"]');
const champagneRadioButton = document.querySelector('input[type="radio"][name="champagne"]');

function handleProductSelection(productName) {
    
    const selectedProductContainer = document.createElement('div');
    selectedProductContainer.className = 'flex flex-row w-full lg:w-full mb-2 py-2 border rounded-md';

    
    const productImage = document.createElement('img');
    productImage.src = `../images/${productName.replace(/\s+/g, '-').toLowerCase()}.png`;

    productImage.className = 'w-[3rem] md:w-[3.4rem] lg:w-[3.5rem] mr-5';

    
    const productDetails = document.createElement('div');
    productDetails.className = 'flex flex-col justify-center items-start text-white';

    
    const productNameLabel = document.createElement('label');
    productNameLabel.textContent = productName.charAt(0).toUpperCase() + productName.slice(1); 
    console.log(productName);
    const productCost = document.createElement('span');
    productCost.textContent = '500 din'; 

    
    productDetails.appendChild(productNameLabel);
    productDetails.appendChild(productCost);

    
    selectedProductContainer.appendChild(productImage);
    selectedProductContainer.appendChild(productDetails);

    
    selectedProductsContainer.appendChild(selectedProductContainer);
}

chocolateRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
        total += 500;
        handleProductSelection('Chocolate bar');
    }
});

chocolateBoxRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
        total += 500;
        handleProductSelection('chocolate');
    }
});

champagneRadioButton.addEventListener('change', (event) => {
    if (event.target.checked) {
        total += 500;
        handleProductSelection('champagne');
    }
});



realOrderButton.addEventListener('click', () => {
    totalPriceModal.innerHTML = `${total} din`
    let totalProcent = (total / 100);
    
    if (cardRadioButton.checked){
        let discountedPrice = total - (totalProcent * 10);
        if (total >= 2000){
            discountOption.innerHTML = `10% discount! Old price ${total}`;
            totalPriceModal.innerHTML = `${discountedPrice} din`
        }
    }
    

    // vracanje na prva podesavanja
    selectedProducts = [];
    orderTotal = 0;

    
});

closeModalButton.addEventListener(`click`, () => {
    selectedProductsContainer.innerHTML = ``;
    total = 0;
    totalPriceModal.innerHTML = `${total} din`
    
    chocolateBoxRadioButton.checked = false;
    chocolateRadioButton.checked = false;
    champagneRadioButton.checked = false;

    allAddToCartButtons.forEach(element => {
        element.closest(`.addToCart`).className = `addToCart bg-red-500 w-[65%] text-sm lg:text-base text-white my-2 rounded-lg`;
        element.closest(`.addToCart`).innerHTML = `ADD TO CART`;
    })
});


finalOrder.addEventListener(`click`, () => {
    selectedProductsContainer.innerHTML = ``;
    realOrderButton.classList.add(`hidden`);
    total = 0;
    totalPriceModal.innerHTML = `${total} din`
    discountOption.innerHTML = `No discount`;

    disclaimerSectionModal.innerHTML = `You've successfully ordered! Thanks for using our services!`
});




initOrderButton.addEventListener(`click`, () => {
    initDiv.classList.add(`hidden`);
    heroDiv.classList.remove(`hidden`);
});

