var firebaseConfig = {
      apiKey: "AIzaSyANVwsw2Gag8SWR4mi4Yr_xAFWFEoUVFY0",
      authDomain: "let-s-chat-1c775.firebaseapp.com",
      databaseURL: "https://let-s-chat-1c775-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-1c775",
      storageBucket: "let-s-chat-1c775.appspot.com",
      messagingSenderId: "270592094644",
      appId: "1:270592094644:web:c52e39af098644377b82e1"
    };
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  function addroom()
  {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "Adding user..."
      });
      localStorage.setItem("room_name", room_name);
      window.location = "message_page.html";
  }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name-"+ Room_names);
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location= "message_pages.html";
}

function logOut()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}