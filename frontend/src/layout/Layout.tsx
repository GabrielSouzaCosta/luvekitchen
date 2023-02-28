import React from 'react'
import styled from 'styled-components'
import CookiesBanner from './CookiesBanner'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode,
    contentTop?: boolean
}

const Layout = ({ children, contentTop } : Props) => {
  return (
    <>
      <LayoutContainer>
          <Navbar />
          <div style={{ display: 'flex', marginBottom: contentTop ? 'auto': 0, overflow: 'hidden' }}>
            { children }
          </div>
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

export default Layout