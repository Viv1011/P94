
var firebaseConfig = {
      apiKey: "AIzaSyCSCJV0uNzICR9xNlkTInHvJaQm8yqRDVM",
      authDomain: "kwitter-6157b.firebaseapp.com",
      databaseURL: "https://kwitter-6157b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6157b",
      storageBucket: "kwitter-6157b.appspot.com",
      messagingSenderId: "492432385699",
      appId: "1:492432385699:web:bcda614955d57bb59f0116"
    };
    
    // Initialize Firebase
    firebaseapp.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
