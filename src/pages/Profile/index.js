import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword ? field.min(6).required() : field
  ),
  repeatPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile} schema={schema}>
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
          name="repeatPassword"
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
