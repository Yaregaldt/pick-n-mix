// const updateProduct = async (event) => {
//   event.preventDefault();

//   const item = document.querySelector("#edit-name").value.trim(); //add in items id
//   const quantity = document.querySelector("#edit-name").value.trim(); //add in quantity id

//   if (item && quantity < 0) {
//     const response = await fetch("/api/list", {
//       method: "PUT",
//       body: JSON.stringify({ quantity, product_id }),
//       headers: { "Content-Type": "application/json" },
//     });
//     if (response.ok) {
//       alert("Item Updated");
//       document.location.replace("/list"); //To refresh page double check path
//     }
//   } else {
//     alert("Failed to add product to list");
//   }
// };

const delButtons = document.querySelectorAll("#bye");

for (const button of delButtons) {
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

  const updateButtons = document.querySelectorAll("#update");

  for (const button of updateButtons) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      updateProduct(event);
    });

    const updateProduct = async (event) => {
      const quantity_value = event.target.getAttribute("name");
      var id = parseInt(event.target.getAttribute("name"));

      var valueSelector = `#quantity-val${quantity_value}`;

      var quantity = parseInt(document.querySelector(`${valueSelector}`).value);
      console.log(quantity);
      console.log(id);
      console.log("update working");

      if (id && quantity > 0) {
        console.log("is this passing?");
        const response = await fetch(`/api/list/${id}`, {
          method: "PUT",
          body: JSON.stringify({ quantity, id }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          console.log("success");
          window.location.reload();
        }
      } else {
        window.location.reload();
        return;
      }
    };
  }
}
const deleteList = async () => {
  if (confirm("Cick okay to clear your list.") == true) {
    const response = await fetch("/api/list/", {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/list");
    }
  }
};

document.querySelector("#hello").addEventListener("click", deleteList); //add in mame
