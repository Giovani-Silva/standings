import styled from 'styled-components';
import { colors } from '../../styles/colors';
import Field from '../../assets/field2.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  background-color: ${colors.black};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Field});
  background-size: cover;
  opacity: 0.3;
  mix-blend-mode: screen;
`;
