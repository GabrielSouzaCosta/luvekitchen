import React from 'react'
import styled from 'styled-components'
import CookiesBanner from './CookiesBanner'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children, contentTop }) => {
  return (
    <>
      <LayoutContainer>
          <Navbar />
          <Content contentTop={contentTop}>
            { children }
          </Content>
          <Footer />
      </LayoutContainer>
      <CookiesBanner />
    </>
  )
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  margin-bottom: ${p => p.contentTop ? 'auto' : '0'};
  overflow: hidden;
`

export default Layout