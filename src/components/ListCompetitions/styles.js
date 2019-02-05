import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const List = styled.ul`
  width: 100%;
  margin: 1rem;
  list-style: none;
  padding: 3rem;

  li {
    color: ${colors.black}
    background: ${colors.light};
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
