import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoCheckmark, IoEggSharp, IoShare, IoStar } from 'react-icons/io5';
import styled from 'styled-components';
import useGetRecipe from '../../hooks/api/useGetRecipe';
import Layout from '../../layout/Layout'
import { Container, FlexRowBetweenDiv, FlexRowDiv, MarginDiv, ShowOnlyMobileDiv } from '../../styles/layout';
import { H1, H2, H3, H4, H5, ListItem, P, TextMuted } from '../../styles/texts';
import { colors } from '../../styles/theme';
import { Rating } from '@mui/material';
import { IoMdGlobe, IoMdHeartEmpty, IoMdShare } from 'react-icons/io';
import ReviewItem from '../../components/ReviewItem';
import { AvatarFem1, AvatarFem2, AvatarMasc1, AvatarMasc2 } from '../../../public/avatars';
import { ParsedUrlQuery } from 'querystring';
import { RouteParams } from '../../@types/RouteParams';
import { BsBookmarkPlus } from 'react-icons/bs';
import Favorite from '../../components/Favorite';
import { useStateContext } from '@/context/ContextProvider';
import { useMutation, useQueryClient } from 'react-query';
import addCommentToRecipe from '@/services/recipes/addCommentToRecipe';
import useGetCommentsOfRecipe from '@/hooks/api/useGetCommentsOfRecipe';
import shareRecipeUrl from '@/services/shareRecipeUrl';
import { Button } from '@/styles/buttons';
import Link from 'next/link';

interface Ingredient {
	ingredient: string,
	quantity?: string,
}

