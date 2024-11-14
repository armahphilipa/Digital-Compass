function acceptTerms() {
  const checkbox = document.getElementById('acceptCheckbox');
  const confirmationMessage = document.getElementById('confirmationMessage');

  if (checkbox.checked) {
    confirmationMessage.textContent = "Thank you! You have accepted the terms and conditions.";
    <br>
      <a href="index.html" class="home-button">Go to Home</a>
    confirmationMessage.style.color = "#4caf50";
  } else {
    confirmationMessage.textContent = "Please check the box to accept the terms and conditions.";
    confirmationMessage.style.color = "red";
  }
};
