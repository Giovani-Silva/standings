import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/colors';
import SoccerBall from '../../assets/soccer-ball.svg';

const animateLoading = keyframes`
    0% , 100% {
      transform: translateY(0px) rotate(-25deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translateY(-45px) rotate(25deg);
      animation-timing-function: ease-in ;
    }
`;

export const Loading = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Ball = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  background-color: ${colors.light};
  background-image: url(${SoccerBall});
  background-size: cover;
  border-radius: 50%;
  box-shadow: inset 6px -10px 50px -20px ${colors.black};
  animation: ${animateLoading} 1s infinite;
`;
