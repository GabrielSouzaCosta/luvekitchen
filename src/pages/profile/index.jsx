import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { IoBookOutline } from 'react-icons/io5'
import styled from 'styled-components'
import RecipeItem from '../../components/RecipeItem'
import { useStateContext } from '../../context/ContextProvider'
import Layout from '../../layout/Layout'
import { Container, FlexColumnCenteredDiv, FlexRowDiv, MarginDiv } from '../../styles/layout'
import { AlertText, H1, H2 } from '../../styles/texts'
import { Grid } from '../../styles/recipes'

const Profile = () => {
  const router = useRouter();
  const ctx = useStateContext();

  useEffect(() => {
    if (!ctx?.userData?.accessToken) {
      router.push('login');
    }
  }, [])


  return (
    <>
      <Head>
        <title>Luv&amp;Kitchen - Profile</title>
        <meta name="description" content="User Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProfileContainer>
          <FlexColumnCenteredDiv>
            <Image
              src={ctx?.userData?.avatar_img ? require('../../../public/avatars/'+ctx?.userData?.avatar_img) : ''}
              alt=""
              width={200}
              height={200}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <H1 style={{ marginBottom: '50px', marginTop: '25px' }}>
              { ctx?.userData?.name }
            </H1>
            <H2 marginSize='none'>
              <FlexRowDiv>
                <IoBookOutline style={{ marginRight: '8px' }} />
                My Book of Recipes
              </FlexRowDiv>
            </H2>
          
            {ctx?.userData?.favorites && ctx?.userData?.favorites.length > 0 ?
              <MarginDiv fullWidth my={'2rem'}>
                <Grid>
                  {
                    ctx.userData.favorites
                      .map((item) =>
                        (
                          <RecipeItem
                            recipe_id={item.recipe_id}
                            key={item.name}
                            src={item.image_url}
                            href={`/recipe/${item.recipe_id}`}
                            name={item.name}
                          />
                        )
                      )
                  }
                </Grid>
              </MarginDiv>
            :
              <AlertText semibold style={{ textAlign: 'center', marginTop: '30px' }}>
                You have no recipes in your Book
              </AlertText>
            }
          
          </FlexColumnCenteredDiv>
        </ProfileContainer>
      </Layout>
    </>
  )
}

const ProfileContainer = styled(Container)`
  width: 100%
`

export default Profile