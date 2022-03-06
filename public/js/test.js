const buttons = document.querySelectorAll("#bye");

for (const button of buttons) {
  button.addEventListener("click", async function (event) {
    const quantity_value = event.target.getAttribute("name");
    const product_id = parseInt(event.target.getAttribute("name"));

    valueSelector = `#quantity-val${quantity_value}`;

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
  });
}
