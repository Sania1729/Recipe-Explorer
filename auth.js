// ===============================
// LOGIN
// ===============================
let loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      username === savedUser.username &&
      password === savedUser.password
    ) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);
     window.location.href = "home.html";
    } else {
      alert("Invalid username or password");
    }
  });
}
//===============================
// DISPLAY USERNAME
// ===============================
let usernameDisplay = document.getElementById("usernameDisplay");
if (usernameDisplay) {
  let username = localStorage.getItem("username");
  if (username) {
    usernameDisplay.innerHTML = `Welcome, ${username} 👋`;
  }
}
// ===============================
// LOGOUT
// ===============================
let logout = document.getElementById("logout");
if (logout) {
  logout.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "home.html";
  });
}
