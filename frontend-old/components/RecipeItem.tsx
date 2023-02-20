import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonSecondary, ButtonSecondaryOutline } from '../styles/buttons'
import { FlexRowDiv } from '../styles/styles'
import { P } from '../styles/texts'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5'
import { BsBookmarkPlus } from 'react-icons/bs'
import { colors } from '../styles/theme'
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

const RelativeDiv = styled.div`
    position: relative;
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

const RecipeItem = ({ recipe_id, href, src, name, favoriteInItem } : Props) => {

  return (
    <Card>
        <RecipeImage>
            <Favorite 
                onRecipeItem={favoriteInItem}
                recipe_id={recipe_id}
            />
            <Image
                style={{ objectFit: 'cover', borderRadius: '6px' }}
                src={src}
                fill
                alt={name}
            />
        </RecipeImage>
        <Content>
            <P style={{ textAlign: 'center' }}>
                { name }
            </P>
            <FlexRowDiv columnGap='8px'>
                <Link href={href} style={{ width: '50%' }}>
                    <ButtonSecondary textSmall>
                        <FlexRowDiv justifyCenter>
                            <IoBookOutline style={{ marginRight: '5px' }} />
                            Learn it
                        </FlexRowDiv>
                    </ButtonSecondary>
                </Link>
                <ButtonSecondaryOutline textSmall style={{ width: '50%' }}>
                    <FlexRowDiv justifyCenter>
                        <BsBookmarkPlus style={{ marginRight: '5px' }} />
                        Add to List
                    </FlexRowDiv>
                </ButtonSecondaryOutline>
            </FlexRowDiv>
        </Content>
    </Card>
  )
}

export default RecipeItem