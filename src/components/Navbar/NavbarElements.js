import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiBoxingGlove } from 'react-icons/gi';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    `
;

export const NavLink = styled(Link)`
    color: red;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
    color: white;


    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(GiBoxingGlove)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
  
`
