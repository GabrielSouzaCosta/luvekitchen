import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/buttons';
import { Container } from '../../styles/layout';
import Logo from '../../components/Logo';
import { useStateContext } from '../../context/ContextProvider';
import UserMenu from './UserMenu';
import { Twirl as Hamburger } from 'hamburger-react'
import { colors } from '@/styles/theme';
import { IoExitOutline, IoExitSharp } from 'react-icons/io5';
import { FaArrowCircleRight } from 'react-icons/fa';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const currRoute = router.pathname;
  const ctx = useStateContext(); 

  return (
    <>
      <Nav>
        <NavContainer>
          <FlexContainer>
            <Logo />
            <List>
              <li>
                <NavLink isActive={currRoute === '/'} href='/'>
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink isActive={currRoute === '/about'} href='/about'>
                  About
                </NavLink>
              </li>
            </List>
            {ctx && ctx.userData?.accessToken ? 
              <UserMenu
                avatar_img={ctx.userData.avatar_img}
                name={ctx.userData.name}
                logout={ctx.logout}
              />
            :
              <LoginDiv>
                <Link href="/login">
                  <LoginButton type="button">
                    Login
                  </LoginButton>
                </Link>
              </LoginDiv>
            }
            <HamburgerDiv>
                <Hamburger
                  toggled={isSidebarOpen}
                  toggle={() => setIsSidebarOpen(!isSidebarOpen)}
                  color={colors.primary}
                  direction='right'
                />
            </HamburgerDiv>
          </FlexContainer>
        </NavContainer>
      </Nav>

      <Aside isOpen={isSidebarOpen}>
        <AsideList>
              <li>
                <NavLink isActive={currRoute === '/'} href='/'>
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink isActive={currRoute === '/about'} href='/about'>
                  About
                </NavLink>
              </li>
              
              <li>
                {!ctx?.userData?.accessToken &&
                <Link href="/login">
                  <LoginButton type="button">
                    Login
                  </LoginButton>
                </Link>
                }
              </li>
        </AsideList>
      </Aside>
    </>
  )
}

const Nav = styled.nav`
  background-color: #FCFCFC;
  width: 100%;
  box-shadow: 0 2px 12px rgba(20, 20, 20, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`

const NavContainer = styled(Container)`
  margin: 0 auto;
`

const HamburgerDiv = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const LoginDiv = styled.div`
  @media screen and (max-width: 768px) {
      display: none;
  }
`

const LoginButton = styled(Button)`
  padding: 8px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 6px 40px;   
  }
`

const List = styled.ul`
  display: flex;
  column-gap: 200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: ${p => p.isActive ? p.theme.colors.primary : p.theme.colors.dark};
  transition: all 200ms;
  &:hover {
    color: ${p => p.theme.colors.primary}
  }
`

const Aside = styled.aside`
  display: none;
  background-color: #FCFCFC;
  width: 220px;
  height: 100vh;
  margin-right: ${({isOpen}) => isOpen ? '0px' : '-220px'};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: all 250ms;
  align-items: center;
  z-index: 30;
  box-shadow: 2px 0px 12px rgba(30, 30, 30, 0.1);
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const AsideList = styled(List)`
  width: 100%;
  flex-direction: column;
  row-gap: 20px;
  column-gap: 0;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export default Navbar