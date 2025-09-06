import { NavbarWrapper, Logo, Title, Actions, ThemeToggle, Cart, CartBadge } from './Navbar.styles'
import { MdShoppingCart } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = ({ cartCount = 0, theme, toggleTheme }) => {
    return (
        <NavbarWrapper>
            <Logo>
                <BiSolidPurchaseTag />
                <Title>Mini-Loja</Title>
            </Logo>

            <Actions>
                <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </ThemeToggle>

                <Cart aria-label="Carrinho">
                    <MdShoppingCart />
                    {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
                </Cart>
            </Actions>
        </NavbarWrapper>
    );
};