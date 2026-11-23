"use strict";

/*    Final Exam 2
      Gaming Company Website

      Author: Sarah Imhoff
      Date: 11/16/2026

      Filename: listgames.js
*/

// Store a reference to the container where the game table will display
let gameContainer = document.getElementById("gameContainer");

// Fetch the game information from the JSON file
fetch("thegames.json")

   // Convert the response into JSON data
   .then(response => response.json())

   // Use the JSON data to create the game table
   .then(json => makeGameTable(json))

   // Display any errors in the console
   .catch(error => console.log(error));

// Create the game inventory table
function makeGameTable(gameData) {

   // Create a new table element
   let gameTable = document.createElement("table");

   // Give the table an id
   gameTable.id = "gameTable";

   // Create the table heading row
   let headerRow = document.createElement("tr");

   // Loop through the properties of the first game
   for (let prop in gameData.thegames[0]) {

      // Create a table heading cell
      let headerCell = document.createElement("th");

      // Display the property name
      headerCell.textContent = prop;

      // Add the heading cell to the heading row
      headerRow.appendChild(headerCell);
   }

   // Add the heading row to the table
   gameTable.appendChild(headerRow);

   // Loop through each game in the JSON file
   for (let i = 0; i < gameData.thegames.length; i++) {

      // Create a new table row for the current game
      let tableRow = document.createElement("tr");

      // Loop through each property of the current game
      for (let prop in gameData.thegames[i]) {

         // Create a table data cell
         let tableCell = document.createElement("td");

         // Check whether the current property is Price
         if (prop === "Price") {

            // Display the price as currency
            tableCell.textContent = "$" + gameData.thegames[i][prop].toFixed(2);

         } else {

            // Display the current property value
            tableCell.textContent = gameData.thegames[i][prop];
         }

         // Check whether the quantity is less than 10
         if (prop === "Quantity" && gameData.thegames[i][prop] < 10) {

            // Give low quantity cells a light red background
            tableCell.style.backgroundColor = "lightcoral";
         }

         // Add the cell to the current row
         tableRow.appendChild(tableCell);
      }

      // Add the completed row to the table
      gameTable.appendChild(tableRow);
   }

   // Add the completed table to the page
   gameContainer.appendChild(gameTable);
}