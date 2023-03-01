import { db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default async function ({
  recipe_id,
  name,
  image_url,
}) {

  const recipeDoc = doc(db, "recipes", recipe_id);
  const snapshot = await getDoc(recipeDoc);
  
  if (!snapshot.exists()) {
    try {
      await setDoc(recipeDoc, {
        name,
        image_url,
      });
    } catch(err) {
      
    }
  }

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userDoc);

      const userData = userSnapshot.data();

      if (!userData.favorites.map(item => item.recipe_id).includes(recipe_id)) {
        await updateDoc(userDoc, {
          favorites: arrayUnion(recipe_id)
        });
      } else {
        await updateDoc(userDoc, {
          favorites: arrayRemove(recipe_id)
        });
      }
      
    }
  });
  
}