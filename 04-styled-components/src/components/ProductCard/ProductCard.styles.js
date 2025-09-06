import styled, { css } from 'styled-components';

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Media = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background-color: #f4f4f4;
  display: block;
`;

export const Badge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 999px;
  color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  ${({ type }) =>
        type === 'novo' &&
        css`
      background-color: #10b981;
    `}

  ${({ type }) =>
        type === 'promo' &&
        css`
      background-color: #ef4444;
    `}
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #111;
`;

export const Rating = styled.span`
  font-size: 0.9rem;
  color: #f59e0b;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  ${({ variant }) =>
        variant === 'solid' &&
        css`
      background-color: #000;
      color: #fff;

      &:hover {
        background-color: #333;
      }
    `}

  ${({ variant }) =>
        variant === 'outline' &&
        css`
      background-color: transparent;
      color: #000;
      border-color: #000;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    `}

  ${({ variant }) =>
        variant === 'ghost' &&
        css`
      background-color: transparent;
      color: #000;

      &:hover {
        background-color: #f0f0f0;
      }
    `}

  &:focus {
    outline: 2px solid #5c3d99;
    outline-offset: 2px;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ loading }) =>
        loading &&
        css`
      position: relative;
      pointer-events: none;
      opacity: 0.7;
    `}
`;
