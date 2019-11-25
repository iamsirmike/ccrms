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

//get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnRegister = document.getElementById('btnRegister');


//register
btnRegister.addEventListener('click', e => {
  e.preventDefault();
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  console.log(email, pass)

  auth.createUserWithEmailAndPassword(email, pass).catch(function (error){
    const errorMessage = error.message;
    const errorCode = error.code;
    console.log(errorCode, errorMessage);

  })

})

//AUthchanged
const auth = firebase.auth();
auth.onAuthStateChanged(function (user){
  if(user){
    window.location.href = "user.html"
  }else{
    console.log("not logged in")
  }
})

// //Reference for form collection
// var registrationRef = firebase.database().ref("registration");

// //listen for submit event//
// document
//   .getElementById("registrationform")
//   .addEventListener("submit", formSubmit);

// //Submit form
// function formSubmit(e) {
//   e.preventDefault();

//   // Get Values from the DOM
//   var fname = document.getInputVal("fname");
//   var mname = document.getInputVal("mname");
//   var lname = document.getInputVal("lname");
//   var email = document.getInputVal("email");
//   var password = document.getInputVal("password");
//   var cpassword = document.getInputVal("cpassword");
//   var dobm = document.getInputVal("dobm");
//   var cardtype = document.getInputVal("cardtype");
//   var idnumber = document.getInputVal("idnumber");
//   var country = document.getInputVal("country");
//   var place = document.getInputVal("place");
//   var address = document.getInputVal("address");
//   var male = document.getInputVal("gender");
//   var phonecode = document.getInputVal("phonecode");
//   var number = document.getInputVal("number");

//   //save registration
//   saveregistration(
//     fname,
//     mname,
//     lname,
//     email,
//     password,
//     cpassword,
//     dobm,
//     cardtype,
//     idnumber,
//     country,
//     place,
//     address,
//     male,
//     phonecode,
//     number
//   );

//   //show alert
//   document.querySelector(".alert").style.display = "block";

//   //Hide alert after 5 seconds
//   setTimeout(function() {}, 5000);
// }

// //funtion to get form values
// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// //saves registration to firebase
// function saveregistration(
//   fname,
//   mname,
//   lname,
//   email,
//   password,
//   cpassword,
//   dobm,
//   cardtype,
//   idnumber,
//   country,
//   place,
//   address,
//   male,
//   phonecode,
//   number
// ) {
//   var newregistrationRef = registrationRef.push();
//   console.log(newregistrationRef);
// }
