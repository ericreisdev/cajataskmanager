import styled from 'styled-components';

export const BarraLateralWrapper = styled.div`
  width: 240px;
  background-color: #f5f6f8;
  padding: 16px;
`;

export const BarraLateralLista = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const BarraLateralItem = styled.li`
  margin-bottom: 8px;

  a {
    display: block;
    padding: 8px;
    color: #333;
    text-decoration: none;
  }

  a:hover {
    background-color: #ddd;
  }

  ${({ active }) =>
    active &&
    `
    a {
      font-weight: bold;
    }

    a, a:hover {
      background-color: #ddd;
    }
  `}
`;
