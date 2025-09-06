import styled, { keyframes } from 'styled-components';


const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.medium};
  height: 100%;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

export const Image = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.md};
`;

export const Title = styled.div`
  height: 1rem;
  background-color: ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.sm};
  width: 80%;
`;

export const Price = styled.div`
  height: 1rem;
  background-color: ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.sm};
  width: 40%;
`;

export const Button = styled.div`
  height: 2.5rem;
  width: 100%;
  background-color: ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.md};
`;