import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;

  input[type='text'] {
    font-size: 1em;
    width: 75%;
    max-width: 30rem;
    position: relative;
    z-index: 1;
    height: 3rem;
    margin: 0;
    padding: 0.7rem;
    outline: none;
    border: 0;
    border-bottom: 1px solid ${colors.success};
    background: none;
    box-sizing: border-box;
    border-radius: 3px;
    transition: all 0.1s;
    color: ${colors.success};
    margin: 0 auto;
  }
`;
