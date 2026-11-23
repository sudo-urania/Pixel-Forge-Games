"use strict";

/*    Final Exam 2
      Gaming Company Website

      Author: Sarah Imhoff
      Date: 11/16/2026

      Filename: gamescart.js
*/

// Store a reference to the cart display area
let cartContainer = document.getElementById("cartContainer");

// Run displayCart when the page finishes loading
window.addEventListener("load", displayCart);

// Create the function used to display the shopping cart
function displayCart() {

   // Check whether the cart contains any items
   if (sessionStorage.getItem("itemsInCart")) {

      // Retrieve the number of items stored in the cart
      let itemTotal = parseInt(sessionStorage.getItem("itemsInCart"));

      // Create a variable to store the subtotal
      let subtotal = 0;

      // Create a new table for the shopping cart
      let cartTable = document.createElement("table");

      // Give the table an id
      cartTable.id = "cartTable";

      // Create the table heading row
      let tableHeader = `<tr><th>Name</th><th>Description</th><th>Price</th></tr>`;

      // Add the heading row to the table
      cartTable.innerHTML = tableHeader;

      // Loop through each stored cart item
      for (let i = 1; i <= itemTotal; i++) {

         // Retrieve the current item and split it into an array
         let productArr = sessionStorage.getItem("cartItem" + i).split(" & ");

         // Store the game name
         let gameName = productArr[1];

         // Store the game description
         let description = productArr[2];

         // Store the game price
         let price = parseFloat(productArr[3]);

         // Store the quantity
         let quantity = parseInt(productArr[4]);

         // Calculate the cost for the selected quantity
         let itemPrice = price * quantity;

         // Add the item cost to the subtotal
         subtotal += itemPrice;

         // Create a new table row
         let newRow = document.createElement("tr");

         // Display the game information
         newRow.innerHTML = `<td>${gameName}</td><td>${description}</td><td>$${itemPrice.toFixed(2)}</td>`;

         // Add the row to the table
         cartTable.appendChild(newRow);
      }

      // Calculate the 11 percent sales tax
      let salesTax = subtotal * 0.11;

      // Calculate the final total
      let finalTotal = subtotal + salesTax;

      // Create today's date
      let today = new Date();

      // Create the subtotal row
      let subtotalRow = document.createElement("tr");
      subtotalRow.innerHTML = `<th colspan="2">Subtotal</th><td>$${subtotal.toFixed(2)}</td>`;
      cartTable.appendChild(subtotalRow);

      // Create the sales tax row
      let taxRow = document.createElement("tr");
      taxRow.innerHTML = `<th colspan="2">Sales Tax (11%)</th><td>$${salesTax.toFixed(2)}</td>`;
      cartTable.appendChild(taxRow);

      // Create the final total row
      let totalRow = document.createElement("tr");
      totalRow.innerHTML = `<th colspan="2">Total</th><td>$${finalTotal.toFixed(2)}</td>`;
      cartTable.appendChild(totalRow);

      // Create the date row
      let dateRow = document.createElement("tr");
      dateRow.innerHTML = `<th colspan="2">Date</th><td>${today.toLocaleDateString()}</td>`;
      cartTable.appendChild(dateRow);

      // Add the completed table to the page
      cartContainer.appendChild(cartTable);

   } else {

      // Display a message if the cart is empty
      cartContainer.textContent = "Your cart is empty.";
   }
}