import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 4px 20px;
    @media screen and (max-width: 968px) {
        padding: 4px 8px;
    }
`

export const FlexRowDiv = styled.div`
    display: flex;
    align-items: center;
    column-gap: ${({ columnGap }) => columnGap ? columnGap : '0'};

    ${ ({justifyCenter}) => justifyCenter && css`
        justify-content: center;
    `}
`

export const FlexRowBetweenDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(p) => p.responsive && css`
        @media screen and (max-width: 968px) {
            flex-direction: column;
            justify-content: start;
            align-items: flex-start;
        }
    `
    }
`

export const FlexColumnCenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const AlignCenterDiv = styled.div`
    text-align: center;
    width: 100%
`

export const FullWidthDiv = styled.div`
    width: 100%;
`

export const MarginDiv = styled.div`
    ${(p) => p.fullWidth && css`
        width: 100%;
    `};

    ${(p) => p.m && css`
        margin: ${p.m};
    `}
    ${(p) => p.mx && css`
        margin: 0 ${p.mx};
    `}
    ${(p) => p.my && css`
        margin: ${p.my} 0;
    `}
    ${(p) => p.mt && css`
        margin-top: ${p.mt};
    `}
    ${(p) => p.mb && css`
        margin-bottom: ${p.mb};
    `}
    ${(p) => p.ml && css`
        margin-left: ${p.ml};
    `}
    ${(p) => p.mr && css`
        margin-right: ${p.mr};
    `}
`

export const ShowOnlyMobileDiv = styled(MarginDiv)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }   
`