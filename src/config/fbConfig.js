import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyAJoyQ-VWWkKJVllJTuHR7YkzTNxFjDdg0",
    authDomain: "react-project01-5920d.firebaseapp.com",
    databaseURL: "https://react-project01-5920d.firebaseio.com",
    projectId: "react-project01-5920d",
    storageBucket: "react-project01-5920d.appspot.com",
    messagingSenderId: "372499844559",
    appId: "1:372499844559:web:20df33c31f92186a8056ba",
    measurementId: "G-JLYRKH778J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true});
  firebase.firestore();
  // firebase.analytics();

  export default firebase


//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>
//
//<!-- TODO: Add SDKs for Firebase products that you want to use
//     https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-analytics.js"></script>
//
//<script>
 
// Your web app's Firebase configuration
// </script>