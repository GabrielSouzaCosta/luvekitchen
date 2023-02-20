import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { User } from "../../@types/context";
import { colors } from "../../styles/theme";

const UserMenu = ({
  avatar_img,
  name, 
  logout
} : User & { logout: () => void }) => {
  const [clicked, setIsClicked] = useState(false);
  console.log(avatar_img, name, logout)

  return (
    <UserMenuDiv>
      <div className='pointer middle'
        onClick={() => setIsClicked(!clicked)}
      >
        <Image
          src={require('../../../public/avatars/'+avatar_img)}
          alt={name ? name : ''}
          width={50}
          height={50}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      <NavDropdown className={clicked ? 'visible' : ''}>
        <div>
          <NavDropdownList>
              <NavDropdownItem>
                  <NavDropdownLink href="/profile">
                      Profile
                  </NavDropdownLink>
              </NavDropdownItem>
              <NavDropdownItem>
                  <NavDropdownLink href="/" onClick={logout}>
                      Logout
                  </NavDropdownLink>
              </NavDropdownItem>
          </NavDropdownList>
        </div>
      </NavDropdown>
    </UserMenuDiv>
  )
}

const UserMenuDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const NavDropdown = styled.div`
  display: none;
  position: absolute;
  padding: 2px 6px;
  bottom: -185%;
  left: 50%;
  transform: translateX(-50%);
  background: #FEFEFECC;
  box-shadow: 0px 15px 24px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  white-space: nowrap;
  text-align: center;
  &.visible {
    display: block;
    animation: ${fadeIn} 250ms linear forwards;
  }
`

const NavDropdownList = styled.ul`
  padding: 0 20px;
`

const NavDropdownItem = styled.li`
  margin-bottom: 6px;
  border-bottom: 0.2px solid ${colors['secondary-variant']};
  padding: 0 6px;
  padding-bottom: 6px;
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
    :hover {
      border: none;
    }
  }
  &:hover {
    border-bottom: 0.2px solid ${colors.primary};
    transition: all 250ms;
    a {
      color: ${colors.primary};
      transition: all 250ms;
    }
  }
`

const NavDropdownLink = styled(Link)`
  color: ${colors['secondary-variant']};
`

export default UserMenu