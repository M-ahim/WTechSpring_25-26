/**
 * Product Management Logic
 * Handles real-time calculation and user alerts
 */

// 1. Setup our constants
const UNIT_PRICE = 1000;
const DAYS_IN_MONTH = 30;

// 2. Grab the elements from the HTML
const quantityField = document.getElementById('qtyInput');
const resultField = document.getElementById('totalDisplay');

// 3. Create a function to handle the math
const calculateTotal = () => {
    let quantity = parseFloat(quantityField.value);

    // Basic validation: if input is empty or not a number, set to 0
    if (isNaN(quantity) || quantity < 0) {
        if (quantity < 0) alert("Wait, you can't have negative quantity!");
        quantity = 0;
        quantityField.value = ""; 
    }

    // The core calculation: Price * Qty * 30 days
    const grandTotal = UNIT_PRICE * quantity * DAYS_IN_MONTH;

    // Display the result
    resultField.value = "$" + grandTotal.toLocaleString();

    // Check if they hit the gift threshold
    if (grandTotal > 1000) {
        // Using a slight delay so the UI updates before the alert pops up
        setTimeout(() => {
            alert("Congrats! You've earned a gift coupon for this order.");
        }, 100);
    }
};

// 4. Listen for typing in the quantity box
quantityField.addEventListener('input', calculateTotal);