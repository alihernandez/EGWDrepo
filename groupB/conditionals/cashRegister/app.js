function cashRegister(cart) {
    var items = Object.keys(cart); //array of items by key
    var sum = 0;

    for (var i= 0; i < items.length; i++) {
        var itemName = items[i];
        var itemPrice = cart[itemName];
        sum += Number.parseFloat(itemPrice);
        }

        return sum;
}

document.getElementById("btn").innerHTML = cashRegister(cart);

console.log(cashRegister(cart));