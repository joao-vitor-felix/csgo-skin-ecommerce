import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHTA-DwCEn5RwMiP7-hw6RDDx9sC9Q4ag',
  authDomain: 'csgo-skin-ecommerce-db.firebaseapp.com',
  projectId: 'csgo-skin-ecommerce-db',
  storageBucket: 'csgo-skin-ecommerce-db.appspot.com',
  messagingSenderId: '628918740038',
  appId: '1:628918740038:web:0444e5dd796a6cb51d9647',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   //   prompt: 'select-account',
// });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error', error.message);
    }
  }
  return userDocRef;
};
