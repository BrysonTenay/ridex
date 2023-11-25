// Initialize Firebase with your project config
firebase.initializeApp(firebaseConfig);

// Get elements from the HTML document
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

// Add login event listener
loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log('Logged in as:', user.email);
      // Redirect or perform other actions after login
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Login error: ${errorCode} - ${errorMessage}`);
    });
});
