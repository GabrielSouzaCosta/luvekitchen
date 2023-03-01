import { db } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

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
}) {
    const recipeDoc = doc(db, "recipes", recipe_id);
    
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