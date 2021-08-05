var firebaseConfig = {
    apiKey: "AIzaSyCt_XF0fJSdvyj_9kwIDRfR7FgHkTRaBOk",
    authDomain: "kwitter2-83fea.firebaseapp.com",
    databaseURL: "https://kwitter2-83fea-default-rtdb.firebaseio.com",
    projectId: "kwitter2-83fea",
    storageBucket: "kwitter2-83fea.appspot.com",
    messagingSenderId: "557470127827",
    appId: "1:557470127827:web:05adf6c898310234b26626"
  };

  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });
});
}
getData();
