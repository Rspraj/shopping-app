import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSXR0NcOSGWofJ_SSH8-rI2uw-gVS3XnM",
  authDomain: "crwn-clothing-db-a88ad.firebaseapp.com",
  projectId: "crwn-clothing-db-a88ad",
  storageBucket: "crwn-clothing-db-a88ad.appspot.com",
  messagingSenderId: "208193547471",
  appId: "1:208193547471:web:ad8cd46bacad0eff2cdbba"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select-account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);