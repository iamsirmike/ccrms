
function signOutUser(e){
  console.log('signed out')
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  console.log("hello")
  
  }
  
  
  
  var signOutBtn = document.getElementById("logout")
  signOutBtn.addEventListener('click', signOutUser )