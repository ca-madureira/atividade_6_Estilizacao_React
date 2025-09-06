import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

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
