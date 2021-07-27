import { firebaseAuth, githubProvider, googleProvider } from "./firebase";
class AuthService {
  login(providerName) {
    const provider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(provider);
  }

  onAuthChange(onUserChange) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  onLogout() {
    firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case `Google`:
        return googleProvider;
      case `Github`:
        return githubProvider;
      default:
        throw new Error(`Not Supproted ${providerName}`);
    }
  }
}

export default AuthService;
