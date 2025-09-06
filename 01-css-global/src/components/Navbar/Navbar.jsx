import './Navbar.css';
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
        <header className="navbar">
            <div className="navbar__logo">
                <BiSolidPurchaseTag />
                <span className="navbar__title">Mini-Loja</span>
            </div>

            <div className="navbar__actions">
                <button
                    className={`navbar__theme-toggle ${dark ? "navbar__theme-toggle--dark" : "navbar__theme-toggle--light"}`}
                    onClick={toggleTheme}
                    aria-label="Alternar tema"
                >
                    {dark ? <FaSun /> : <FaMoon />}
                </button>

                <div className="navbar__cart" aria-label="Carrinho">
                    <MdShoppingCart />
                    {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
                </div>
            </div>
        </header>
    );
};
