import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Details({ match }) {
  const meetupId = Number(match.params.id);
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('organizing');

      const meetupDetail = response.data.find(m => {
        if (m.id === meetupId) {
          return true;
        }
        return false;
      });

      setMeetup({
        ...meetupDetail,
        formatedDate: format(
          parseISO(meetupDetail.date),
          "d 'de' MMMM', às 'HH:mm'h'",
          {
            locale: pt,
          }
        ),
      });
      setLoading(false);
    }
    loadMeetup();
  }, [meetupId]);

  function handleEdit() {
    history.push(`/meetup/${meetup.id}`);
  }

  async function handleCancel() {
    try {
      await api.delete(`/meetup/${meetup.id}`);
      history.push(`/dashboard`);
    } catch (err) {
      toast.error('Falha ao deletar Meetup!');
    }
  }

  return loading ? (
    <Container>
      <h1>Carregando...</h1>
    </Container>
  ) : (
    <Container>
      <nav>
        <h1>{meetup.title}</h1>
        <aside>
          <button type="button" className="blue" onClick={handleEdit}>
            <MdEdit size={20} color="#fff" />
            <span>Editar</span>
          </button>
          <button type="button" onClick={handleCancel}>
            <MdDeleteForever size={20} color="#fff" />
            <span>Cancelar</span>
          </button>
        </aside>
      </nav>
      <Meetup>
        <img src={meetup.banner.url} alt="Meetup de React Native" />
        <p>{meetup.description}</p>
        <div>
          <span>
            <MdEvent size={20} color="rgba(255,255,255,0.6)" />
            <time>{meetup.formatedDate}</time>
          </span>
          <span>
            <MdPlace size={20} color="rgba(255,255,255,0.6)" />
            <address>{meetup.location}</address>
          </span>
        </div>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
