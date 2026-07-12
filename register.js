document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("regUsername").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("regPassword").value;

    let user = { username: username, email: email, password: password };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful");
    window.location.href = "login.html";
  });
