//---------Sgin in----------
//JS für die Sign in

// Hinweis feld
function showHint(inputId, message) {
  const allHints = document.querySelectorAll(".hint");
  allHints.forEach((h) => {
    h.classList.remove("visible");
    h.textContent = "";
  });

  const hintEl = document.getElementById("hint-" + inputId);
  if (hintEl) {
    hintEl.textContent = message;
    hintEl.classList.add("visible");
  }
}
// hinweis
document.getElementById("username").addEventListener("focus", () => {
  showHint("username", "Please enter your username.");
});
document.getElementById("email").addEventListener("focus", () => {
  showHint("email", "Please enter a valid email address.");
});
document.getElementById("password").addEventListener("focus", () => {
  showHint("password", "Please enter your password.");
});
document.getElementById("confirmPassword").addEventListener("focus", () => {
  showHint("confirmPassword", "Please confirm your password.");
});

// registrieren Funktion
function register() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
}

// Fehlerbox
[username, email, password, confirmPassword].forEach((el) =>
  el.classList.remove("error")
);
errorBox.style.display = "none";
errorBox.textContent = "";

let hasError = false;

if (!username.value.trim()) {
  username.classList.add("error");
  hasError = true;
}
if (!email.value.trim()) {
  email.classList.add("error");
  hasError = true;
}
if (!password.value) {
  password.classList.add("error");
  hasError = true;
}
if (!confirmPassword.value) {
  confirmPassword.classList.add("error");
  hasError = true;
}
if (!gender) {
  hasError = true;
}
if (!terms.checked) {
  hasError = true;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email.value && !emailPattern.test(email.value.trim().toLowerCase())) {
  email.classList.add("error");
  errorBox.textContent = "Please enter a valid email address.";
  errorBox.style.display = "block";
  return;
}

if (
  password.value &&
  confirmPassword.value &&
  password.value !== confirmPassword.value
) {
  password.classList.add("error");
  confirmPassword.classList.add("error");
  errorBox.textContent = "Passwords do not match.";
  errorBox.style.display = "block";
  return;
}

if (hasError) {
  errorBox.textContent = "Please complete all required fields marked in red.";
  errorBox.style.display = "block";
  return;
}
// localStorage

let users = JSON.parse(localStorage.getItem("users")) || "[]";

const usernameExists = users.some(
  (u) => username.toLowerCase() === username.value.trim().toLowerCase()
);
cosnt emailExists = users.some(
    (u) => u.email === email.value.trim().toLowerCase()
);
if (usernameExists) {
  username.classList.add("error");
  errorBox.textContent = "Username already exists.";
  errorBox.style.display = "block";
  return;   
    
  if (emailExists) {
    email.classList.add("error");
    errorBox.textContent = "Email already exists.";
    errorBox.style.display = "block";
    return;
  }

  const newUser = {
    username: username.value.trim(),
    email: email.value.trim().toLowerCase(),
    password: password.value,           
    gender: gender.value,
  };    

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));


  
}
