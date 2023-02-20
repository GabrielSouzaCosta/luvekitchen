import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { FlexRowDiv, MarginVerticalView } from '../styles/layout';
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
            <UserImage 
                src={userImage}
                width={80}
                height={80}
                alt=""
            />
            <Callout marginSize='none'>
                {user}
            </Callout>
        </FlexRowDiv>

        <MarginVerticalView m={'10px'}>
            <FlexRowDiv>
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
        </MarginVerticalView>
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

const UserImage = styled(Image)`
    border-radius: 1000px;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.15);
    margin-right: 10px;
    object-fit: cover;
`

export default ReviewItem