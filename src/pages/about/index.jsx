import { AlignCenterDiv } from '@/styles/layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Layout from '../../layout/Layout'
import { H3, H4, P } from '../../styles/texts'
import { AboutContainer, SocialIcons } from '../../styles/about'

const About = () => {
  return (
    <>
        <Head>
            <title>
                Luv&amp;Kitchen - About
            </title>
        </Head>
        <Layout>
          <AboutContainer>
            <AlignCenterDiv>
              
              <H3>
                About This Website
              </H3>
            
              <P>
                Welcome to <strong>Luv&amp;Kitchen</strong>! We offer a diverse collection of recipes from all over the world, so you can explore new cuisines and flavors right from your own kitchen. Our recipes are easy to follow and guaranteed to satisfy your cravings. Happy cooking!
              </P>

              <ImageDiv>
                <Image 
                  src={require('../../../public/images/cat-cooker.jpg')}
                  fill
                  alt=""
                />
              </ImageDiv>

            </AlignCenterDiv>

            <AlignCenterDiv>

              <H4 marginSize={'sm'}>
                Contact
              </H4>
              <P>
                This Website was created by Gabriel Souza Costa.
              </P>
              <SocialIcons />

            </AlignCenterDiv>
          </AboutContainer>
        </Layout>
      </>
  )
}

const ImageDiv = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 100%;
  text-align: center;
  margin: 20px auto;
  > img {
    border-radius: 100%
  }
  @media screen and (max-width: 968px) {
    margin: 12px auto;
    height: 170px;
    width: 170px;
  }
`

export default About