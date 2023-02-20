import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { Button } from '../../styles/buttons';
import { Container } from '../../styles/layout';
import Logo from '../../components/Logo';
import { useStateContext } from '../../context/ContextProvider';
import UserMenu from './UserMenu';


function Navbar() {
  const ctx = useStateContext();

  console.log(ctx);    

  return (
    <Nav>
      <NavContainer>
        <FlexContainer>
          <Logo />
          <List>
            <li>
              <Link href='/recipes' className='link'>
                Recipes
              </Link>
            </li>
            <li>
              <Link href='/about' className='link'>
                About
              </Link>
            </li>
          </List>
          {ctx && ctx.userData ? 
            <UserMenu
              avatar_img={ctx.userData.avatar_img}
              name={ctx.userData.name}
              logout={ctx.logout}
            />
          :
            <Link href="/login">
              <Button type="button" style={{ padding: '8px 60px' }}>
                Login
              </Button>
            </Link>
          }
        </FlexContainer>
      </NavContainer>
    </Nav>
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
  padding: 8px 6px;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  column-gap: 200px;
`

export default Navbar