import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDo9_gU-7N4ZfdE2AZPlkhWI1Gw4VRDBjE",
  authDomain: "to-do-list-8a92b.firebaseapp.com",
  databaseURL: "https://to-do-list-8a92b.firebaseio.com",
  projectId: "to-do-list-8a92b",
  storageBucket: "to-do-list-8a92b.appspot.com",
  messagingSenderId: "847395633933",
  appId: "1:847395633933:web:c8b4b37d001f17c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
