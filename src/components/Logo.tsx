import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../../public/images/logo.png'

const Logo = () => {
  return (
    <RelativeDiv>
      <Image src={LogoSrc} style={{ objectFit: 'contain' }} fill alt="" />
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
`

export default Logo