/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;

function loadCart() {
  const cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tableBody.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
const tableBody = document.createElement( 'tbody' );
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  const tableElement = document.getElementById( 'cart' );
  tableElement.appendChild( tableBody );

  for ( let i = 0; i < cart.items.length; i++ ) {
    const tableRow = document.createElement( 'tr' );
    tableBody.appendChild( tableRow );

    const tableData1 = document.createElement( 'td' );
    tableRow.appendChild( tableData1 );

    const tableDataIndex = document.createElement( 'td' );
    tableDataIndex.id = cart.items[i].product;
    tableData1.appendChild( tableDataIndex );
    tableDataIndex.textContent = 'X';

    const tableData2 = document.createElement( 'td' );
    tableRow.appendChild( tableData2 );
    tableData2.textContent = cart.items[i].product;

    const tableData3 = document.createElement( 'td' );
    tableRow.appendChild( tableData3 );
    tableData3.textContent = cart.items[i].quantity;

  }
}

function removeItemFromCart( event ) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

  let deleteItem = event.target.id;
  let newItemArr = [];
  for ( let i = 0; i < cart.items.length; i++ ) {
    if ( cart.items[i].product !== deleteItem ) {
      newItemArr.push( cart.items[i] );
    }
  }
  localStorage.setItem( 'cart', JSON.stringify( newItemArr ) );
  clearCart();
  showCart();
  location.reload();

}

// This will initialize the page and draw the cart on screen
renderCart();
