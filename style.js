function updateTotal() {
    const quantity = document.getElementById("quantity").value;
    const price = 15; // Assuming price is Rs. 15
    const total = price * quantity;
    document.getElementById("total").innerText = total;
  }