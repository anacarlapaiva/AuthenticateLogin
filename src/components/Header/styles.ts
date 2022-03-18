import styled from "styled-components";


export const Container = styled.div`
  background: #101522;
  height:80px;
  font-size: 1.2rem;
  top: 0;
  z-index:999;
`;

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
width: 1300px;
`;

export const NavMenuUl = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 70%;
    justify-content: space-between;
`;

export const NavItem = styled.li`
    height: 80px;
    color: #fff;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
        &:hover{
        border-bottom: 2px solid #4b59f7;
        }
`;