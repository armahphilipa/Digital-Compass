document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  if (name === "") {
    alert("Name is required.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    event.target.submit(); 
  }
});
