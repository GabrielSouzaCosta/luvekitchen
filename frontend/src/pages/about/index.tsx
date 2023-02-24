import { AlignCenterDiv } from '@/styles/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'
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
                <strong>Luv&amp;Kitchen</strong> has the main objective to make people who are stressed from everyday relax while seeing lots of funny, cute and amazing cats. In addition, we want to provide you with interesting facts about these fellow animals.
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