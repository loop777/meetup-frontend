import React from 'react';

import { MdCameraAlt } from 'react-icons/md';

import { Container } from './styles';

export default function BannerInput() {
  return (
    <Container>
      <label htmlFor="banner">
        <span>
          <MdCameraAlt size={54} color="rgba(255,255,255,0.3)" />
          Selecionar imagem
        </span>
        <input type="file" id="banner" accept="image/*" />
      </label>
    </Container>
  );
}
