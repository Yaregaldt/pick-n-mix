const updateProduct = async (event) => {
  event.preventDefault();

  const item = document.querySelector("#edit-name").value.trim(); //add in items id
  const quantity = document.querySelector("#edit-name").value.trim(); //add in quantity id

  if (item && quantity < 0) {
    const response = await fetch("/api/list", {
      method: "PUT",
      body: JSON.stringify({ quantity, product_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Item Updated");
      document.location.replace("/list"); //To refresh page double check path
    }
  } else {
    alert("Failed to add product to list");
  }
};

const deleteProduct = async (event) => {
  // make sure to check name
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id"); // check name
    // check name
    const response = await fetch(`/api/listitem/${id}`, {
      // path needs to be updated
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/api/list"); //To refresh page double check path
    } else {
      alert("Failed to delete product from list");
    }
  }
};

const deleteList = async (event) => {
  //check name

  if (confirm("Cick okay to clear your list.") == true) {
    const response = await fetch(`/api/list/${id}`, {
      //path needs to be updated
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/api/list");
    }
  }
};

document.querySelectory(".edit-name").addEventListener("submit", updateProduct); // add in name

document.querySelector(".edit-name").addEventListener("click", deleteProduct); // add in name

document.querySelector(".edit-name").addEventListener("click", deleteList); //add in mame
