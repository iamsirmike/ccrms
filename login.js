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

var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", e => {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .catch(function(error) {
      alert("incorrect email or password");
    });
});

//AUthchanged
const auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "user.html";
    // alert(user.email);
  } else {
    console.log("not logged in");
  }
});
