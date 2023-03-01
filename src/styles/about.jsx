import styled from "styled-components"
import { Container } from "./layout"
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'
import Link from "next/link"

export const AboutContainer = styled(Container)`
    padding: 0 30rem;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 1400px) {
        padding: 2rem 24rem;
    }
    @media screen and (max-width: 968px) {
        padding: 2rem 2rem;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    margin-top: 1.5rem;
    > li:nth-child(2n+1) > a {
        color: ${p => p.theme.colors.dark};
        transition: all 200ms;
        :hover {
            color: ${p => p.theme.colors.primary}
        }
    }
    > li:nth-child(2n) > a {
        color: ${p => p.theme.colors.dark};
        transition: all 200ms;
        :hover {
            color: ${p => p.theme.colors.secondary}
        }
    }
`

export const SocialIcons = () => (
    <Ul>
        <li>
            <Link href="https://www.linkedin.com/in/gabriel-souza-costa-8443481bb/" target="_blank">
                <IoLogoLinkedin size={64} />
            </Link>
        </li>
        <li>
            <Link href="https://github.com/GabrielSouzaCosta/" target="_blank">
                <IoLogoGithub size={64} />
            </Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/webdev_gabriel/" target="_blank">
                <IoLogoInstagram size={64} />
            </Link>
        </li>
        <li>
            <Link href="mailto:gabrielsscosta2010@hotmail.com" target="_blank">
                <IoMailOutline size={64} />
            </Link>
        </li>
    </Ul>
)