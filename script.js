const form = document.getElementById("form");
const input = document.querySelectorAll(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const email = form["email"].value;
  const password = form["password"].value;
  if (firstName === "") {
    addError("firstName", "First name cannot be empty");
  } else {
    removeError("firstName");
  }

  if (lastName === "") {
    addError("lastName", "Last name cannot be empty");
  } else {
    removeError("lastName");
  }

  if (email === "") {
    addError("email", "Email cannot be empty");
  } else if (!validateEmail(email)) {
    addError("email", "Email is not valid");
  } else {
    removeError("email");
  }

  if (password === "") {
    addError("password", "Password cannot be empty");
  } else {
    removeError("password");
  }
});

function addError(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.display = "block";
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  const small = formControl.querySelector("small");
  small.style.display = "none";
}

function validateEmail() {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
