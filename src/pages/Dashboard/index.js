import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      const data = response.data.map(meetup => ({
        ...meetup,
        formatedDate: format(
          parseISO(meetup.date),
          "d 'de' MMMM', às 'HH:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <nav>
        <h1>Meus meetups</h1>
        <button type="button" onClick={() => history.push('/meetup')}>
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Novo meetup</span>
        </button>
      </nav>

      <ul>
        {meetups.map(meetup => (
          <Link to={`/details/${meetup.id}`} key={meetup.id}>
            <Meetup>
              <strong>{meetup.title}</strong>
              <aside>
                <span>{meetup.formatedDate}</span>
                <MdChevronRight size={24} color="#fff" />
              </aside>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
