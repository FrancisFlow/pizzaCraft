//
// var size = $("#size").value;
// var toppings = $("#toppings").value;
// var crust = $("#crust").value;
// class Pizza {
//   constractor(size, topping, crust) {
//     this.size = size;
//     this.topping = toppings;
//     this.crust = crust;
//   }
// }

// var order= new Pizza(large, Peparoni, stuffed )

// var pizzaSizePrice=[1000, 800, 600, 400, 200];
// var pizzaSize= ["Mega", "Large", "Medium", "Small", "Tiny"];
//
// var crustPrice =[400, 300, 200, 100, 50];
// var crustChosen=["Peparoni", "Hawaiian"]
// var toppings = [300, 200, 300, 400, 500];
//
// function totalPrice (size, toppings, crust) {
//   pizzaSizePrice[]

// var x = document.getElementById("#size").value

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
    return askLocation;
  } else if (document.querySelector("#deliveryOption").value=="No"){
    return console.log(document.querySelector("#deliveryOption").value);
  }
}
