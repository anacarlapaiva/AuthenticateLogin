import React from 'react'
import { ButtonElement, Container } from './styles'

interface IButtonProps {
    border: string;
    color: string;
    height: string;
    radius: string
    width: string;
    type?: "button" | "submit" | "reset" | undefined
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({  
    border,
    color,
    height,
    radius,
    width, 
    type, 
    children, 
    onClick }) => {
    return (
        <Container>
            <ButtonElement
                type={type}
                onClick={onClick}
                style={{
                   backgroundColor: color,
                   border,
                   borderRadius: radius,
                   height,
                   width
                }}
            >
                {children}
            </ButtonElement>
        </Container>
    )
}

export default Button