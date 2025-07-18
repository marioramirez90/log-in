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
