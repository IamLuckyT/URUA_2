function loadProfile() {
  let user = JSON.parse(localStorage.getItem("user")) || 
             JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    document.getElementById("profileFirstName").value = user.firstName;
    document.getElementById("profileLastName").value = user.lastName;
  } else {
    window.location.href = "login.html";
  }
}

document.getElementById("profileForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("profileFirstName").value;
  const lastName = document.getElementById("profileLastName").value;
  const user = { firstName, lastName };

  if (localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  alert("Profile updated!");
  window.location.href = "welcome.html";
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
});

window.onload = loadProfile;
