import styled, { css } from "styled-components";

type Props = {
    columnGap?: string,
    justifyCenter?: boolean,
    m?: string,
    mt?: string,
    mb?: string,
    ml?: string,
    mr?: string,
}

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
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
`

export const MarginView = styled.div`
    margin: ${(p : Props) => p.m ? p.m: '0'};
`

export const MarginVerticalView = styled.div`
    margin: ${(p : Props) => p.m ? p.m: '0'} 0;
    ${(p : Props) => p.mt && css`
        margin-top: ${p.mt};
    `}
    ${(p : Props) => p.mb && css`
        margin-bottom: ${p.mb};
    `}
`

export const MarginHorizontalView = styled.div`
    margin: 0 ${(p : Props) => p.m ? p.m: '0'};
    ${(p : Props) => p.ml && css`
        margin-left: ${p.ml};
    `}
    ${(p : Props) => p.mr && css`
        margin-right: ${p.mr};
    `}
`