import React from 'react'
import { useQuery } from 'react-query'
import fetchRandomRecipe from '../../services/recipes/fetchRandomRecipe'

const useGetRandomRecipe = () => {
  return useQuery('random_recipe', fetchRandomRecipe);
}

export default useGetRandomRecipe