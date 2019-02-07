import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
`;
export const Content = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: ${colors.lighten};
    margin: 2rem auto;
  }
`;
