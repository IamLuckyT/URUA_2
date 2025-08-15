function loadUser() {
  let user = JSON.parse(localStorage.getItem("user")) || 
             JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    document.getElementById("welcomeMessage").textContent = 
      `Welcome, ${user.firstName} ${user.lastName}`;
  } else {
    window.location.href = "login.html";
  }
}

document.getElementById("logoutBtn").addEventListener("click", function() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
});

window.onload = loadUser;
