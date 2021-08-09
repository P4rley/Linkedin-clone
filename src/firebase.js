import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiqjRih2ddDe4t9tEvO2w3qodX0efn4lc",
  authDomain: "linkedin-clone-c95e2.firebaseapp.com",
  projectId: "linkedin-clone-c95e2",
  storageBucket: "linkedin-clone-c95e2.appspot.com",
  messagingSenderId: "77070569167",
  appId: "1:77070569167:web:b2971f4b3d81fda55071ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
