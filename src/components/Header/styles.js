import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.header`
  background: ${colors.success};
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  overflow: hidden;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    height: 9rem;
    position: absolute;
    top: -109%;
    opacity: 0.6;
    transform: translateX(-50%) rotate(-29deg);
    filter: contrast(0);
    mix-blend-mode: luminosity;
  }
`;

export const Title = styled.h1`
  margin-left: 8.5rem;
  color: ${colors.black};
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
