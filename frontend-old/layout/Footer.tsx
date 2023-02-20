import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { Container } from '../styles/styles'
import { P } from '../styles/texts'
import { colors } from '../styles/theme'

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FlexDiv>
          <Logo />
        </FlexDiv>
        <LightLine />
        <FlexDiv>
          <P marginSize="none">
            Copyright © 2023 Luv&amp;Kitchen
          </P>
          <P marginSize="none">
            Website developed by <span style={{ color: colors.primary }}>Gabriel Souza Costa</span>
          </P>
        </FlexDiv>
      </FooterContainer>
    </StyledFooter>
  )
}

const FooterContainer = styled(Container)`
  width: 100%;
  padding: 14px 0;
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
    color: ${colors.light};
  }
`

const LightLine = styled.div`
  margin: 8px 0;
  border: 0.5px solid #ef476fab;
`;

export default Footer