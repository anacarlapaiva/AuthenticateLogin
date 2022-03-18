import React, { useContext } from 'react'
import { useAuth } from '../../hooks/auth'
import Button from '../Button'
import { Container, Nav, NavItem, NavMenuUl } from './styles'

interface INavbarProps {
    showButtonSignUp?: boolean
}


const HeaderNav: React.FC<INavbarProps> = ({ showButtonSignUp }) => {
    const { dataUser, signOut } = useAuth()

    const handleLogout = () => {
        signOut()
    }

    return (
        <Container>
            <Nav>
                <NavMenuUl>
                    
                    <NavItem>
                        {dataUser ? (
                            <p>
                                Logado como {dataUser.name}
                            </p>
                        )
                            : (
                                <div>Falha ao carregar o nome</div>
                            )}
                    </NavItem>
                    <NavItem>
                        <Button
                            type='button'
                            color='#ccc'
                            radius='5px'
                            height='50px'
                            border='none'
                            width='120px'
                            onClick={handleLogout}
                        >
                            Sair
                        </Button>
                    </NavItem>
                </NavMenuUl>
            </Nav>
        </Container>
    )
}

export default HeaderNav