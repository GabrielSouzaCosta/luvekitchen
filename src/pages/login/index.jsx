import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import InputContainer from '../../components/InputContainer'
import Logo from '../../components/Logo'
import { Button } from '../../styles/buttons'
import { AlignCenterDiv, FlexRowDiv, FullWidthDiv, MarginDiv, ShowOnlyMobileDiv } from '../../styles/layout'
import { AlertText, Callout, H1, P } from '../../styles/texts'
import LoginBgImage from '../../../public/images/login-bg.jpg'
import { Input, PasswordInput } from '../../styles/inputs'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/ContextProvider'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore'

const Login = () => {
  const router = useRouter();
  const redirectToPage = router.query;
  const ctx = useStateContext();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ requestError, setRequestError ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleLogin = async (data) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({user}) => {
        const userDoc = doc(db, "users", user.uid); 
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          ctx?.saveUserSession({
            id: user.uid,
            accessToken: user.accessToken,
            ...docSnap.data()
          });
        }
        
        if (redirectToPage?.next) {
          router.push(redirectToPage.next);
        } else {
          router.push('/');
        }
      })
      .catch((err) => {
        if (err.message) {
          setRequestError('Email or password is incorrect');
        } else {
          setRequestError('Error on login, try again');
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <>
      <Head>
        <title>Luv&amp;Kitchen - Login</title>
        <meta name="description" content="Login section" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlexRowContent>
          <LeftContentDiv>
            <MarginDiv m={'20px 0 0 30px'}>
              <Logo />
            </MarginDiv>
          </LeftContentDiv>
          <FormContainer>
            <LoginForm onSubmit={handleSubmit(handleLogin)}>
                <ShowOnlyMobileDiv mb={'20px'}>
                  <Logo />
                </ShowOnlyMobileDiv>

                <H1>
                  Login
                </H1>

                <FullWidthDiv>
                  <InputContainer
                    label={'Email'}
                  >
                    <Input 
                      type="text"
                      placeholder="CordonBleuChef"
                      register={register}
                      name="email"
                      validationSchema={{ required: true }}
                    />
                    <AlertText>
                      {errors?.email && errors.email.message}
                    </AlertText>
                  </InputContainer>

                  <InputContainer
                    label={'Password'}
                  >
                    <PasswordInput
                      type="password"
                      placeholder='Your password'
                      register={register}
                      name="password"
                      validationSchema={{ required: true }}
                    />
                    <AlertText>
                      {errors?.password && errors.password.message}
                    </AlertText>
                  </InputContainer>

                  {requestError &&
                    <AlertText>
                      <FlexRowDiv>
                        <MarginDiv mr={'5px'}>
                          <RiErrorWarningLine />
                        </MarginDiv>
                        {requestError}
                      </FlexRowDiv>
                    </AlertText>
                  }

                </FullWidthDiv>

                <AlignCenterDiv>
                  <Button style={{ width: '100%' }} type="submit">
                    {isLoading ? 
                      <FlexRowDiv style={{ textAlign: 'center', justifyContent: 'center', width: '100%' }}>
                        <MarginDiv mr={'8px'}>
                          <span className='loader'></span>
                        </MarginDiv>
                        Logging in.. 
                      </FlexRowDiv>
                     : 
                      'Log in'
                    }
                  </Button>

                  <MarginDiv mt={'30px'} mb={'4px'}>
                    <P>
                      Does not have an account yet?
                    </P>
                  </MarginDiv>

                  <Link href="/register">
                    <AlertText semibold>
                      Register Now
                    </AlertText>
                  </Link>
                </AlignCenterDiv>

            </LoginForm>
          </FormContainer>
      </FlexRowContent>
    </>
  )
}

const FlexRowContent = styled(FlexRowDiv)`
  height: 100vh;
  background-color: ${p => p.theme.colors.light};
  overflow-y: auto;
`

const LeftContentDiv = styled.div`
  background-image: url(${LoginBgImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #191919;
  background-position-x: 20%;
  height: 100%;
  max-width: 50%;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none
  }
`

const FormContainer = styled.div`
  padding: 0 220px;
  width: 40%;
  @media screen and (max-width: 1400px) {
    padding: 0 100px;
    width: 50%;
  }
  @media screen and (max-width: 968px) {
    padding: 0 20px;
    width: 100%;
  }
`

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  @media screen and (max-width: 1400px) {
      row-gap: 10px;  
  }
`

export default Login