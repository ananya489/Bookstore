// This function will be called when a user adds a book to the cart
let cart = [];

function addToCart(bookTitle, price) {
  const book = {
    title: bookTitle,
    price: price
  };

  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
  alert(bookTitle + " has been added to your cart!");
}

// Update the cart page with cart items
window.onload = function() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("total");

  if (cartItems.length > 0) {
    cartContainer.innerHTML = "";
    let total = 0;
    cartItems.forEach(item => {
      cartContainer.innerHTML += `<p>${item.title} - ${item.price}</p>`;
      total += parseFloat(item.price.replace("Rs.", ""));
    });
    totalContainer.innerHTML = `<p>Total: Rs.${total.toFixed(2)}</p>`;
  }
};

// Handle checkout (for simplicity, just clear the cart in this case)
function checkout() {
  localStorage.removeItem("cart");
  alert("Thank you for your purchase!");
  window.location.href = "index.html"; // Redirect back to the homepage
}
