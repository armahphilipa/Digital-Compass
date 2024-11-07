

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login').addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(event.target);
  
      const jsonData = {};
      formData.forEach((value, key) => {
          jsonData[key] = value;
      });
  
      // Make API request
      fetch('https://empathybridge.onrender.com/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });

  });

  

/**/


//sign up

/*
 <script src="https://apis.google.com/js/platform.js" async defer></script>document.addEventListener('DOMContentLoaded', function validateSignUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email && password){
        const isAuthenthicated = true;

        if(isAuthenthicated){
            window.location.href = "../register.html";
        } else {
            alert("Authentication failed. Please try again.");
        }
    } 
});

function onGoogleSignIn(googleUser) {
    // Handle the Google sign-in success here
    console.log('Google Sign-In successful!');
    console.log('User profile:', googleUser.getBasicProfile());
    // You can perform additional actions or send data to your server here
}*/