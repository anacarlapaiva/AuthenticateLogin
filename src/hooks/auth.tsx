/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../services/api'

interface IDataUser {
    name: string,
}

export interface IUserAuthenticate {
    email: string,
    password: string
}

// % nº 1
interface IAuthContext {
    signIn: (dataLogin: IUserAuthenticate) => void;
    dataUser: IDataUser | null,
    signOut: () => void;
}

// Criamos um contexto para ser utilizado na aplicação e informamos uma tipagem % nº1
const AuthContext = createContext<IAuthContext>(
    {} as IAuthContext,
);

// Criando um componente pai para poder utilizar as informações do contexto
const AuthProvider: React.FC = ({ children }) => {
    const navigate = useNavigate()
    const [dataUser, setDataUser] = useState<IDataUser | null>(null)

    //utilização do useEffect para setar no localStorage o usuário
    useEffect(() => {
        const existUser = localStorage.getItem('DATA_USER');
        if (existUser) {
            setDataUser(JSON.parse(existUser));
            navigate('/dashboard')
        } else {
            navigate('/')
        }
    }, [])

    // Metodo global para ser acessado nos filhos(children)
    const getAUserFromApi = async (emailUser: string): Promise<any> => {
        const responseGetUser = await fetch(`http://localhost:5000/users/${emailUser}`, {
            method: 'GET',
        })
        const dataGetUser = await responseGetUser.json();
        return dataGetUser
    }
    const signIn = async (dataLogin: IUserAuthenticate): Promise<void> => {

        const response = await createSession(dataLogin)
        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem('DATA_USER', JSON.stringify(loggedUser.data)) //response.data retorna o que foi solicitado na api
        // localStorage.setItem('DATA_USER', 'token', token) //response.data retorna o que foi solicitado na api
        navigate('/dashboard')
    }

    const signOut = (): void => {
        localStorage.removeItem('DATA_USER')
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            dataUser,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// Criando hook para ser utilizado na aplicação  
const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            'useAuthContext must be used within a AuthProvider',
        );
    }
    return context;
}

// exportando provider para a aplicação e o hook para a importação
export { AuthProvider, useAuth };