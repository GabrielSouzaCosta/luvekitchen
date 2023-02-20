import React from 'react'
import { useQuery } from 'react-query'
import fetchRecipes from '../../services/recipes/fetchRecipes';

const useGetRecipes = (category: string | undefined) => {
  return useQuery( ['recipes', category], () => fetchRecipes({ category }) );
}

export default useGetRecipes