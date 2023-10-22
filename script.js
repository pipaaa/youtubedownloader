const products = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
let cartTotal = 0;

products.forEach((product) => {
  product.addEventListener("click", function () {
    const price = parseFloat(this.getAttribute("data-price"));
    cartTotal += price;
    cartItems.innerHTML += `<li>${this.parentElement.querySelector("h2").textContent} - $${price.toFixed(2)}</li>`;
    total.textContent = cartTotal.toFixed(2);
  });
});

document.getElementById("checkout").addEventListener("click", function () {
  // Aquí agregarías lógica para procesar el pago, como redirigir a una pasarela de pago.
});
