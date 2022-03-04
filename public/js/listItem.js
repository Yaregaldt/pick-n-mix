const newProductAdd = async (event) => {
  event.preventDefault();

  const product_id = document.querySelector("#edit-name").value.trim(); //add in items id
  const quantity = document.querySelector("#edit-name").value.trim(); //add in quantity id

  if (product_id && quantity < 0) {
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
};

const plusProduct = (event) => {
  event.preventDefault();

  var quantity_val = document.querySelector(".edit-input box").value.trim(); // addin the box value

  if (box_quantity >= 0) {
    quantity_val++;
  }

  document.querySelectory(".edit-input box").value = quantity_val; // edit input box name
};

const minusProduct = (event) => {
  event.preventDefault();

  var quantity_val = document.querySelector(".edit-input box").value.trim(); // add in box value

  if (quantity_val > 0) {
    quantity_val--;
  }

  document.querySelectory(".edit-input box").value = quantity_val; // edit input box name
};

document.querySelectory(".edit-name").addEventListener("submit", newProductAdd);

document
  .querySelector(".edit-button-After")
  .addEventListener("click", plusProduct); //add in Name for button
document
  .querySelector(".edit-button-After")
  .addEventListener("click", minusProduct); //add in Name for button
