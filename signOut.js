//initialize firebase
var config = {
  apiKey: "AIzaSyCs8AD4l-8_113Ut7ow_aRIKqtrzalQiyU",
  authDomain: "ccrmsproject.firebaseapp.com",
  databaseURL: "https://ccrmsproject.firebaseio.com",
  projectId: "ccrmsproject",
  storageBucket: "ccrmsproject.appspot.com",
  messagingSenderId: "12780515981",
  appId: "1:12780515981:web:316c86af3944d42bcba8c4",
  measurementId: "G-JYEBZFLNKK"
};

firebase.initializeApp(config);

const btnLogout = document.getElementById("logout");
btnLogout.addEventListener("click", e => {
  const auth = firebase.auth();
  auth
    .signOut()
    .then(function() {
      window.location.href = "Login.html";
    })
    .catch(function(error) {
      // An error happened.
    });
});

//AUthchanged
const auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
  if (user) {
    var email = user.email;
    document.getElementById("txtemail").value = email;
    console.log(email);
  } else {
    console.log("not logged in");
  }
});
