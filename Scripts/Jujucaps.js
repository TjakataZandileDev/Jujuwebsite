function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectQuantity(quantity, id) {
  var button = document.querySelector(`[onclick="toggleDropdown('${id}')"]`);
  button.innerHTML = quantity + ' <span class="dropdown-icon">&#9660;</span>';
  document.getElementById(id).style.display = "none";
}

function selectLocation(location, id) {
  var button = document.querySelector(`[onclick="toggleDropdown('${id}')"]`);
  button.innerHTML = location + ' <span class="dropdown-icon">&#9660;</span>';
  document.getElementById(id).style.display = "none";
}

let cartCount = 0;
let cartItems = [];

function addToCart(dropdownId, productName) {
  var button = document.querySelector(`[onclick="toggleDropdown('${dropdownId}')"]`);
  var quantity = parseInt(button.textContent.trim());
  var priceElement = document.querySelector(`img[alt="${productName}"]`);
  var price = parseFloat(priceElement.getAttribute('data-price'));
  var existingItem = cartItems.find(item => item.name === productName);
  if (existingItem) {
      existingItem.quantity += quantity;
  } else {
      cartItems.push({ name: productName, quantity: quantity, price: price });
  }
  cartCount += quantity;
  document.getElementById('cartCounter').textContent = cartCount;
}

function resetCart() {
  cartCount = 0;
  cartItems = [];
  document.getElementById('cartCounter').textContent = cartCount;
  document.getElementById('cartItems').innerHTML = '';
  document.getElementById('cartTotal').textContent = '0.00';
}

function openCartModal() {
  var modal = document.getElementById("cartModal");
  modal.style.display = "block";
  updateCartModal();
}

function closeCartModal() {
  var modal = document.getElementById("cartModal");
  modal.style.display = "none";
}

function updateCartModal() {
  var cartItemsContainer = document.getElementById('cartItems');
  var cartTotal = 0;
  cartItemsContainer.innerHTML = '';
  cartItems.forEach((item, index) => {
      var itemTotal = item.price * item.quantity;
      cartTotal += itemTotal;
      var cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
          <span>${item.name} - Quantity: ${item.quantity} - Total: R${itemTotal.toFixed(2)}</span>
          <button class="delete-btn" onclick="deleteCartItem(${index})">Delete</button>
      `;
      cartItemsContainer.appendChild(cartItemDiv);
  });
  document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
}

function deleteCartItem(index) {
  var item = cartItems[index];
  cartCount -= item.quantity;
  cartItems.splice(index, 1);
  document.getElementById('cartCounter').textContent = cartCount;
  updateCartModal();
}

window.onclick = function(event) {
  if (!event.target.matches('.quantity-btn')) {
      var dropdowns = document.getElementsByClassName("quantity-dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
  if (event.target == document.getElementById("cartModal")) {
      closeCartModal();
  }
  if (event.target == document.getElementById("checkoutModal")) {
      closeCheckoutModal();
  }
}

function openCheckoutModal() {
  var modal = document.getElementById("checkoutModal");
  modal.style.display = "block";
}

function closeCheckoutModal() {
  var modal = document.getElementById("checkoutModal");
  modal.style.display = "none";
}

function openpaymentModal() {
  var modal = document.getElementById("paymentModal");
  modal.style.display = "block";
}

function closepaymentModal() {
  var modal = document.getElementById("paymentModal");
  modal.style.display = "none";
}