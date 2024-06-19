function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price, quantity) {
  let cart = getCart();
  let found = cart.find((item) => item.name === name);
  if (found) {
    found.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
  saveCart(cart);
  displayCart();
}

function displayCart() {
  let cart = getCart();
  let cartTableBody = document.querySelector("#cart-table tbody");
  cartTableBody.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()} VND</td>
            <td><input type="number" value="${
              item.quantity
            }" min="1" onchange="updateQuantity('${item.name}',value)"></td>
            <td>${(item.price * item.quantity).toLocaleString()} VND</td>
            <td><button onclick="removeFromCart('${
              item.name
            }')">Xóa</button></td>
        `;
    cartTableBody.appendChild(row);
    totalPrice += item.price * item.quantity;
  });

  document.getElementById(
    "total-price"
  ).innerText = `${totalPrice.toLocaleString()} VND`;
}

function updateQuantity(name, quantity) {
  let cart = getCart();
  let found = cart.find((item) => item.name === name);
  if (found) {
    found.quantity = parseInt(quantity);
  }
  saveCart(cart);
  displayCart();
}

function removeFromCart(name) {
  let cart = getCart();
  cart = cart.filter((item) => item.name !== name);
  saveCart(cart);
  displayCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

function updateCart() {
  alert("Đã cập nhật thành công");
}

window.onload = displayCart;
