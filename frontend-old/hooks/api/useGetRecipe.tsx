import React from 'react'
import { useQuery } from 'react-query'
import fetchRecipe from '../../services/fetchRecipe';

const useGetRecipe = (id: string | undefined) => {
  return useQuery(['recipe', id], () => fetchRecipe({id}));
}

export default useGetRecipe