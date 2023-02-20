import { fontWeight } from "@mui/system";
import styled, { css } from "styled-components";
import { StringMappingType } from "typescript";
import { colors, margins } from "./theme";

type Props = {
    fontWeight?: string,
    marginSize?: string,
    semibold?: boolean
}

export const H1 = styled.h1`
    font-size: 36px;
    color: ${colors.dark};
    margin-bottom: ${({marginSize}: Props) => marginSize ? margins[marginSize] : margins['sm']};
    font-weight: ${({fontWeight} : Props) => fontWeight ? fontWeight : '500'};
`

export const Title = styled(H1)`
    font-size: 56px;
`

export const H2 = styled.h2`
    color: ${colors.dark};
    font-weight: 500;
    font-size: 30px;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const H3 = styled.h3`
    color: ${colors.dark};
    font-weight: 500;
    font-size: 36px;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const H4 = styled.h4`
    color: ${colors.dark};
    font-weight: 500;
    font-size: 30px;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const H5 = styled.h4`
    color: ${colors.dark};
    font-weight: 500;
    font-size: 28px;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const P = styled.p`
    color: ${colors.dark};
    font-size: 1.1rem;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const Callout = styled.p`
    color: ${colors.dark};
    font-size: 1.5rem;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const TextMuted = styled(P)`
    color: #505050;
    margin-bottom: ${({marginSize}: {marginSize?: string}) => marginSize ? margins[marginSize] : margins['sm']};
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: ${colors.dark};
    padding-left: 0;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 1.2rem;
`

export const AlertText = styled(P)`
    color: #9A3D53;
    
    ${({semibold} : Props) => semibold && css`
        font-weight: 600;
    `}
`