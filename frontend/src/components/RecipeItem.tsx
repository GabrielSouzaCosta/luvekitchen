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


type Props = {
    recipe_id: string,
    href: string,
    src: string,
    name: string,
    favoriteInItem?: boolean,
}

const Card = styled.div`
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;  /* NEW */
    min-width: 0; 
`

const RecipeImage = styled.div`
    position: relative;
    max-width: 360px;
    height: 280px;
`

const Content = styled.div`
    padding: 10px 8px;
    background-color: #FAFAFA;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

const Name = styled(P)`
    text-align: center;
`

const RecipeItem = ({ recipe_id, href, src, name, favoriteInItem } : Props) => {

  return (
    <Card>
        <RecipeImage>
            <Favorite 
                onRecipeItem={favoriteInItem}
                recipe_id={recipe_id}
            />
            <CoverRoundedImage
                src={src}
                fill
                alt={name}
            />
        </RecipeImage>
        <Content>
            <Name>
                { name }
            </Name>
            <FlexRowDiv columnGap='8px'>
                <Link href={href} style={{ width: '50%' }}>
                    <Button variant="secondary" textSmall>
                        <FlexRowDiv justifyCenter>
                            <IoBookOutline style={{ marginRight: '5px' }} />
                            Learn it
                        </FlexRowDiv>
                    </Button>
                </Link>
                <Button variant="secondary-outline" textSmall style={{ width: '50%' }}>
                    <FlexRowDiv justifyCenter>
                        <BsBookmarkPlus style={{ marginRight: '5px' }} />
                        Add to List
                    </FlexRowDiv>
                </Button>
            </FlexRowDiv>
        </Content>
    </Card>
  )
}

export default RecipeItem