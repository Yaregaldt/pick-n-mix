const productClick = async (event) => {
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

  if (event.target.hasAttribute("id")) {
    const quantity_value = event.target.getAttribute("id");
    const product_id = parseInt(event.target.getAttribute("id"));

    valueSelector = `#quantity-val${quantity_value}`;
    const quantity = parseInt(document.querySelector(`${valueSelector}`).value);

    if (product_id) {
      const response = await fetch(`/api/list/${product_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.reload();
      }
    } else {
      alert("Failed to add product to list");
    }
  }

  if (event.target.hasAttribute("name")) {
    const quantity_value = event.target.getAttribute("name");
    const product_id = parseInt(event.target.getAttribute("name"));

    valueSelector = `#quantity-val${quantity_value}`;
    const quantity = parseInt(document.querySelector(`${valueSelector}`).value);

    if (product_id && quantity > 0) {
      const response = await fetch("/api/list/", {
        method: "POST",
        body: JSON.stringify({ quantity, product_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Item added");
        document.querySelector(`${valueSelector}`).value = "0";
      }
    } else {
      alert("Failed to add product to list");
    }
  }
};

document.querySelector(".item-choice").addEventListener("click", productClick);
