import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { IoSearchOutline } from 'react-icons/io5'
import { colors } from '../styles/theme'
import { H2, P } from '../styles/texts'
import Link from 'next/link'
import useGetRandomRecipe from '../hooks/api/useGetRandomRecipe'
import useGetRecipeCategories from '../hooks/api/useGetRecipeCategories'
import { StyledH3, StyledInput, CategoriesGrid, RecipesContainer, RecipeCard, CategoryCard, Grid } from '../styles/recipes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useGetRecipesByName from '../hooks/api/useGetRecipesByName'
import RecipeItem from '../components/RecipeItem'
import { MarginDiv } from '@/styles/layout'
import Image from 'next/image'
import categoriesThumbs from '../data/categoriesThumbs'

function Recipes() {
  const { data: randomRecipe, isLoading } = useGetRandomRecipe();
  const { data: recipeCategories, isLoading: isCategoriesLoading } = useGetRecipeCategories();
  
  const [currentScreen, setCurrentScreen] = useState('categories');
  const [search, setSearch] = useState('');
  const { data: searchedRecipes, isLoading: isSearchedRecipesLoading, isRefetching, refetch } = useGetRecipesByName(search);
  const [ recipesNotFound, setRecipesNotFound ] = useState(false);

console.log(recipeCategories)

  function searchRecipe(e) {
    e.preventDefault();
    refetch();
    setCurrentScreen('search');
  };

  useEffect(() => {
    if (!searchedRecipes?.data?.meals && !isSearchedRecipesLoading) {
      setRecipesNotFound(true)
    } else {
      setRecipesNotFound(false)
    }
  }, [searchedRecipes])

  useEffect(() => {
    if (currentScreen === 'search' && search === '') {
      setCurrentScreen('categories');
    }
  }, [search])
  
  const CategoriesScreen = () => (
    <>
      <H2 style={{ textAlign: 'center' }} marginSize='md'>
          What about this Recipe?
      </H2>
      <RecipeCard
        href={`/recipe/${randomRecipe?.data?.meals[0]['idMeal']}`}
        src={randomRecipe?.data?.meals[0]['strMealThumb']} 
        name={randomRecipe?.data?.meals[0]['strMeal']}
      />

      <StyledH3>
        Categories
      </StyledH3>

      <CategoriesGrid>
        {!isCategoriesLoading && 
          recipeCategories?.data?.categories.map(
            (category, index) => 
                <CategoryCard 
                  href={`/${category['strCategory']}`} 
                  key={index} 
                  src={categoriesThumbs[category.strCategory]} 
                  name={category['strCategory']} 
                />
          )
        }
      </CategoriesGrid>
    </>
  )

  const SearchScreen = () => {
    if (recipesNotFound) return <div>
      <div style={{ marginTop: '20vh', textAlign: 'center' }}>
        <Image 
          src={require("../../public/images/not_found_recipe.png")}
          alt=""
          width={200}
        />
        <P>
          No Recipes found
        </P>
      </div>
    </div>
    else if (isSearchedRecipesLoading) return (
      <P>
        Loading recipes..
      </P>
    )
    return (
      <Grid>
      {searchedRecipes?.data?.meals?.map((item) => {
          return (
            <RecipeItem
              favoriteInItem
              recipe_id={item['idMeal']}
              key={item['idMeal']}
              name={item['strMeal']}
              href={`/recipe/${item['idMeal']}`}
              src={item['strMealThumb']}
            />
          )
        })
      }
    </Grid>
    )
  }


  if (isLoading) return
  return (
    <>
      <Head>
          <title>Luv&amp;Kitchen - Recipes</title>
          <meta name="description" content="Homepage, has a search bar, a random meal and meals categories" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout contentTop>
        <RecipesContainer>  
          <main>

            <MarginDiv mb={'20px'}>
              <form method='get' onSubmit={searchRecipe}>
                <StyledInput
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder='Search for a recipe'
                  iconLeft={ <IoSearchOutline size={24} color={colors.dark} /> }
                />
                <button type="submit" hidden></button>
              </form>
            </MarginDiv>

            {currentScreen === 'categories' ?
              <CategoriesScreen />
            :
              <SearchScreen />
            }

          </main>
        </RecipesContainer>
      </Layout>
    </>
  )
}


export default Recipes