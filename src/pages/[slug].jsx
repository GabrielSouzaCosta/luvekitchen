import { AlignCenterDiv, MarginDiv } from '@/styles/layout';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import RecipeItem from '../components/RecipeItem';
import useGetRecipes from '../hooks/api/useGetRecipes';
import Layout from '../layout/Layout'
import { H1 } from '../styles/texts';
import { colors } from '../styles/theme';
import { RecipesContainer, StyledInput, Grid } from '../styles/recipes';

const RecipesCategory = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: recipes, isLoading } = useGetRecipes(slug);
  const [search, setSearch] = useState('');
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
	if (search) {
		setSearchedRecipes(recipes?.data?.meals.filter((item) => 
			item['strMeal'].toLowerCase().includes(search.toLowerCase())	
		))
	} else {
		setSearchedRecipes([])
	}
  }, [search])

  if (isLoading) return
  return (
	<>
		<Head>
			<title>Luv&amp;Kitchen - { slug }</title>
			<meta name="description" content={slug} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Layout>
			<RecipesContainer>
				<AlignCenterDiv>
					<H1>
						{ slug }
					</H1>
				</AlignCenterDiv>
				<MarginDiv m={'30px 0'}>
					<StyledInput 
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text" 
						placeholder='Search for a recipe' 
						iconLeft={ <IoSearchOutline size={24} color={colors.dark} />} 
					/> 
				</MarginDiv>

				<Grid>
					{ searchedRecipes.length > 0 ?
							searchedRecipes
								.map((item) => {
									return (
										<RecipeItem 
											favoriteInItem={true}
											recipe_id={item['idMeal']}
											key={item['idMeal']}
											name={item['strMeal']}
											href={`/recipe/${item['idMeal']}`}
											src={item['strMealThumb']}
										/>
									)
								})
						:
							recipes?.data?.meals
								?.map((item) => {

									return (
										<RecipeItem 
											favoriteInItem={true}
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

			</RecipesContainer>
		</Layout>
	</>
  )
}

export default RecipesCategory