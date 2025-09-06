import styles from './Navbar.module.css';
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
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <BiSolidPurchaseTag />
                <span className={styles.title}>Mini-Loja</span>
            </div>

            <div className={styles.actions}>
                <button
                    className={`${styles.themeToggle} ${dark ? styles.themeToggleDark : styles.themeToggleLight}`}
                    onClick={toggleTheme}
                    aria-label="Alternar tema"
                >
                    {dark ? <FaSun /> : <FaMoon />}
                </button>

                <div className={styles.cart} aria-label="Carrinho">
                    <MdShoppingCart />
                    {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
                </div>
            </div>
        </header>
    );
};
