import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const InputDiv = styled.div`
    position: relative;
    display: flex;
`

const StyledInput = styled.input`
    flex: 1;
    font-size: 18px;
    border: none;
    border-radius: 100px;
    background: #FDFDFD;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    padding: 12px 0 12px 0;
    padding-left: ${(p) => p.hasIconLeft ? '42px' : '10px'};
    padding-right: ${(p) => p.hasIconRight ? '36px' : '10px'};
    @media screen and (max-width: 1400px) {
        padding: 10px 36px 10px ${(p) => p.hasIconLeft ? '45px' : '18px'};
        padding-left: ${(p) => p.hasIconLeft ? '42px' : '10px'};
        padding-right: ${(p) => p.hasIconRight ? '36px' : '10px'};
        font-size: 14px;
    }
`

const IconRight = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    vertical-align: middle;
    display: flex;
    align-items: center;
    padding-right: 6px;
`

export const Input = ({
    iconLeft,
    iconRight,
    register,
    name,
    validationSchema,
    ...props
}) => {

    return (
        <InputDiv>
            <span className="inner-icon">
                {iconLeft}
            </span>
            {register && name ? 
                <StyledInput {...props} hasIconLeft={!!iconLeft} hasIconRight={!!iconRight} {...register(name, validationSchema)} />
                    :
                <StyledInput {...props} hasIconLeft={!!iconLeft} hasIconRight={!!iconRight} />
            }
            <IconRight>
                {iconRight}
            </IconRight>
        </InputDiv>
    )
}

export const PasswordInput = ({
    register,
    name,
    validationSchema,
    ...props
}) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    function toggleVisibility() {
        setPasswordIsVisible(!passwordIsVisible);
    }

    return (
        <div style={{ position: 'relative', display: 'flex' }}>
            {register && name ? 
                <StyledInput {...props} type={passwordIsVisible ? 'text' : 'password'}   {...register(name, validationSchema)} />
                    :
                <StyledInput {...props} type={passwordIsVisible ? 'text' : 'password'} />
            }
            <span className="inner-icon right">
                {passwordIsVisible ?
                    <FaRegEyeSlash className="pointer-opacity" onClick={toggleVisibility} />
                :
                    <FaRegEye className="pointer-opacity" onClick={toggleVisibility} />
                }
            </span>
        </div>
    )
}
