import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoCheckmark, IoEggSharp, IoShare, IoStar } from 'react-icons/io5';
import styled from 'styled-components';
import useGetRecipe from '../../hooks/api/useGetRecipe';
import Layout from '../../layout/Layout'
import { Container, FlexRowBetweenDiv, FlexRowDiv, MarginHorizontalView, MarginVerticalView, MarginView } from '../../styles/layout';
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

interface Ingredient {
	ingredient: string,
	quantity?: string,
}

const Recipe = () => {
  const router = useRouter();
  const { id } : RouteParams = router.query;
  const { data: recipe, isLoading } = useGetRecipe(id);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  
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
			<title>{ recipe?.data.meals[0]['strMeal'].length > 30 ? recipe?.data.meals[0]['strMeal'].slice(0, 30)+'..' : recipe?.data.meals[0]['strMeal']  }</title>
			<meta name="description" content="Generated by create next app" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
      	</Head>

		<Layout>
			<RecipeContainer>
				<FlexContainer>
					<div>
						<FlexRowBetweenDiv>
							<MarginVerticalView mb={'4px'}>
								<H1>
									{ recipe?.data.meals[0]['strMeal'] }
								</H1>
							</MarginVerticalView>
							<FlexRowDiv>
								<MarginHorizontalView ml={'20px'}>
									<BsBookmarkPlus className="pointer-opacity" size={40} />
								</MarginHorizontalView>
								{id &&
									<MarginHorizontalView ml={'20px'}>
										<Favorite
											recipe_id={id}
										/>
									</MarginHorizontalView>
								}
								<MarginHorizontalView ml={'20px'}>
									<IoMdShare className="pointer-opacity" size={40} color={colors.dark} />
								</MarginHorizontalView>

							</FlexRowDiv>
						</FlexRowBetweenDiv>

						<FlexRowBetweenDiv>
							<TextMuted marginSize={'sm'} style={{ fontSize: '1.5rem' }}>
								{ recipe?.data.meals[0]['strCategory'] }
							</TextMuted>

							<FlexRowDiv>
								<MarginHorizontalView mr={'4px'}>
									<IoMdGlobe size={36} color={colors['secondary-variant']} />
								</MarginHorizontalView>
								<P marginSize='none' style={{ color: colors['secondary-variant'] }}>
									{ recipe?.data.meals[0]['strArea'] }
								</P>
							</FlexRowDiv>
						</FlexRowBetweenDiv>


						<Rating
							name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly
						/>
						<MarginView m={'8px 0 20px 0'}>
							<FlexRowDiv>
								<MarginHorizontalView m={'6px'}>
									<P style={{ color: colors.primary, borderBottom: `0.5px solid ${colors.primary}` }} marginSize="none">
										4.5
									</P>
								</MarginHorizontalView>
								<P marginSize={'none'} style={{ color: colors.primary }}>
									(121)
								</P>
							</FlexRowDiv>
						</MarginView>

						<MarginVerticalView mb={'30px'}>
							<YoutubeVideo width="600" height="415"
								src={recipe?.data.meals[0]['strYoutube'].replace('watch?v=', 'embed/')}
								frameBorder="0"
								allowFullScreen
							/>
						</MarginVerticalView>

						<H3>
							Instructions
						</H3>
						<P>
							{ recipe?.data.meals[0]['strInstructions'] }
						</P>

						<MarginVerticalView m={'30px'}>
							<FlexRowBetweenDiv>
								<div>
									<H4 style={{ color: colors['primary-variant'] }}>
										Ingredients
									</H4>
									<IngredientsList>
										{ ingredients
											.map((item) => {
												if (recipe?.data.meals[0][item.ingredient] && item.quantity)
												return (
													<ListItem>
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
						</MarginVerticalView>

						<H5>
							Reviews (121)
						</H5>

						<ReviewItem 
							rating={4}
							user={'Gabriel Souza'}
							userImage={AvatarMasc1}
							date={'12/01/2022'}
							review={'Excellent meal for dinner'}
						/>

						<ReviewItem 
							rating={5}
							user={'Joyce Anders'}
							userImage={AvatarFem1}
							date={'13/01/2022'}
							review={'I really liked this dish, very tasty!'}
						/>

						<ReviewItem 
							rating={2.5}
							user={'Karen'}
							userImage={AvatarFem2}
							date={'13/01/2022'}
							review={'Disgusting!!'}
						/>

						<ReviewItem 
							rating={5}
							user={'Robert'}
							userImage={AvatarMasc2}
							date={'14/01/2022'}
						/>

					</div>
				</FlexContainer>
			</RecipeContainer>
		</Layout>
	</>
  )
}

const RecipeContainer = styled(Container)`
    width: 100%;
	padding: 40px 0;
`

const YoutubeVideo = styled.iframe`
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
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
`

const IngredientsList = styled.ul`
	list-style-type: disc;
	list-style-position: inside;
`


export default Recipe