import React from 'react';

import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import banner from '~/assets/banner.png';

import { Container, Meetup } from './styles';

export default function Details() {
  return (
    <Container>
      <nav>
        <h1>Meetup de React Native</h1>
        <aside>
          <button type="button" className="blue">
            <MdEdit size={20} color="#fff" />
            <span>Editar</span>
          </button>
          <button type="button">
            <MdDeleteForever size={20} color="#fff" />
            <span>Cancelar</span>
          </button>
        </aside>
      </nav>
      <Meetup>
        <img src={banner} alt="Meetup de React Native" />
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
        <div>
          <span>
            <MdEvent size={20} color="rgba(255,255,255,0.6)" />
            <time>24 de Junho, às 20h</time>
          </span>
          <span>
            <MdPlace size={20} color="rgba(255,255,255,0.6)" />
            <address>Rua Tenente Vitorino, 243</address>
          </span>
        </div>
      </Meetup>
    </Container>
  );
}
