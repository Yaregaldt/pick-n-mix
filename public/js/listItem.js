const newProductAdd = async (event) => {
  event.preventDefault();

  const item = document.querySelector("#edit-name").value.trim(); //add in items id
  const ammount = document.querySelector("#edit-name").value.trim(); //add in quantity id

  if (item && ammount < 0) {
    const response = await fetch("/api/list", {
      method: "POST",
      body: JSON.stringify({}), //add in body values
      headers: { "Content-Type": "application/json" },
    });
    // if (response.ok) {
    //   document.location.replace('/pagepath')   Do we want to refresh page each time they add an item?
    // }
  } else {
    alert("Failed to add product to list");
  }
};
