var firebaseConfig = {
    apiKey: "AIzaSyBCZRP7HqndwcCGVdM473Uov6II6ATzObA",
    authDomain: "kwitter-7fe0a.firebaseapp.com",
    databaseURL: "https://kwitter-7fe0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-7fe0a",
    storageBucket: "kwitter-7fe0a.appspot.com",
    messagingSenderId: "376389646417",
    appId: "1:376389646417:web:f4493e4fa38042ea682070"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() 
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    porpose : "adding user"
});
}