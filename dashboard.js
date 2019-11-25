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

firebase.initializeApp(config)


function signOut() {
    console.log('signing out')
     firebase.auth().signOut().then(_ => {
         location.replace('../..//htdocs/CCRMS/Login.html')
     }).catch(function (error) {
         console.log(error)
     })
}

var logoutBtn = document.getElementById("logout")

console.log(logoutBtn)
logoutBtn.addEventListener('click', signOut)