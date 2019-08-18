import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu endereço de email" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <MdAddCircleOutline /> Salvar perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
