import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useMutation } from 'react-query';
import styled, { css } from 'styled-components';
import { useStateContext } from '../context/ContextProvider';
import addRecipeToFavorites from '../services/recipes/addRecipeToFavorites';
import { colors } from '../styles/theme';

type Props = {
  heartSmall?: boolean,
  recipeItem?: boolean,
  recipe_id: string,
  name: string,
  image_url: string,
}

const Favorite = ({
  heartSmall,
  recipeItem,
  recipe_id,
  name,
  image_url,
} : Props) => {
  const ctx = useStateContext();
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  async function handleAddFavorite() {
    if (!ctx?.userData?.accessToken) {
      router.push('/login?next='+router.asPath);
    } else {
      addRecipeToFavorites({
        recipe_id,
        name,
        image_url
      })
      ctx?.saveUserSession({
        ...ctx?.userData,
        favorites: [...ctx?.userData?.favorites, { 
          recipe_id,
          name,
          image_url
        }]
      })
    }
  }  

  useEffect(() => {
    const favorites = ctx?.userData?.favorites?.map(item => item.recipe_id?.toString());
    if ( favorites?.includes(recipe_id) ) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [ctx])

  return (
	  <HeartBox 
      onMouseEnter={() => setIsFilled(true)} 
      onMouseLeave={() => setIsFilled(false)}
      onClick={handleAddFavorite}
      recipeItem={recipeItem}
    >
      {isFilled || isFavorite ?
          <Heart size={heartSmall ? 35 : 50} color={ colors.primary } />
          :
          <HeartEmpty 
              size={heartSmall ? 35 : 50} 
              color={ colors.primary }
          />
      }
    </HeartBox>
  )
}

const HeartBox = styled.div`
    cursor: pointer;

    ${({ recipeItem }: { recipeItem: boolean | undefined }) => recipeItem && css`
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      background-color: #30303088;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 2px;
      padding-left: 12px;
      padding-bottom: 2px;
    `}
`;

const Heart = styled(IoMdHeart)`
    cursor: pointer;
`

const HeartEmpty = styled(IoMdHeartEmpty)`
    cursor: pointer;
`

export default Favorite