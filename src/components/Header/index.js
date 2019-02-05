import React from 'react';

import FootballLogo from '../../assets/football-club.svg';
import { Container, Logo, Title } from './styles';

const Header = () => (
  <Container>
    <Logo>
      <img src={FootballLogo} alt="Logo Football" />
      <Title>Football</Title>
    </Logo>
  </Container>
);

export default Header;
