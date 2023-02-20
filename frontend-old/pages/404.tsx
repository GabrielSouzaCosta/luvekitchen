import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { ButtonPrimary } from '../styles/buttons'
import { Container } from '../styles/styles'
import { H2, P, Title } from '../styles/texts'
import { colors } from '../styles/theme'

const NotFoundPage = () => {
  return (
    <Main>
        <Container>
            <Title style={{ color: colors.light }}>
                404 NOT FOUND
            </Title>
            <P style={{ color: colors.light }} marginSize={'md'}>
                Are you lost? Go back to a safe place.
            </P>
            <div style={{ margin: '0 auto' }}>
                <Link href='/' >
                    <ButtonPrimary>
                        Return to safety
                    </ButtonPrimary>
                </Link>
            </div>
        </Container>
    </Main>
  )
}

const Main = styled.main`
    background-color: ${colors.dark};
    color: ${colors.light};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default NotFoundPage