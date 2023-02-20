import styled from "styled-components"
import { Container } from "../../styles/layout"
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'
import Link from "next/link"

export const AboutContainer = styled(Container)`
    padding: 0 30rem;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 1400px) {
        padding: 2rem 24rem;
    }
    @media screen and (max-width: 968px) {
        padding: 1rem 4rem;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    margin-top: 2.5rem;
`

export const SocialIcons = () => (
    <Ul>
        <li>
            <Link href="https://www.linkedin.com/in/gabriel-souza-costa-8443481bb/" target="_blank" className="link">
                <IoLogoLinkedin size={64} />
            </Link>
        </li>
        <li>
            <Link href="https://github.com/GabrielSouzaCosta/" target="_blank" className="link">
                <IoLogoGithub size={64} />
            </Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/__gabrielscosta__/" target="_blank" className="link">
                <IoLogoInstagram size={64} />
            </Link>
        </li>
        <li>
            <Link href="mailto:gabrielsscosta2010@hotmail.com" target="_blank" className='link'>
                <IoMailOutline size={64} />
            </Link>
        </li>
    </Ul>
)