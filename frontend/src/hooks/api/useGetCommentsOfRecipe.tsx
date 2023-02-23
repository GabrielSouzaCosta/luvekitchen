import React from 'react'
import { useQuery } from 'react-query'
import fetchCommentsOfRecipe from '@/services/recipes/fetchCommentsOfRecipe';

export default (recipe_id : string) => {
  return useQuery(['recipe_comments', recipe_id], () => fetchCommentsOfRecipe(recipe_id));
}