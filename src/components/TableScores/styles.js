import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const Scores = styled.table`
  margin: 1rem auto;
  width: 100%;
  max-width: 50rem;
  text-align: center;
  border: 1px solid ${colors.success};
  border-collapse: collapse;
  th:not(:nth-child(2)),
  td:not(:nth-child(2)) {
    min-width: 1rem;
    max-width: 4rem;
  }
  tr {
    padding: 0 1rem;
    transition: background 0.3s ease, color 0.5s ease;
    th {
      color: ${colors.regular};
    }
    th:nth-child(3),
    td:nth-child(3) {
      background: ${colors.whiteTransparent};
    }
  }
  tbody > tr {
    &:hover {
      background: ${colors.success} !important;
      color: ${colors.black};
    }
    &:nth-child(odd) {
      background: ${colors.whiteTransparent};
    }
  }
`;
