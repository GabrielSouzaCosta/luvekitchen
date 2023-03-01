import { db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

type Data = {
    recipe_id: string,
    name: string,
    image_url: string,
    token: string,
    comment: string,
    rating: number,
    user_id: string,
    user_name: string,
    user_image: string,
    refetch: () => void,
}

export default async function ({
    recipe_id,
    name,
    image_url,
    comment,
    rating,
    user_id,
    user_name,
    user_image,
    refetch,
} : Data) {
    const recipeDoc = doc(db, "recipes", recipe_id);
  
    const snapshot = await getDoc(recipeDoc);
    
    try {
        await setDoc(recipeDoc, {
            name,
            image_url,
            ratings: arrayUnion({
                comment,
                rating,
                user_id,
                user_name,
                user_image,
                created_at: new Date(), 
            })
        });
        refetch();
    } catch(err) {
        console.log(err)
    }
    
}