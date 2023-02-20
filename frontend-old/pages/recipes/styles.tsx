import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { Input } from "../../styles/inputs"
import { Container } from "../../styles/styles"
import { Callout, H2, H3 } from "../../styles/texts"
import { colors } from "../../styles/theme"

type ImageProps = {
    src: string,
    name: string,
    href: string,
}

const StyledImageDiv = styled.div`
    margin: 0 auto;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    max-width: 360px;
    height: 280px;
    &:hover > div {
        background-color: ${colors.secondary};
        transition: all 250ms;
    }
`

const StyledCategoryCard = styled(StyledImageDiv)`
    width: 100%;
    margin: unset;
    position: relative;
    &:hover > a > div {
        background-color: ${colors.primary};
        transition: all 250ms;
    }
`

const CategoryCardBox = styled.div`
    background-color: #191919DD;
    padding: 12px 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    > p {
        color: ${colors.light};
        margin: 0;
    }
`

const RandomRecipeCardBox = styled(CategoryCardBox)`
    background-color: #19191955;
    padding: 12px 0 12px 20px;
    text-align: start;
    > p {
        font-weight: 600;
    }
`

export const RecipesContainer = styled(Container)`
    width: 100%;
    padding: 40px 0;
`

export const CategoriesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 30px; 
    justify-content: center;
    justify-items: center;
`

export const RecipeCard = ({ href, src, name } : ImageProps) => (
    <StyledImageDiv>
        <Link href={href}>
            <Image
                style={{ objectFit: 'cover', borderRadius: '6px' }}
                src={src}
                fill
                alt={name}
                />
            <RandomRecipeCardBox>
                <Callout>
                    { name }
                </Callout>
            </RandomRecipeCardBox>
        </Link>
    </StyledImageDiv>
)

export const CategoryCard = ({ href, src, name } : ImageProps) => (
    <StyledCategoryCard>
        <Link href={href}>
                <Image
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                    src={src}
                    fill
                    alt={name}
                />
            <CategoryCardBox>
                <Callout>
                    { name }
                </Callout>
            </CategoryCardBox>
        </Link>
    </StyledCategoryCard>
)

export const StyledH3 = styled(H3)`
    text-align: center;
    margin-top: 50px;
`

export const StyledInput = styled(Input)`
    max-width: 400px;
    width: 100%
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px; 
	min-height: 0;  /* NEW */
 	min-width: 0;
`