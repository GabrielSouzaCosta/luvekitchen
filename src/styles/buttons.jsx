import styled, { css } from "styled-components"
import { colors } from "./theme"

export const Button = styled.button`
    max-width: ${p => p.maxWidth ? p.maxWidth : '180px' };
    text-align: center;
    border-radius: 100px;
    padding: 8px 18px;
    width: 100%;
    border-width: 1px;
    border: 1px solid transparent;
    white-space: nowrap;
    font-size: ${({ textSmall } ) => textSmall ? '16px' : '20px'};
    /* Primary */
    ${({ variant, theme }) => !variant && css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:hover {
            background-color: ${theme.colors.dark};
            color: ${theme.colors.secondary};
            filter: brightness(125%);
            transition: all 250ms;
            box-shadow: 0px 4px 14px #00000033;
            .loader {
                border-color: ${theme.colors.secondary};
                border-bottom-color: transparent;
            }
        }
    ` 
    }
    /* Primary Outline */
    ${({ variant, theme }) => variant === 'primary-outline' && css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.light};
            border: 1px solid ${theme.colors.primary};
            transition: all 250ms;
            box-shadow: 0px 4px 14px #00000033;
        }
    ` 
    }
    /* Secondary */
    ${({ variant, theme }) => variant === 'secondary' && css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.white};
        &:hover {
            background-color: ${theme.colors.light};
            color: ${theme.colors.primary};
            border: 0.5px solid ${theme.colors.primary};
            transition: all 250ms;
            box-shadow: 0px 4px 14px #00000033;
        }
    ` 
    }
    /* Secondary Outline */
    ${({ variant, theme }) => variant === 'secondary-outline' && css`
        background-color: transparent;
        color: ${theme.colors.secondary};
        border: 1px solid ${theme.colors.secondary};
        &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.light};
            border: 1px solid ${theme.colors.primary};
            transition: all 250ms;
            box-shadow: 0px 4px 14px #00000011;
        }
    ` 
    }
`



export const PrimaryToggleButton = ({
    toggled,
    text,
    ...props
}) => {
    return (
        <StyledPrimaryToggleButton 
            style={{
                backgroundColor: toggled ? colors.primary : 'transparent',
                color: toggled ? colors.light : colors.primary
            }}
            {...props}
        >
            { text }
        </StyledPrimaryToggleButton>
    )
}

const StyledPrimaryToggleButton = styled(Button)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.light};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        transition: all 250ms;
        box-shadow: 0px 4px 14px #00000033;
    }
    @media screen and (max-width: 1400px) {
        padding: 4px 8px;
        max-width: 120px;
    }
`

export const SecondaryToggleButton = ({
    toggled,
    text,
    ...props
}) => {
    return (
        <StyledSecondaryToggleButton
            style={{
                backgroundColor: toggled ? colors.secondary : 'transparent',
                color: toggled ? colors.light : colors.secondary
            }}
            {...props}
        >
            { text }
        </StyledSecondaryToggleButton>
    )
}

const StyledSecondaryToggleButton = styled(Button)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.light};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        transition: all 250ms;
        box-shadow: 0px 4px 12px #00000011;
    }
    @media screen and (max-width: 1400px) {
        padding: 4px 8px;
        max-width: 120px;
    }
`