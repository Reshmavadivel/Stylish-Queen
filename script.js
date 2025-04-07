// script.js
let cart = [];
const cartCountDisplay = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items');
const cartPanel = document.getElementById('cart-panel');
const closeCartBtn = document.querySelector('.close-cart');
const cartIcon = document.querySelector('.cart-icon');

// Open cart panel
cartIcon.addEventListener('click', () => {
  cartPanel.classList.add('open');
});

// Close cart panel
closeCartBtn.addEventListener('click', () => {
  cartPanel.classList.remove('open');
});

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const name = card.getAttribute('data-name');
    const price = parseInt(card.getAttribute('data-price'));

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();
  });
});

function updateCart() {
  cartCountDisplay.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
    cartItemsList.appendChild(li);
  });
}
