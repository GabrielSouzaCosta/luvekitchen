import { Input } from '@/styles/inputs';
import { Rating } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';
import { FlexRowDiv, MarginDiv } from '../styles/layout';
import { Callout, Caption, P, TextMuted } from '../styles/texts';
import { colors } from '../styles/theme';
import { IoSendSharp } from 'react-icons/io5'
import { useMutation, useQueryClient } from 'react-query';
import addCommentToRecipe from '@/services/recipes/addCommentToRecipe';
import { useStateContext } from '@/context/ContextProvider';

type Props = {
    recipe?: any,
    isCreate?: boolean,
    rating?: number,
    user?: string,
    userImage?: string,
    review?: string,
    date?: string
}

const ReviewItem = ({
    recipe,
    isCreate,
    rating,
    user,
    userImage,
    review,
    date,
} : Props) => {
  const queryClient = useQueryClient();
  const ctx = useStateContext();
  const [reviewRating, setReviewRating] = useState(5);
  const [comment, setComment] = useState('');

  const { mutate: addCommentMutate } = useMutation(addCommentToRecipe, {
    onSuccess: function(data) {
      queryClient.invalidateQueries({ queryKey: ['recipe_comments'] })
    }
  })

  function handleAddComment(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (ctx?.userData?.token && isCreate) {
          addCommentMutate({
            recipe_id: recipe['idMeal'],
            name: recipe['strMeal'],
            image_url: recipe['strMealThumb'],
            comment,
            rating: reviewRating,
            token: ctx.userData.token
          })
      }
  }

  return (
    <ReviewCard>
        <form onSubmit={handleAddComment}>
            <FlexRowDiv>
                <UserImage
                    src={userImage ? userImage : ''}
                    width={80}
                    height={80}
                    alt=""
                />
                <Callout marginSize='none'>
                    {user}
                </Callout>
            </FlexRowDiv>
            <MarginDiv m={'10px'}>
                <FlexRowDiv style={{ alignItems: 'end' }}>
                    {isCreate ?
                        <FlexRowDiv style={{ alignItems: 'end' }}>
                            <Rating
                                name="new-review-rating"
                                value={reviewRating}
                                onClick={(e) => setReviewRating(e.target.value)}
                                precision={0.5}
                            />
                            {reviewRating > 0 &&
                                <Caption marginSize="none" style={{ margin: '0 0 2px 5px' }}>
                                    <span style={{ color: colors.primary, fontWeight: '600', marginRight: '4px' }}>
                                        {reviewRating}
                                    </span>
                                    out of 5 stars
                                </Caption>
                            }
                        </FlexRowDiv>
                    :
                        <Rating
                            name="review-rating"
                            value={rating}
                            precision={0.5}
                            readOnly
                        />
                    }
                    <TextMuted marginSize='none' style={{ marginLeft: '10px' }}>
                        { date }
                    </TextMuted>
                </FlexRowDiv>
            </MarginDiv>
            {isCreate ?
                <FlexRowDiv>
                    <Input
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder='Add a comment'
                        iconRight={
                            <button
                                type="submit"
                            >
                                <IoSendSharp size={18} color={colors.dark} />
                            </button>
                        }
                    />
                </FlexRowDiv>
            :
                <P>
                    { review ? review : 'The user did not leave a comment.' }
                </P>
            }
        </form>
    </ReviewCard>
  )
}

const ReviewCard = styled.div`
  border-radius: 8px;
  padding: 12px;
  background-color: #FEFEFE;
  box-shadow: 0 1px 10px rgba(0, 0, 0,0.09);
  margin-bottom: 16px;
`;

const UserImage = styled(Image)`
    border-radius: 1000px;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.15);
    margin-right: 10px;
    object-fit: cover;
`

export default ReviewItem