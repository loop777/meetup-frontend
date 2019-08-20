import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import DatePicker from '~/components/DatePicker';
import BannerInput from './BannerInput';
import { Container } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number(),
  title: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  date: Yup.date().required('Data é obrigatória'),
  location: Yup.string().required('Localização é obrigatória'),
});

export default function Meetup({ match }) {
  const meetupId = match.params.id;
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMeetup() {
      setLoading(true);
      const response = await api.get('organizing');

      const meetupDetail = response.data.find(m => {
        if (m.id === Number(meetupId)) {
          return true;
        }
        return false;
      });

      setMeetup({
        ...meetupDetail,
        date: parseISO(meetupDetail.date),
      });
      setLoading(false);
    }
    if (meetupId) {
      loadMeetup();
    }
  }, [meetupId]);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      if (meetupId) {
        await api.put(`/meetup/${meetupId}`, data);
      } else {
        await api.post(`/meetup`, data);
      }
      history.push(`/details/${meetupId}`);
    } catch (err) {
      toast.error('Erro ao salvar meetup! Confira seus dados.');
    }
  }

  return loading ? (
    <Container>
      <h1>Carregando...</h1>
    </Container>
  ) : (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker
          name="date"
          placeholderText="Data do meetup"
          showTimeSelect
          dateFormat="d 'de' MMMM', às' HH:mm'h'"
          timeCaption="Horário"
        />
        <Input name="location" placeholder="Localização" />
        <div id="btn">
          <button type="submit">
            <MdAddCircleOutline />
            Salvar meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
