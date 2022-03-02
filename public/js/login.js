// Log in function
const loginForm = async (event) => {
  event.preventDevault();

  const email = document.querySelector("#edit-later1").value.trim(); //edit the id email name after
  const password = document.querySelector("#edit-later2").value.trim(); //edit the id pass name after

  if (email && password) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage"); //Send to homepage
    } else {
      alert(response.statusText);
    }
  }
};

// Sign up function
const signupForm = async (event) => {
  event.preventDevault();

  const name = document.querySelector("#edit-later3").value.trim(); //edit the id email name after
  const email = document.querySelector("#edit-later1").value.trim(); //edit the id pass name after
  const password = document.querySelector("#edit-later2").value.trim(); //edit the id pass name after

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage"); //Send back to homepage
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".edit-name") // edit the form name we choose
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".edit-name") //edit the form name we choose
  .addEventListener("submit", signupFormHandler);
