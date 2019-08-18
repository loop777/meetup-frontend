import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      display: flex;
      align-items: center;

      span {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin-left: 15px;
      }
    }
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  padding: 20px 30px;

  & + li {
    margin-top: 10px;
  }

  strong {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;

    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      margin-right: 30px;
    }
  }
`;
