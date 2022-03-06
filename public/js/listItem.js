const productClick = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("value")) {
    const value = event.target.getAttribute("value");
    valueSelector = `#quantity-val${value}`;
    var quantity = parseInt(document.querySelector(`${valueSelector}`).value);
    quantity++;
    document.querySelector(`${valueSelector}`).value = quantity;
  }

  if (event.target.hasAttribute("data-id")) {
    const value = event.target.getAttribute("data-id");
    valueSelector = `#quantity-val${value}`;
    var quantity = parseInt(document.querySelector(`${valueSelector}`).value);
    if (quantity > 0) {
      quantity--;
    }
    document.querySelector(`${valueSelector}`).value = quantity;
  }

  if (event.target.hasAttribute("name")) {
    const quantity_value = event.target.getAttribute("name");
    const product_id = parseInt(event.target.getAttribute("name"));

    valueSelector = `#quantity-val${quantity_value}`;
    console.log(valueSelector);
    const quantity = parseInt(document.querySelector(`${valueSelector}`).value);

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


document.querySelector(".item-choice").addEventListener("click", productClick);

