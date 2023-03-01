import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../../public/images/logo.png'

const Logo = () => {
  return (
    <RelativeDiv>
      <Image 
        src={LogoSrc} 
        fill 
        alt="" 
      />
    </RelativeDiv>
  )
}

const RelativeDiv = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  @media screen and (max-width: 968px) {
      max-width: 140px;
      height: 30px;
  }
  > img {
    object-fit: contain;
  }
`

export default Logo