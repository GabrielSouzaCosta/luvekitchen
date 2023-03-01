import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { Container } from '../styles/layout'
import { P } from '../styles/texts'
import { colors } from '../styles/theme'

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FlexDiv>
          <Logo />

          <List>
              <li>
                <Link href='/'>
                  Recipes
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/login'>
                  Login
                </Link>
              </li>
          </List>
        </FlexDiv>
        <LightLine />
        <FlexDiv>
          <BottomText marginSize="none">
            Copyright © 2023 Luv&amp;Kitchen
          </BottomText>
          <BottomText marginSize="none">
            Website developed by <span style={{ color: colors.primary }}>Gabriel Souza Costa</span>
          </BottomText>
        </FlexDiv>
      </FooterContainer>
    </StyledFooter>
  )
}

const FooterContainer = styled(Container)`
  width: 100%;
  padding: 14px 0px;
`;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${colors['dark-variant']};
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  > p {
    color: ${p => p.theme.colors.light};
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    row-gap: 8px;
  }
`

const List = styled.ul`
  display: flex;
  column-gap: 200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  > li > a {
    color: ${p => p.theme.colors.light};
    transition: all 200ms;
    &:hover {
      color: ${p => p.theme.colors.primary}
    }
  }
`

const LightLine = styled.div`
  margin: 8px auto;
  border: 0.5px solid #ef476fab;
  @media screen and (max-width: 968px) {
    width: 90%;
  }
`;

const BottomText = styled(P)`
  @media screen and (max-width: 968px) {
     font-size: 0.8rem;
  }
`

export default Footer