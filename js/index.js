
function totalPrice(size, crust, toppings) {
  var size = document.querySelector("#size").value;
  var crust = document.querySelector("#crust").value;
  var toppings = document.querySelector("#toppings").value;
  var quantity = document.querySelector("#quantity").value;
  size = parseInt(size);
  crust = parseInt(crust);
  toppings = parseInt(toppings);
  quantity = parseInt(quantity);
  return (size + crust + toppings) * quantity;
}

// display price to users

function showSizePrice(size) {
  var size = document.querySelector("#size").value;

  return document.querySelector("#pizzaSize").innerHTML = "Price is " + size;
}

function showCrustPrice(crust) {
  var crust = document.querySelector("#crust").value;
  return document.querySelector("#crust-Selected").innerHTML = "Price is " + crust;

}

function showToppingsPrice(toppings) {
  var toppings = document.querySelector("#toppings").value;
  return document.querySelector("#toppings-selected").innerHTML = "Price is " + toppings;
}

function showTotalPrice() {
  return document.querySelector("#checkList").innerHTML = "Total price is " + totalPrice();
}
// Delivery function
function deliverMe() {
  if (document.querySelector("#deliveryOption").value == "Yes") {
    var askLocation = prompt("Please enter delivery location");
    return alert("Your pizza will be delivered to " + askLocation + " at 300");
  } else if (document.querySelector("#deliveryOption").value == "No") {
    return console.log(document.querySelector("#deliveryOption").value);
  }
}

// oncheckout

function checkOut() {
  if(document.querySelector("#deliveryOption").value == "Yes") {
    return document.querySelector("#deliveryTotal").innerHTML = "Delivery charge is 300";
  }
  else {
    return alert("Thank you for choosing PizzaCraft.");
  }
}
