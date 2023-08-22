

var products = [];
var discounts = 0;
var totalPrice = 0;
var grandTotalPrice = 0;

function setProduct(price, name)
{
    products.push({
        name: name,
        price: price
    });

    let productsHtml = ``;

    products.map((value, index) => {
        totalPrice = (totalPrice+value.price);

        productsHtml+=`<li class="item">${value.name} - ${value.price}Tk &nbsp;&nbsp;<button type="button" onClick="removeItem(this, ${index})" class="rounded-full bg-red-800 text-white px-1">X</button>`;
    });

    if (discounts > 0)
    {
        if (totalPrice >= 200)
        {
            discounts = ((totalPrice*20)/100);
        }
        else
        {
            discounts = 0;
        }
        totalPrice = totalPrice - discounts;
        document.getElementById('discount').innerHTML = discounts;
    }

    document.getElementById('item-name').innerHTML = productsHtml;
    document.getElementById('total-price').innerHTML = totalPrice.toFixed(2);

    let couponButton = document.getElementById('applyCouponButton');
    let couponeInput = document.getElementById('applyCouponInput');
    if (totalPrice >= 200)
    {
        couponButton.disabled = false;
        couponeInput.disabled = false;
    }
    else
    {
        couponButton.disabled = true;
        couponeInput.disabled = true;
    }

    if (totalPrice > 0)
    {
        document.getElementById('make-purchase').disabled = false;
    }
    else
    {
        document.getElementById('make-purchase').disabled = true;
    }

    setGrandTotal(totalPrice, discounts);
}

function setDiscount()
{
    if (document.getElementById('applyCouponInput').value != "SELL200")
    {
        alert("Invalid coupon code!");
        return;
    }

    if (totalPrice >= 200 && discounts == 0)
    {
        discounts = ((totalPrice*20)/100);
        document.getElementById('discount').innerHTML = discounts;
        setGrandTotal(totalPrice, discounts);
    }
}

function removeItem(e, index)
{
    products.splice(index);
    let productsHtml = ``;

    totalPrice = 0;
    grandTotalPrice = 0;
    // discounts = 0;

    products.map((value, index) => {
        totalPrice = (totalPrice+value.price);
        productsHtml+=`<li class="item">${value.name} - ${value.price}Tk &nbsp;&nbsp;<button type="button" onClick="removeItem(this, ${index})" class="rounded-full bg-red-800 text-white px-1">X</button>`;
    });

    if (discounts > 0)
    {
        if (totalPrice >= 200)
        {
            discounts = ((totalPrice*20)/100);
        }
        else
        {
            discounts = 0;
        }
        totalPrice = totalPrice - discounts;
        document.getElementById('discount').innerHTML = discounts;
    }

    document.getElementById('item-name').innerHTML = productsHtml;
    document.getElementById('total-price').innerHTML = totalPrice.toFixed(2);

    let couponButton = document.getElementById('applyCouponButton');
    let couponeInput = document.getElementById('applyCouponInput');
    if (totalPrice >= 200)
    {
        couponButton.disabled = false;
        couponeInput.disabled = false;
    }
    else
    {
        couponButton.disabled = true;
        couponeInput.disabled = true;
    }

    if (totalPrice > 0)
    {
        document.getElementById('make-purchase').disabled = false;
    }
    else
    {
        document.getElementById('make-purchase').disabled = true;
    }

    setGrandTotal(totalPrice, discounts);

    e.parentElement.remove();
    return;
}

function setGrandTotal(total, discount = 0)
{
    grandTotalPrice = total-discount;
    document.getElementById('total').innerHTML = grandTotalPrice.toFixed(2);
}