var firebaseConfig = {
    apiKey: "AIzaSyBfbda1Vp9Y__JVcwS_SBMuNOLTM7YNtjg",
    authDomain: "iyofirebase.firebaseapp.com",
    databaseURL: "https://iyofirebase-default-rtdb.firebaseio.com/",
    projectId: "iyofirebase",
    storageBucket: "iyofirebase.appspot.com",
    messagingSenderId: "441777436235",
    appId: "1:441777436235:web:029b2401cd64e86ca97fce"
  };
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value;
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}