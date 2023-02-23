import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useMutation } from 'react-query';
import styled, { css } from 'styled-components';
import { useStateContext } from '../context/ContextProvider';
import addRecipeToFavorites from '../services/recipes/addRecipeToFavorites';
import getUserInfo from '../services/auth/getUserInfo';
import { colors } from '../styles/theme';

type Props = {
  recipeItem?: boolean,
  recipe_id: string,
  name: string,
  image_url: string,
}

const Favorite = ({
  recipeItem,
  recipe_id,
  name,
  image_url,
} : Props) => {
  const ctx = useStateContext();
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { mutate } = useMutation(addRecipeToFavorites, {
    onSuccess: async (response) => {
      console.log(response);
      setIsFavorite(true)
    },
    onError: ({response}) => {
      console.log(response)
    }
  });

  async function handleAddFavorite() {
    if (!ctx?.userData?.token) {
      router.push('/login?next='+router.asPath);
    } else {
      mutate({ 
        recipe_id,
        name,
        image_url,
        token: ctx.userData.token 
      });

      const userInfo = await getUserInfo(ctx.userData.token)
        .then(res => {
            return res?.data.data
        })
        .catch(err => console.log(err))

        ctx?.saveUserSession({ 
          token: ctx.userData.token,
          name: userInfo.name, 
          avatar_img: userInfo.avatar_img, 
          favorites: userInfo.favorites 
        })
    }
  }  

  useEffect(() => {
    const favorites = ctx?.userData?.favorites?.map(item => item.recipe_id.toString());
    if ( favorites?.includes(recipe_id) ) {
      setIsFavorite(true);
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
          <Heart size={55} color={ colors.primary } />
          :
          <HeartEmpty 
              size={55} 
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