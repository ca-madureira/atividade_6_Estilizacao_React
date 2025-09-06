import styled, { css } from 'styled-components';

const variants = {
    solid: css`
    background-color: #1f2937;
    color: #fff;
    border: none;

    &:hover {
      background-color: #374151;
    }
  `,
    outline: css`
    background-color: transparent;
    color: #1f2937;
    border: 2px solid #1f2937;

    &:hover {
      background-color: #1f2937;
      color: #fff;
    }
  `,
    ghost: css`
    background-color: transparent;
    color: #1f2937;
    border: none;

    &:hover {
      background-color: #f3f4f6;
    }
  `,
};

export const StyledButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant }) => variants[variant] || variants.solid}

  &:disabled {
    background-color: #d1d5db;
    color: #6b7280;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
