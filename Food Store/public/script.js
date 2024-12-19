// Initialize an empty cart
let cart = [];

// Function to update the cart display
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  // Clear current cart items
  cartItemsContainer.innerHTML = '';

  // Add cart items to the display
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  // Update total price
  cartTotal.textContent = total;
}

// Handle adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const name = event.target.getAttribute('data-name');
    const price = parseFloat(event.target.getAttribute('data-price'));
    
    // Add item to the cart
    cart.push({ name, price });

    // Update cart display
    updateCart();
    
    // Optionally, show a confirmation message
    alert(`${name} has been added to your cart.`);
  });
});

// Handle checkout (for now, just clear the cart and show a message)
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length > 0) {
    // Show confirmation message in the console
    console.log('Congratulations, your order has been placed successfully!');

    // Show alert for user
    alert('Congratulations, your order has been placed successfully!');

    // Simulate order details in the console
    console.log('Order Details:');
    cart.forEach(item => {
      console.log(`${item.name} - $${item.price}`);
    });

    // Show order details on the page
    const orderConfirmationSection = document.getElementById('order-confirmation');
    const orderDetailsContainer = document.getElementById('order-details');
    
    // Make the order confirmation section visible
    orderConfirmationSection.style.display = 'block';

    // Add order details to the order confirmation section
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      orderDetailsContainer.appendChild(li);
    });

    // Clear the cart
    cart = [];
    updateCart(); // Update the display to reflect the empty cart
  } else {
    alert('Your cart is empty.');
  }
});
// email js
function sendMail(){
  var params = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      contact : document.getElementById("phone").value,
      message : document.getElementById("message").value
  }
  emailjs.send("service_idri7tz","template_vajzqsd",params).then(function (res){
      alert("Your data has been sent successfully! "+res.status);
  })
}



