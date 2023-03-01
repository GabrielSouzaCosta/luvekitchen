// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "luvekitchen",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "105552556068",
  appId: "1:105552556068:web:d4403427e68f0f5163e8b1",
  measurementId: "G-38D59E5D5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage(app);

export const db = getFirestore(app);

export const createUserDocument = async (user, {
  avatar_img,
  gender,
  name,
}) => {
  if (!user) return;

  const userRef = doc(db, 'users/'+user.uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { email } = user;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        name,
        avatar_img,
        email,
        gender,
        createdAt: new Date(),
        favorites: []
      });
      
    } catch(err) {
      console.log('error registering user', err)
    }
  }
}