const Recipe = () => {
  const router = useRouter();
  const { id } : RouteParams = router.query;
  const { data: recipe, isLoading } = useGetRecipe(id);
  const { ratings, refetch } = useGetCommentsOfRecipe(id);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const ctx = useStateContext();

  function handleShareRecipe() {
	  shareRecipeUrl({
		url: router.asPath,
		title: recipe?.data.meals['strMeal'],
		text: '',
	  })
  }
  
  useEffect(() => {
	if (recipe?.data.meals) {
		let ingredientsData: Ingredient[] = Object.keys(recipe?.data.meals[0])
			.filter((key) => key.startsWith('strIngredient'))
			.map((item) => { 
				return {
					'ingredient': item
				}
			})
		let quantityData = Object.keys(recipe?.data.meals[0])
			.filter((key) => key.startsWith('strMeasure'))
			.map((item) => { 
				return {
					'quantity': item
				}
			})

		ingredientsData = ingredientsData.map((item, index) => {
			return {
				...item,
				...quantityData[index]
			}
		})

		setIngredients(ingredientsData)
	}
  }, [recipe?.data])

  if (isLoading || !id) return
  return (
	<>
		<Head>
			<title>{ recipe?.data?.meals[0]['strMeal'].length > 30 ? recipe?.data.meals[0]['strMeal'].slice(0, 30)+'..' : recipe?.data.meals[0]['strMeal']  }</title>
			<meta name="description" content={recipe?.data.meals[0]['strMeal']} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
      	</Head>

		<Layout>
			<RecipeContainer>
				<FlexContainer>
					<div>
						<FlexRowBetweenDiv>
							
							<H2 marginSize='none'>
								{ recipe?.data.meals[0]['strMeal'] }
							</H2>
							
							<FlexRowDiv>
								{id &&
									<MarginDiv ml={'10px'}>
										<Favorite
											heartSmall
											recipe_id={id}
											name={recipe?.data.meals[0]['strMeal']}
											image_url={recipe?.data.meals[0]['strMealThumb']}
										/>
									</MarginDiv>
								}
								<ShowOnlyMobileDiv ml={'10px'}>
									<button type="button" onClick={handleShareRecipe}>
										<IoMdShare className="pointer-opacity" size={30} color={colors.dark} />
									</button>
								</ShowOnlyMobileDiv>

							</FlexRowDiv>
						</FlexRowBetweenDiv>

						<FlexRowBetweenDiv>
							<TextMuted marginSize={'sm'} style={{ fontSize: '1.5rem' }}>
								{ recipe?.data.meals[0]['strCategory'] }
							</TextMuted>

							<FlexRowDiv>
								<MarginDiv mr={'4px'}>
									<IoMdGlobe size={36} color={colors['secondary-variant']} />
								</MarginDiv>
								<P marginSize='none' style={{ color: colors['secondary-variant'] }}>
									{ recipe?.data.meals[0]['strArea'] }
								</P>
							</FlexRowDiv>
						</FlexRowBetweenDiv>


						<Rating
							name="half-rating-read" 
							defaultValue={ratings?.length ? (ratings?.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0) / ratings?.length ) : 0} 
							precision={0.5} 
							readOnly
						/>
						<MarginDiv m={'8px 0 20px 0'}>
								<FlexRowDiv>
									<a href="#reviews">
										<P marginSize={'none'} style={{ color: colors.primary }}>
											( {ratings?.length ? ratings?.length : '0'}
											{ratings?.length > 1 || ratings?.length === 0 ? ' reviews': ' review'} )
										</P>
									</a>
								</FlexRowDiv>
						</MarginDiv>

						<MarginDiv mb={'30px'}>
							<YoutubeVideo
								src={recipe?.data.meals[0]['strYoutube'].replace('watch?v=', 'embed/')}
								frameBorder="0"
								allowFullScreen
							/>
						</MarginDiv>

						<H3>
							Instructions
						</H3>
						<P>
							{ recipe?.data.meals[0]['strInstructions'] }
						</P>

						<MarginDiv m={'30px 0'}>
							<FlexRowBetweenDiv responsive>
								<div>
									<H4 style={{ color: colors['primary-variant'] }}>
										Ingredients
									</H4>
									<IngredientsList>
										{ ingredients
											.map((item) => {
												if (recipe?.data.meals[0][item.ingredient] && item.quantity)
												return (
													<ListItem key={item.ingredient}>
														<IoCheckmark size={20} color={colors.dark} />
														<span style={{ color: colors.primary }}>
															{ recipe?.data.meals[0][item.quantity] }
														</span>
														{ recipe?.data.meals[0][item.ingredient] }
													</ListItem>
												)
											})
										}
									</IngredientsList>
								</div>
								<ImageContainer>
									<Image
										src={recipe?.data.meals[0]['strMealThumb']}
										fill
										alt=""
										style={{ objectFit: 'cover'}}
									/>
								</ImageContainer>
							</FlexRowBetweenDiv>
						</MarginDiv>

						<H5 id='reviews'>
							Reviews ({ratings?.length ? ratings.length : '0'})
						</H5>
						
						{/* Create new review */}
						{ctx?.userData?.accessToken && !ratings?.find((item: any) => item.user_id === ctx?.userData?.id) &&
							<ReviewItem
								recipe={recipe?.data.meals[0]}
								isCreate
								user={ctx?.userData?.name}
								userImage={require('../../../public/avatars/'+ctx?.userData?.avatar_img)}
								refetch={refetch}
							/>
						}

						{!ctx?.userData?.accessToken &&
							<MarginDiv mb={'20px'}>
								<Link href={'/login?next='+router.asPath}>
									<Button textSmall maxWidth="220px">
										Log in to add a comment
									</Button>
								</Link>
							</MarginDiv>
						}

						{ratings?.map((item : any) => {
							console.log(item)
								return (
									<ReviewItem
										key={item.created_at}
										rating={item.rating}
										user={item.user_name}
										userImage={require('../../../public/avatars/'+item.user_image)}
										date={item.created_at ? new Date(item.created_at.seconds*1000).toLocaleDateString().toString().split(' ')[0] : ''}
										review={item.comment}
									/>
								)
							})
						}


					</div>
				</FlexContainer>
			</RecipeContainer>
		</Layout>
	</>
  )
}

const RecipeContainer = styled(Container)`
    width: 100%;
	padding: 4px 20px;
	overflow: hidden;
`

const YoutubeVideo = styled.iframe`
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	max-width: 600px;
	width: 100%;
	height: 410px;
	@media screen and (max-width: 968px) {
        height: 220px;
    }
`

const FlexContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	column-gap: 45px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const ImageContainer = styled.div`
	width: 380px;
	height: 380px;
	position: relative;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	flex-shrink: 0;
	img {
		border-radius: 50%;
	}
	@media screen and (max-width: 968px) {
        width: 200px;
		height: 200px;
		align-self: center;
    }
`

const IngredientsList = styled.ul`
	list-style-type: disc;
	list-style-position: inside;
`

const MakeReviewForm = styled.form`
	margin: 16px 0;
`


export default Recipe