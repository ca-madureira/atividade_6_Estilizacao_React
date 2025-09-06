import styled, { css } from "styled-components";

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.md};
  transition: all 0.2s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

export const Media = styled.div`
  position: relative;
  border-radius: ${props => props.theme.radii.md};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background-color: ${props => props.theme.colors.border};
  display: block;
`;

export const Badge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: ${props => props.theme.radii.full};
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  ${({ type }) =>
    type === 'novo' &&
    css`
      background-color: ${props => props.theme.colors.success};
    `}

  ${({ type }) =>
    type === 'promo' &&
    css`
      background-color: ${props => props.theme.colors.danger};
    `}
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

export const Rating = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.warning};
`;

