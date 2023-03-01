import { db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

type Data = {
    recipe_id: string,
    name: string,
    image_url: string,
}

export default async function ({
  recipe_id,
  name,
  image_url,
} : Data) {

  const recipeDoc = doc(db, "recipes", recipe_id);
  
  const snapshot = await getDoc(recipeDoc);
  
  if (!snapshot.exists()) {
    try {
      await setDoc(recipeDoc, {
        name,
        image_url,
      });
    } catch(err) {
      console.log(err)
    }
  }

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      
      await updateDoc(userDoc, {
        favorites: arrayUnion(recipe_id)
      });
    }
  });
  
}