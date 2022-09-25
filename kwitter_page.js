//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCMc-B3r_0nim4M2hsnjcdmV0J1fty7sFE",
      authDomain: "kwitter-7dc89.firebaseapp.com",
      databaseURL: "https://kwitter-7dc89-default-rtdb.firebaseio.com",
      projectId: "kwitter-7dc89",
      storageBucket: "kwitter-7dc89.appspot.com",
      messagingSenderId: "380239463825",
      appId: "1:380239463825:web:1b48b52ba771cf17a8c630"
    };
    
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("loginusername");
Room_names = localStorage.getItem("roomaddinput");

function onclick() {
      msgstore = document.getElementById("send_me_the_message").value;
      firebase.database().ref(Room_names).push({
            name:username,
            message:msgstore,
            likes:0
      });
}

function logout() {
      localStorage.removeItem("loginusername");
      localStorage.removeItem("roomaddinput");
      window.location.replace("index.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
