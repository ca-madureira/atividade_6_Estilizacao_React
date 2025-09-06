import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  body.theme-light {
    background-color: #f9f9f9;
    color: #222;
  }

  body.theme-dark {
    background-color: #1a1a1a;
    color: #eee;
  }

  body.theme-dark header {
    background-color: #2a2a2a;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
  }
`;

export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: blueviolet;
  font-size: 1.2rem;
`;

export const Title = styled.span`
  color: rgb(80, 82, 79);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeToggle = styled.button`
  color: rgb(63, 35, 61);
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(166, 121, 207);
  }
`;

export const Cart = styled.div`
  position: relative;
  font-size: 1.5rem;
  color: rgb(226, 80, 43);
  cursor: pointer;

  &:hover {
    background-color: rgb(218, 166, 166);
    border-radius: 0.3rem;
    padding: 0.2rem;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: crimson;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 999px;
`;
