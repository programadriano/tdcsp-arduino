var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();
var firebaseConfig = {
    apiKey: "AIzaSyBgMJ0kWttVMrzkJ1T1p8xhIhbD5GjP6cQ",
    authDomain: "auth-angular2-e8058.firebaseapp.com",
    databaseURL: "https://auth-angular2-e8058.firebaseio.com",
    projectId: "auth-angular2-e8058",
    storageBucket: "auth-angular2-e8058.appspot.com",
    messagingSenderId: "742342847568",
    appId: "1:742342847568:web:fb8c8a5c1c2057bc"
};

firebase.initializeApp(firebaseConfig);


board.on("ready", function () {
    var led = new five.Led(13);
    var starCountRef = firebase.database().ref('led');
    starCountRef.on('value', function (snapshot) {
      if(snapshot.val() == "on"){
        led.on();
      }else{
        led.off();
      }
    });
});




