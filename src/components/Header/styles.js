import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  padding: 4rem;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-left: 3rem;

  img {
    height: 6rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -25%);
    opacity: 0.6;
    filter: contrast(0);
    mix-blend-mode: luminosity;
  }
`;

export const Title = styled.h1`
  margin-left: 3rem;
  color: ${colors.lighten};
  opacity: 0.5;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
