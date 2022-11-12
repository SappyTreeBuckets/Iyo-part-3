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
document.getElementById("user_name").innerHTML = "Welcome " +username+"!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Iyo_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Names -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' > # " + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row; 
   });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "Iyo_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}