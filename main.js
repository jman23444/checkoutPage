document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const cartItems = document.querySelectorAll(".cart-item");
    const totalDisplay = document.getElementById("price-display"); 
    const finalTotalDisplay = document.getElementById("total-display"); 
    const discountPercentage = 20; 

    function updateTotal() {
        let total = 0;
        cartItems.forEach(cartItem => {
            const priceDisplay = cartItem.querySelector("#price-here");
            const quantityDisplay = cartItem.querySelector("#quantity-box-1 p");
            const basePrice = parseFloat(cartItem.dataset.price);
            const quantity = parseInt(quantityDisplay.textContent, 10);

            // Calculating item price
            const itemTotal = basePrice * quantity;
            priceDisplay.textContent = `$${itemTotal.toFixed(2)}`;

            // Adding to total
            total += itemTotal;
        });

        // Updating total product cost
        totalDisplay.textContent = `$${total.toFixed(2)}`;

        // Applying 20% discount
        const discountAmount = (discountPercentage / 100) * total;
        const discountedTotal = total - discountAmount;

        // Updating total display
        finalTotalDisplay.textContent = `$${discountedTotal.toFixed(2)}`;
    }

    cartItems.forEach(cartItem => {
        const quantityDisplay = cartItem.querySelector("#quantity-box-1 p");
        const plusButton = cartItem.querySelector("#quantity-box-2");
        const minusButton = cartItem.querySelector("#quantity-box-3");

        // Incrementing quantity
        plusButton.addEventListener("click", function () {
            let currentQuantity = parseInt(quantityDisplay.textContent, 10);
            if (currentQuantity < 99) {
                quantityDisplay.textContent = currentQuantity + 1;
                updateTotal();
            }
        });

        // Decrementing quantity 
        minusButton.addEventListener("click", function () {
            let currentQuantity = parseInt(quantityDisplay.textContent, 10);
            if (currentQuantity > 1) {
                quantityDisplay.textContent = currentQuantity - 1;
                updateTotal();
            }
        });
    });

    // Initial calculations to set correct totals on page load
    updateTotal();
});