import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBqBxNrMrJSkNzdH6FAJzrJlqlTSSCEFc",
  authDomain: "slack-clone-a40bc.firebaseapp.com",
  databaseURL: "https://slack-clone-a40bc.firebaseio.com",
  projectId: "slack-clone-a40bc",
  storageBucket: "slack-clone-a40bc.appspot.com",
  messagingSenderId: "112514825996",
  appId: "1:112514825996:web:86183b688b092dea4c1329",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
