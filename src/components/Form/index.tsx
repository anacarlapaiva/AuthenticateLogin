import React, { useState, useContext } from 'react'
import Button from '../Button';
import Input from '../Input';
import loginImage2 from '../../assets/loginImage2.jpg'
import imageUser from '../../assets/user-interface.svg'
import { useAuth } from '../../hooks/auth'
import { Container, FormContainer, FormContent, PhotoLogin } from './styles';

const Form: React.FC = () => {
    const { signIn } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // if(validateEmail() && validatePassword()){
        //     signIn({
        //         login: email,
        //         password: password
        //     })
        // }
    }

    return (
        <Container>
            <FormContent onSubmit={handleSubmit}>
                <div className="content_top">
                    <img src={imageUser} alt="icone do usuário" />
                    <h1>Logue com sua conta!</h1>
                </div>
                <FormContainer>
                    <label style={{ marginBottom: '6px', fontWeight: '500' }} htmlFor='email'>Email:</label>
                    <Input
                        name='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label style={{ marginBottom: '6px', fontWeight: '500' }} htmlFor='password'>Senha:</label>
                    <Input
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </FormContainer>
                <Button
                    type='submit'
                    color='#6EA9FA'
                    border='1px solid #ccc'
                    width='130px'
                    height='50px'
                    radius='5px'
                >
                    Entrar
                </Button>


            </FormContent>
            <PhotoLogin>
                <img src={loginImage2} alt="Imagem login" />
            </PhotoLogin>
        </Container>
    )
}

export default Form;