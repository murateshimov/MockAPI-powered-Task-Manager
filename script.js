document.getElementById('signUp').addEventListener('click', function () {
    document.getElementById('container').classList.add('success-mode');
  });
  
  document.getElementById('signIn').addEventListener('click', function () {
    document.getElementById('container').classList.remove('success-mode');
  });
  
  function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(`User ${user.displayName} created successfully.`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error (${errorCode}): ${errorMessage}`);
      });
  }
  
  function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User ${user.displayName} signed in successfully.`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error (${errorCode}): ${errorMessage}`);
      });
  }
  