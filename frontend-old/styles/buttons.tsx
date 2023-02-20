import styled from "styled-components"
import { colors } from './theme'

export const Button = styled.button`
    text-align: center;
    border-radius: 100px;
    padding: 8px 18px;
    max-width: 180px;
    width: 100%;
    border-width: 1px;
    border: 1px solid transparent;
    white-space: nowrap;
    font-size: ${({ textSmall } : { textSmall?: boolean }) => textSmall ? '16px' : '20px'};
`

export const ButtonPrimary = styled(Button)`
    background-color: ${colors.primary};
    color: ${colors.white};
    &:hover {
        background-color: ${colors.dark};
        color: ${colors.secondary};
        filter: brightness(125%);
        transition: all 250ms;
        box-shadow: 0px 4px 14px #00000033;
        .loader {
            border-color: ${colors.secondary};
            border-bottom-color: transparent;
        }
    }
`

export const ButtonPrimaryOutline = styled(Button)`
    background-color: transparent;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    &:hover {
        background-color: ${colors.primary};
        color: ${colors.light};
        border: 1px solid ${colors.primary};
        transition: all 250ms;
        box-shadow: 0px 4px 14px #00000033;
    }
`

export const ButtonSecondary = styled(Button)`
    background-color: ${colors.secondary};
    color: ${colors.white};
    &:hover {
        background-color: ${colors.light};
        color: ${colors.primary};
        border: 0.5px solid ${colors.primary};
        transition: all 250ms;
        box-shadow: 0px 4px 14px #00000033;
    }
`

export const ButtonSecondaryOutline = styled(Button)`
    background-color: transparent;
    color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    &:hover {
        background-color: ${colors.primary};
        color: ${colors.light};
        border: 1px solid ${colors.primary};
        transition: all 250ms;
        box-shadow: 0px 4px 14px #00000011;
    }
`

const StyledPrimaryToggleButton = styled(ButtonPrimaryOutline)`

`

const StyledSecondaryToggleButton = styled(ButtonSecondaryOutline)`
    &:hover {
        background-color: ${colors.secondary};
        color: ${colors.light};
        border: 1px solid ${colors.secondary};
        transition: all 250ms;
        box-shadow: 0px 4px 12px #00000011;
    }
`

export const PrimaryToggleButton = ({
    toggled,
    text,
    ...props
}: { toggled : boolean, text: string, props: React.HTMLAttributes<HTMLButtonElement> }) => {
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

export const SecondaryToggleButton = ({
    toggled,
    text,
    ...props
}: { toggled : boolean, text: string, props?: React.HTMLAttributes<HTMLButtonElement> }) => {
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