const newProductAdd = async (event) => {
  event.preventDefault();

  const product_id = document.querySelector("#edit-name").value.trim(); //add in items id
  const quantity = document.querySelector("#edit-name").value.trim(); //add in quantity id

  if (product_id && quantity < 0) {
    const response = await fetch("/api/list", {
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
};

document.querySelectory(".edit-name").addEventListener("submit", newProductAdd); // add in name
