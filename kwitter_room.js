const config={
      apiKey: "AIzaSyDj2LB1G8sYDv9e4fLbECspaoGMxiX3c8E",
      authDomain: "classtest-86f6a.firebaseapp.com",
      databaseURL: "https://classtest-86f6a-default-rtdb.firebaseio.com",
      projectId: "classtest-86f6a",
      storageBucket: "classtest-86f6a.appspot.com",
      messagingSenderId: "791118022216",
      appId: "1:791118022216:web:0efd00859b6e38cdf1fa7d"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
user_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name +"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose :"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names);
      row="<div class='room_name' id="+Room_names +"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
});});}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}