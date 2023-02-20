import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

type InputProps = {
    iconLeft? : React.ReactNode,
    iconRight? : React.ReactNode,
    register?: UseFormRegister<FieldValues>,
    name?: string,
    validationSchema?: any
}

type StyledInputProps = {
    hasIconLeft? : boolean,
    hasIconRight? : boolean,
}

const StyledInput = styled.input`
    flex: 1;
    font-size: 18px;
    border: none;
    border-radius: 100px;
    background: #FDFDFD;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    padding: 12px 4px 12px ${(p : StyledInputProps) => p.hasIconLeft ? '45px' : '18px'};
`

export const Input = ({
    iconLeft,
    iconRight,
    register,
    name,
    validationSchema,
    ...props
} : InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {

    return (
        <div style={{ position: 'relative', display: 'flex' }}>
            <span className="inner-icon">
                {iconLeft}
            </span>
            {register && name ? 
                <StyledInput {...props} hasIconLeft={!!iconLeft} {...register(name, validationSchema)} />
                    :
                <StyledInput {...props} hasIconLeft={!!iconLeft} />
            }
            <span className="inner-icon">
                {iconRight}
            </span>
        </div>
    )
}

export const PasswordInput = ({
    register,
    name,
    validationSchema,
    ...props
} : InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);

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
