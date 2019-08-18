import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import BannerInput from './BannerInput';
import { Container } from './styles';

export default function Meetup() {
  return (
    <Container>
      <Form>
        <BannerInput />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <div>
          <button type="submit">
            <MdAddCircleOutline />
            Salvar meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
