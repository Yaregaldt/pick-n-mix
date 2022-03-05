// var quantityVal = document.querySelector("#quantity-val");

// quantityVal.onkeypress = function (e) {
//   console.log(e);
//   var maxlengthNumber = parseInt(quantityVal.getAttribute("maxlength"));
//   var inputValueLength = quantityVal.value.length + 1;
//   if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
//     return false;
//   }
//   if (maxlengthNumber < inputValueLength) {
//     return false;
//   }
// };

const minusProduct = async (event) => {
  event.preventDefault();

  // if (event.target.hasAttribute("data-id")) {
  //   document.querySelector("#quantity-val")
  //   minus = event.target.getAttribute("data-id");
  //   console.log("minus" + minus);
  //   quantityVal--;
  //   document.querySelector("#quantit-val").value = quantityVal;
  // }

  // if (event.target.hasAttribute("id")) {
  //   console.log("add");
  //   quantityVal++;
  // }

  if (event.target.hasAttribute("class")) {
    console.log("sumbit");
    const quantity_value = event.target.getAttribute("class");
    const product_id = parseInt(event.target.getAttribute("class"));

    console.log(product_id);
    valueSelector = `#quantity-val${quantity_value}`;
    console.log(valueSelector);
    const quantity = parseInt(document.querySelector(`${valueSelector}`).value);

    console.log(product_id);
    console.log(quantity);
    if (product_id && quantity > 0) {
      console.log("working?");
      const response = await fetch("/api/list/", {
        method: "POST",
        body: JSON.stringify({ quantity, product_id }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        alert("Item added");
      }
    } else {
      alert("Failed to add product to list");
    }
  }
};

document.querySelector(".item-choice").addEventListener("click", minusProduct);
