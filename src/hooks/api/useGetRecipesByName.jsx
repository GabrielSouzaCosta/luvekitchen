import React from 'react'
import { useQuery } from 'react-query'
import fetchRecipesByName from '../../services/recipes/fetchRecipesByName';

const useGetRecipesByName = (name) => {
  return useQuery('searched_recipes', () => fetchRecipesByName({ name }));
}

export default useGetRecipesByName