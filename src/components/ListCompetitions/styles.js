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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    color: ${colors.success};
    background: ${colors.greenTransparent};
    box-shadow: 0px 11px 10px -10px ${colors.success};
    border: 1px solid;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 25rem;
    height: 4rem;
    letter-spacing: 1.11px;
  }
`;
