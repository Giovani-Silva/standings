import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Ring } from '../Spinner/styles';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 2rem;

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
  }

  button {
    border: 0;
    background: ${colors.greenTransparent};
    color: ${colors.success};
    border: 1px solid ${colors.success};
    width: 6rem;
    margin-left: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s ease-in;

    &:hover {
      background: ${colors.success};
      color: ${colors.black};
      ${Ring} {
        div {
          border-color: ${colors.black} transparent transparent transparent;
        }
      }
    }

    ${Ring} {
      width: 1rem;
      height: 1rem;
      div {
        transition: border-color 0.3s ease-in;
        border-color: ${colors.success} transparent transparent transparent;
        width: 1rem;
        height: 1rem;
        margin: 0.2rem;
      }
    }
  }
`;
