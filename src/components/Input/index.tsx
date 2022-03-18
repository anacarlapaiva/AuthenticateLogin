import React from 'react'
import { Container, InputComponent } from './styles';

interface IInputProps{
    name: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    error?: boolean;
}

const Input: React.FC<IInputProps> = ({
    name, 
    type, 
    value, 
    onChange,
    error
}) => {
    return (
        <Container>
        <InputComponent
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            error={error}
        />
    </Container>
    )
}

export default Input;