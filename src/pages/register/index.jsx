import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import InputContainer from '../../components/InputContainer'
import Logo from '../../components/Logo'
import { Button, PrimaryToggleButton, SecondaryToggleButton } from '../../styles/buttons'
import { FlexRowDiv, AlignCenterDiv, MarginDiv, FullWidthDiv, ShowOnlyMobileDiv } from '../../styles/layout'
import { AlertText, H1, P, Caption } from '../../styles/texts'
import RegisterBgImage from '../../../public/images/register-bg.jpg'
import { Input, PasswordInput } from '../../styles/inputs'
import Head from 'next/head'
import { Controller, useForm } from 'react-hook-form'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/ContextProvider'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { masculineAvatars, feminineAvatars } from '../../../public/avatars';
import { auth } from '@/firebase'
import { createUserDocument } from '@/firebase'
import { doc, getDoc } from '@firebase/firestore'
import { db } from '../../firebase'

const Register = () => {
  const router = useRouter();
  const ctx = useStateContext();

  const { control, register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      gender: 'masculine'
    }
  });
  const [ requestError, setRequestError ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleRegister = async (data) => {
    setIsLoading(true);

    let avatar_img;
    if (data.gender === 'masculine') {
        avatar_img = masculineAvatars[Math.floor(Math.random()*masculineAvatars.length)];
    } else {
        avatar_img = feminineAvatars[Math.floor(Math.random()*feminineAvatars.length)];
    }
    
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({user}) => {
        createUserDocument(user, {
          avatar_img,
          name: data.name,
          gender: data.gender,
        })

        ctx?.saveUserSession({
          avatar_img,
          name: data.name,
          id: user.uid,
          accessToken: user.accessToken,
        });

        router.push('/');
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') 
        {
          setRequestError('Email is already in use');
        }
        else if (err.code === 'auth/weak-password') {
          setRequestError('Your password is not strong enough');
        }
        else if (err.code === 'auth/invalid-email') {
          setRequestError('Email is invalid');
        }
        else {
          setRequestError('Error on register, try again');
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <>
      <Head>
        <title>Luv&amp;Kitchen - Register</title>
        <meta name="description" content="Register section" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexRowContent>
        <LeftContentDiv>
          <MarginDiv mt={'20px'} ml={'30px'}>
            <Logo />
          </MarginDiv>
        </LeftContentDiv>

        <FormContainer>
            <RegisterForm onSubmit={handleSubmit(handleRegister)} method='post'>
                <ShowOnlyMobileDiv mb={'20px'}>
                  <Logo />
                </ShowOnlyMobileDiv>

                <H1>
                  Register
                </H1>

                <FullWidthDiv>
                  <InputContainer
                    label={'Name'}
                  >
                    <Input 
                      type="text"
                      placeholder="Gabriel Souza"
                      register={register}
                      name="name"
                      validationSchema={{ required: true }}
                    />
                    <AlertText>
                      {errors?.email && errors.email.message}
                    </AlertText>
                  </InputContainer>

                  <InputContainer
                    label={"Gender"}
                  >
                    <FlexRowDiv columnGap='10px'>
                      <Controller
                        control={control}
                        name="gender"
                        render={() => 
                            <SecondaryToggleButton 
                              type="button"
                              onClick={() => setValue('gender', 'masculine')}
                              toggled={watch().gender === 'masculine'}
                              text={'M'}
                            />
                        }
                      />

                      <Controller
                        control={control}
                        name="gender"
                        render={() => 
                            <PrimaryToggleButton 
                              type="button"
                              onClick={() => setValue('gender', 'feminine')}
                              toggled={watch().gender === 'feminine'}
                              text={'F'} 
                            />
                          }
                      />
                    </FlexRowDiv>
                  </InputContainer>

                  <InputContainer
                    label={'Email'}
                  >
                    <Input 
                      type="text"
                      placeholder="CordonBleuChef@chef.com"
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
                        <RiErrorWarningLine style={{ marginRight: '5px' }} />
                        {requestError}
                      </FlexRowDiv>
                    </AlertText>
                  }

                  <Caption>
                    Your password must contain at least 6 characters
                  </Caption>
                </FullWidthDiv>

                <AlignCenterDiv>
                  <Button type="submit">
                    {isLoading ? 
                      <FlexRowDiv style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <span className='loader' style={{ marginRight: '8px' }}></span> 
                        <span>
                          Registering.. 
                        </span>
                      </FlexRowDiv>
                      : 
                      'Register'
                    }
                  </Button>

                  
                  <MarginDiv mt={'25px'}>
                    <MarginDiv mb={'2px'}>
                      <P>
                        Looking for the
                        <Link href="/login">
                          <AlertText style={{ display: 'inline', marginLeft: '4px' }} semibold>
                              Login Page?
                          </AlertText>
                        </Link>
                      </P>
                    </MarginDiv>
                  </MarginDiv>
                </AlignCenterDiv>


            </RegisterForm>
        </FormContainer>
      </FlexRowContent>
        
    </>
  )
}

const LeftContentDiv = styled.div`
  background-image: url(${RegisterBgImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #191919;
  background-position-y: 40%;
  height: 100%;
  max-width: 55%;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`


const FlexRowContent = styled(FlexRowDiv)`
  height: 100vh;
  background-color: ${p => p.theme.colors.light};
  overflow-y: auto;
`

const FormContainer = styled.div`
  padding: 0 6px;
  margin: 0 auto;
  width: 30%;
  @media screen and (max-width: 1400px) {
    width: 50%;
    padding: 0 60px;
  }
  @media screen and (max-width: 968px) {
    padding: 0 4px;
    width: 90%;
  }
`

const RegisterForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  @media screen and (max-width: 1400px) {
    row-gap: 4px; 
  }
`

export default Register