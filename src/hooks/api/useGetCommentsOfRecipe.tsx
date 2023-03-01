import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';

export default (recipe_id : string) => {
  const [recipeData, setRecipeData] = useState([]);

  function refetch() {
    getRecipe();
  }
  
  async function getRecipe() {
    const recipeRef = doc(db, 'recipes', recipe_id);
    const recipeDoc = await getDoc(recipeRef);
    const recipe = recipeDoc.data();
    setRecipeData(recipe);
  }

  useEffect(() => {
    getRecipe();
  }, [])

  return { ratings: recipeData?.ratings, refetch };
}