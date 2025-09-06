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

    const toggleTheme = () => setDark(prev => !prev);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 shadow-md transition-colors duration-300 ${dark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
            <div className="flex items-center gap-2 font-semibold text-violet-600 text-lg">
                <BiSolidPurchaseTag />
                <span className="text-gray-700 dark:text-gray-300">Mini-Loja</span>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    aria-label="Alternar tema"
                    className="p-2 rounded-md text-purple-800 hover:bg-purple-300 transition-colors"
                >
                    {dark ? <FaSun /> : <FaMoon />}
                </button>

                <div className="relative text-orange-600 text-xl cursor-pointer hover:bg-red-200 rounded-md p-1 transition-colors" aria-label="Carrinho">
                    <MdShoppingCart />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
};
