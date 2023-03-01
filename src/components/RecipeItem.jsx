import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../styles/buttons'
import { FlexRowDiv } from '../styles/layout'
import { P } from '../styles/texts'
import { CoverRoundedImage } from '../styles/others';
import { IoBookOutline } from 'react-icons/io5'
import { BsBookmarkPlus } from 'react-icons/bs'
import Favorite from './Favorite'

const Card = styled.div`
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
    min-width: 0; 
`

const RecipeImage = styled.div`
    position: relative;
    width: 100%;
    height: 280px;
    @media screen and (max-width: 968px) {
        height: 150px;
    }
`

const Content = styled.div`
    overflow: visible;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 8px;
    background-color: #FAFAFA;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    @media screen and (max-width: 968px) {
        height: 85px;
    }
`

const Name = styled(P)`
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
            line-clamp: 2;
    -webkit-box-orient: vertical;    
    text-align: center;
    @media screen and (max-width: 968px) {
            font-size: 0.9rem;
    }
`

const RecipeItem = ({ recipe_id, href, src, name, favoriteInItem }) => {

  return (
    <Card>
        <RecipeImage>
            <Favorite 
                recipeItem={favoriteInItem}
                recipe_id={recipe_id}
                name={name}
                image_url={src}
            />
            <CoverRoundedImage
                src={src ? src : require('../../public/images/image_not_found.gif')}
                fill
                alt={name ? name : ''}
            />
        </RecipeImage>
        <Content>
            <Name>
                { name }
            </Name>
            <FlexRowDiv columnGap='8px'>
                <Link href={href} style={{ width: '100%', textAlign: 'center' }}>
                    <Button variant="secondary" textSmall>
                        <FlexRowDiv justifyCenter>
                            <IoBookOutline style={{ marginRight: '5px' }} />
                            Learn it
                        </FlexRowDiv>
                    </Button>
                </Link>
            </FlexRowDiv>
        </Content>
    </Card>
  )
}

export default RecipeItem