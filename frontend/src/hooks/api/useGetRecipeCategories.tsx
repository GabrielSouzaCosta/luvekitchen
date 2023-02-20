import React from 'react'
import { useQuery } from 'react-query'
import fetchRecipeCategories from '../../services/recipes/fetchRecipeCategories';

const useGetRecipeCategories = () => {
  return useQuery('recipe_categories', fetchRecipeCategories);
}

export default useGetRecipeCategories