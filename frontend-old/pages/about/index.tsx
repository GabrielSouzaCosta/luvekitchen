import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'
import Layout from '../../layout/Layout'
import { H3, H4, P } from '../../styles/texts'
import { AboutContainer, SocialIcons } from './styles'

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
            <div style={{ textAlign: 'center' }}>
              <H3>
                About This Website
              </H3>
            
              <P>
                <strong>Luv&amp;Kitchen</strong> has the main objective to make people who are stressed from everyday relax while seeing lots of funny, cute and amazing cats. In addition, we want to provide you with interesting facts about these fellow animals.
              </P>
            </div>

            <div style={{ textAlign: 'center' }}>
              <H4 style={{ marginBottom: '1rem' }}>
                Contact
              </H4>
              <P>
                This Website was created by Gabriel Souza Costa.
              </P>
              <SocialIcons />
            </div>
          </AboutContainer>
        </Layout>
      </>
  )
}

export default About