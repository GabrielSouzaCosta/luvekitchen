import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { FlexRowDiv } from '../styles/styles';
import { Callout, P, TextMuted } from '../styles/texts';
import { colors } from '../styles/theme';

type Props = {
    rating: number,
    user: string,
    userImage: string,
    review?: string,
    date: string
}

const ReviewItem = ({
    rating,
    user,
    userImage,
    review,
    date,
} : Props) => {
  return (
    <ReviewCard>
        <FlexRowDiv>
            <Image 
                src={userImage}
                width={80}
                height={80}
                alt=""
                style={{ borderRadius: '1000px', boxShadow: '1px 1px 14px rgba(0, 0, 0, 0.15)', marginRight: '10px', objectFit: 'cover' }}
            />
            <Callout marginSize='none'>
                {user}
            </Callout>
        </FlexRowDiv>

        <FlexRowDiv style={{ margin: '10px 0' }}>
            <Rating
                name="review-rating" 
                value={rating} 
                precision={0.5}
                readOnly
            />	
            <TextMuted marginSize='none' style={{ marginLeft: '10px' }}>
                { date }
            </TextMuted>
        </FlexRowDiv>
        <P>
            { review ? review : 'The user did not leave a comment.' }
        </P>

    </ReviewCard>
  )
}

const ReviewCard = styled.div`
  border-radius: 8px;
  padding: 12px;
  background-color: #FCFCFC;
  box-shadow: 0 1px 10px rgba(0, 0, 0,0.07);
  margin-bottom: 16px;
`;

export default ReviewItem