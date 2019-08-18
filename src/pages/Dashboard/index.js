import React from 'react';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <nav>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Novo meetup</span>
        </button>
      </nav>

      <ul>
        <Meetup>
          <strong>Meetup do React Native</strong>
          <aside>
            <span>18 de Agosto, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </aside>
        </Meetup>
        <Meetup>
          <strong>Meetup do React Native</strong>
          <aside>
            <span>18 de Agosto, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </aside>
        </Meetup>
        <Meetup>
          <strong>Meetup do React Native</strong>
          <aside>
            <span>18 de Agosto, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </aside>
        </Meetup>
      </ul>
    </Container>
  );
}
