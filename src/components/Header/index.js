import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <Link to="/dashboard">
          <img src={logo} alt="MeetApp" />
        </Link>
        <aside>
          <div>
            <strong>Ricardo Alcântara</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="button">Sair</button>
        </aside>
      </header>
    </Container>
  );
}
