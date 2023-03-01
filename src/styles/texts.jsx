import styled, { css, ThemeProps } from "styled-components";

export const H1 = styled.h1`
    font-size: 36px;
    color: ${p => p.theme.colors.dark};
    margin-bottom: ${(p) => p.marginSize ? p.theme.margins[p.marginSize] : p.theme.margins['sm']};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '500'};
    @media screen and (max-width: 1400px) {
        font-size: 30px;
    }
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

export const Title = styled(H1)`
    font-size: 56px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`

export const H2 = styled.h2`
    color: ${(p) => p.theme.colors.dark};
    font-weight: 500;
    font-size: 30px;
    margin-bottom: ${(p) => p.marginSize ? p.theme.margins[p.marginSize] : p.theme.margins['sm']};
    @media screen and (max-width: 1400px) {
        font-size: 28px;
    }
    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`

export const H3 = styled.h3`
    color: ${(p) => p.theme.colors.dark};
    font-weight: 500;
    font-size: 28px;
    margin-bottom: ${(p) => p.marginSize ? p.theme.margins[p.marginSize] : p.theme.margins['sm']};
    @media screen and (max-width: 1400px) {
        font-size: 26px;
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`

export const H4 = styled.h4`
    color: ${(p) => p.theme.colors.dark};
    font-weight: 500;
    font-size: 26px;
    margin-bottom: ${(p) => p.marginSize ? p.theme.margins[p.marginSize] : p.theme.margins['sm']};
    @media screen and (max-width: 1400px) {
        font-size: 24px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

export const H5 = styled.h4`
    color: ${(p) => p.theme.colors.dark};
    font-weight: 500;
    font-size: 24px;
    margin-bottom: ${(p) => p.marginSize ? p.theme.margins[p.marginSize] : p.theme.margins['sm']};
    @media screen and (max-width: 1400px) {
        font-size: 22px;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export const P = styled.p`
    color: ${(p) => p.theme.colors.dark};
    font-size: 1.1rem;
    margin-bottom: ${(p) => p.marginSize ? p.theme.margins[p.marginSize] : p.theme.margins['sm']};
    @media screen and (max-width: 1400px) {
        font-size: 1rem;
    }
    ${(p) => p.hover && css`
        &:hover {
            color: ${({theme}) => theme.colors.primary};
            transition: color 200ms;
        }
    `}
`

export const Callout = styled(P)`
    font-size: 1.5rem;
    @media screen and (max-width: 968px) {
        font-size: 1.2rem;
    }
`

export const Caption = styled(P)`
    font-size: 1rem;
    @media screen and (max-width: 1400px) {
        font-size: 0.8rem;
    }
`

export const TextMuted = styled(P)`
    color: #505050;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: ${p => p.theme.colors.dark};
    padding-left: 0;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 1.2rem;
    @media screen and (max-width: 1400px) {
        font-size: 1.1rem;
    }
`

export const AlertText = styled(P)`
    color: #9A3D53;
    
    ${({semibold}) => semibold && css`
        font-weight: 600;
    `}
`