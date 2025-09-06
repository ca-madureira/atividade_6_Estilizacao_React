import {
    GlobalStyle,
    NavbarWrapper,
    Logo,
    Title,
    Actions,
    ThemeToggle,
    Cart,
    CartBadge
} from './Navbar.styles';

import { useState, useEffect } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = ({ cartCount = 0 }) => {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.className = dark ? 'theme-dark' : 'theme-light';
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    const toggleTheme = () => {
        setDark(prev => !prev);
    };

    return (
        <>
            <GlobalStyle />
            <NavbarWrapper>
                <Logo>
                    <BiSolidPurchaseTag />
                    <Title>Mini-Loja</Title>
                </Logo>

                <Actions>
                    <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
                        {dark ? <FaSun /> : <FaMoon />}
                    </ThemeToggle>

                    <Cart aria-label="Carrinho">
                        <MdShoppingCart />
                        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
                    </Cart>
                </Actions>
            </NavbarWrapper>
        </>
    );
};
