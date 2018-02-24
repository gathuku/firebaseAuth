
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("logged_div").style.display="block";
      document.getElementById("user_div").style.display="none";
    } else {
      // No user is signed in.
      document.getElementById("logged_div").style.display="none";
      document.getElementById("user_div").style.display="block";
    }
  });

  function login(){
    
      var email=document.getElementById('txtEmail').value;
      var password=document.getElementById('txtPass').value;
     // window.alert(email+" "+password);

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       
        window.alert("Error: "+errorMessage);
      });
  }