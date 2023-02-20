import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoSrc from '../public/images/logo.png'

const Logo = () => {
  return (
    <Link href="/">
        <Image src={LogoSrc} width={240} alt="" />
    </Link>
  )
}

export default Logo