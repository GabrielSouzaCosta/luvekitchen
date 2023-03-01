import React from 'react'
import styled from 'styled-components'

const InputContainer = ({
    children,
    label
}) => {
  return (
    <Container>
        <Label>
            { label }
        </Label>
        { children }
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    margin-bottom: 10px;
`

const Label = styled.label`
    color: ${p => p.theme.colors.dark};
    display: block;
    font-size: 18px;
    margin-bottom: 6px;
    margin-left: 6px;
    @media screen and (max-width: 1400px) {
        font-size: 14px;
        margin-bottom: 5px;   
    }
`

export default InputContainer