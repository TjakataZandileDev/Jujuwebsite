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
function openCategoryPage(button) {
  if (button === 'shoes') {
      window.open("jujushoes.html","_blank");
  } else if (button === 'sweater') {
      window.open("Jujusweaters.html","_blank");
  } else if (button === 'beauty') {
      window.open("Jujubeauty.html","_blank");
  } else if (button === 'accesories') {
      window.open("Jujusaccesories.html","_blank");
  } else if (button === 'bags') {
      window.open("Jujubags.html","_blank");
  } else if (button === 'jewellary') {
      window.open("jujujewellary.html","_blank");
  } else if (button === 'sunglasses') {
      window.open("jujusunglasses.html","_blank");
  } else if (button === 'dress') {
    window.open("Jujudresses.html","_blank");
  }
  console.log('done');
}
function closeCategoryPage(button) {
  if (button === 'shoes') {
      window.close("jujushoes.html","_blank");
  } else if (button === 'sweater') {
      window.close("Jujusweaters.html","_blank");
  } else if (button === 'beauty') {
      window.close("Jujubeauty.html","_blank");
  } else if (button === 'accesories') {
      window.close("Jujusaccesories.html","_blank");
  } else if (button === 'bags') {
      window.close("Jujubags.html","_blank");
  } else if (button === 'jewellary') {
      window.close("jujujewellary.html","_blank");
  } else if (button === 'sunglasses') {
      window.close("jujusunglasses.html","_blank");
  } else if (button === 'dress') {
    window.close("Jujudresses.html","_blank");
  }
  console.log('done');
}
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;

function showSlides1() {
  let slides = document.getElementsByClassName("mySlides1");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) { slideIndex1 = 1 }
  slides[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides1, 4000); // Change image every 2 seconds
}

function showSlides2() {
  let slides = document.getElementsByClassName("mySlides2");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 }
  slides[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}

function showSlides3() {
  let slides = document.getElementsByClassName("mySlides3");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) { slideIndex3 = 1 }
  slides[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}

showSlides1();
showSlides2();
showSlides3();

  // Get the modals
  var ecoCashModal = document.getElementById('ecoCashModal');
  var mpesaModal = document.getElementById('mpesaModal');

  // Get the buttons that open the modals
  var ecoCashBtn = document.getElementById('ecocashBtn');
  var mpesaBtn = document.getElementById('mpesaBtn');

  // Get the <span> elements that close the modals
  var closeEcoCashModal = document.getElementById('closeEcoCashModal');
  var closeMpesaModal = document.getElementById('closeMpesaModal');

  // When the user clicks the button, open the modal 
  function openecocashModal() {
    var modal = document.getElementById("ecoCashModal");
    modal.style.display = "block";
  }
  function closeecocashModal() {
    var modal = document.getElementById("ecoCashModal");
    modal.style.display = "none";
  }
  ecoCashBtn.onclick = function() {
    ecoCashModal.style.display = 'block';
  }
  mpesaBtn.onclick = function() {
    mpesaModal.style.display = 'block';
  }

  // When the user clicks on <span> (x), close the modal
  closeEcoCashModal.onclick = function() {
    ecoCashModal.style.display = 'none';
  }
  closeMpesaModal.onclick = function() {
    mpesaModal.style.display = 'none';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == ecoCashModal) {
      ecoCashModal.style.display = 'none';
    }
    if (event.target == mpesaModal) {
      mpesaModal.style.display = 'none';
    }
  }

  // Function to handle Eco-Cash payment
  function payWithEcoCash() {
    var phone = document.getElementById('ecocashPhone').value;
    var amount = document.getElementById('ecocashAmount').value;

    fetch('/pay/ecocash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone: phone, amount: amount })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      ecoCashModal.style.display = 'none';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // Function to handle M-Pesa payment
  function payWithMpesa() {
    var phone = document.getElementById('mpesaPhone').value;
    var amount = document.getElementById('mpesaAmount').value;

    fetch('/pay/mpesa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone: phone, amount: amount })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      mpesaModal.style.display = 'none';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }