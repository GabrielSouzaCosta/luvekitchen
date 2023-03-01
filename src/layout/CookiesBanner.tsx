import { Button } from '@/styles/buttons';
import { P } from '@/styles/texts';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const CookiesBanner = () => {
  const [consented, setConsented] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function consentCookiesPolicy() {
    if (typeof window !== "undefined") {
        setConsented(true);
        sessionStorage.setItem('consentedCookiesPolicy', 'consented');
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
        if (sessionStorage.getItem('consentedCookiesPolicy') === 'consented') {
            setConsented(true)
        }
        setLoaded(true)
    }
  }, [])

  if (consented || !loaded) return <div></div>;
  return (
    <CookiesContainer>
        <Inner>
            <Message>
              Welcome to our website! We use essential cookies to ensure that our website functions properly.
            </Message>
            <Button textSmall onClick={consentCookiesPolicy}>
                I understand
            </Button>
        </Inner>
    </CookiesContainer>
  )
}

const CookiesContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: ${p => p.theme.colors.white};
  border-top-left-radius: 1000px;
  border-top-right-radius: 1000px;
  box-shadow: -2px 0 10px rgba(30, 30, 30, 0.15);
  margin: 0 auto;
  transition: all 200ms;
  width: 66%;
  @media screen and (max-width: 968px) {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const Inner = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 18px 20px;
  @media screen and (max-width: 968px) {
    padding: 10px 8px;
  }
`

const Message = styled(P)`
  margin: 0 auto;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.dark};
  font-size: 16px;
  font-weight: 600;
  max-width: 75%;
  width: 100%;
  @media screen and (max-width: 968px){
    font-size: 10px;
    max-width: 75%;
  }
`

export default CookiesBanner