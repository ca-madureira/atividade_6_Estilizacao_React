import styled from "styled-components";
export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  transition: all 0.2s ease;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.text};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

export const ThemeToggle = styled.button`
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: 1.2rem;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.colors.border};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Cart = styled.div`
  position: relative;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.radii.md};
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.colors.border};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: ${props => props.theme.colors.danger};
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: ${props => props.theme.radii.full};
  min-width: 18px;
  text-align: center;
`;