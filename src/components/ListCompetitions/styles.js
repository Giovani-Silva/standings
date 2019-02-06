import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const List = styled.ul`
  li {
    color: ${colors.success};
    margin: 1rem auto;
    width: 100%;
    max-width: 25rem;
    height: 5rem;
    letter-spacing: 1.11px;
  }
`;

export const Link = styled(RouterLink)`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  color: ${colors.success};
  text-decoration: none;
  font-weight: 700;
  background: ${colors.greenTransparent};
  box-shadow: 0px 11px 10px -10px ${colors.success};
  border: 1px solid;
  transition: all .2s ease;

  &:hover {
    background: ${colors.blackTransparent};
    border: 2px solid;
}
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  font-size: 0.7em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${colors.success};
  opacity: 0.7;
`;

export const Name = styled.div`
  font-weight: 700;
`;
