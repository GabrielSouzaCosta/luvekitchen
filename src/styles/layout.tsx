import styled, { css } from "styled-components";

type Props = {
    columnGap?: string,
    justifyCenter?: boolean,
    responsive?: boolean,
    fullWidth?: boolean,
    m?: string,
    my?: string,
    mx?: string,
    mt?: string,
    mb?: string,
    ml?: string,
    mr?: string,
}

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
    column-gap: ${({ columnGap }: Props) => columnGap ? columnGap : '0'};

    ${ ({justifyCenter} : Props) => justifyCenter && css`
        justify-content: center;
    `}
`

export const FlexRowBetweenDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(p : Props) => p.responsive && css`
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
    ${(p : Props) => p.fullWidth && css`
        width: 100%;
    `};

    ${(p : Props) => p.m && css`
        margin: ${p.m};
    `}
    ${(p : Props) => p.mx && css`
        margin: 0 ${p.mx};
    `}
    ${(p : Props) => p.my && css`
        margin: ${p.my} 0;
    `}
    ${(p : Props) => p.mt && css`
        margin-top: ${p.mt};
    `}
    ${(p : Props) => p.mb && css`
        margin-bottom: ${p.mb};
    `}
    ${(p : Props) => p.ml && css`
        margin-left: ${p.ml};
    `}
    ${(p : Props) => p.mr && css`
        margin-right: ${p.mr};
    `}
`

export const ShowOnlyMobileDiv = styled(MarginDiv)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }   
`