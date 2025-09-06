import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  margin-top: 80px;

  @media screen and (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;