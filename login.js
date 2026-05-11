function validateForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (!email) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (!password) {
    passwordError.textContent = "Password is required.";
    valid = false;
  }

  if (valid) {
    alert("Login successful!");
  }
}
