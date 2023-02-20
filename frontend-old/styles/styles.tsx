import styled, { css } from "styled-components";

type Props = {
    columnGap?: string,
    justifyCenter?: boolean,
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