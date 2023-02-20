import React from 'react'
import styled from 'styled-components'
import { Input } from '../styles/inputs'
import { colors } from '../styles/theme'

type Props = {
    children: React.ReactNode|React.ReactNode[],
    label: string,
}

const InputContainer = ({
    children,
    label
} : Props) => {
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
    color: ${colors.dark};
    display: block;
    font-size: 18px;
    margin-bottom: 6px;
    margin-left: 6px;
`

export default InputContainer