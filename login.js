function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const remember = document.getElementById("remember-me").checked;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );

  if (user) {
    if (remember) {
      localStorage.setItem("rememberedUser", username);
    } else {
      localStorage.removeItem("rememberedUser");
    }

    //gespeicherter user
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // home weiterleitung
    window.location.href = "home.html";
  } else {
    alert("Login fehlgeschlagen. Bitte überprüfe deine Eingaben.");
  }
}
