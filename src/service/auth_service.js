import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }

  onAuthChange(onUserChange) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  onLogout() {
    firebaseApp.auth().signOut();
  }
}

export default AuthService;
