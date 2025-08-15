document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  const user = { firstName, lastName };

  if (rememberMe) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  window.location.href = "welcome.html";
});
