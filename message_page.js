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
    
//YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;





      } });  }); }
getData();
function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push ({
         name:user_name,
         message:msg,
         like:0
      });
      document.getElementById("msg").value="";
   }