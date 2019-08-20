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

    aside {
      display: flex;

      button {
        background: #d44059;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        display: flex;
        align-items: center;

        & + button {
          margin-left: 15px;
        }

        &.blue {
          background: #4dbaf9;
        }

        span {
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          margin-left: 15px;
        }
      }
    }
  }
`;

export const Meetup = styled.section`
  img {
    max-height: 300px;
    display: block;
    margin: 0 auto 25px;
  }

  p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);

      & + span {
        margin-left: 60px;
      }

      time,
      address {
        font-style: normal;
        margin-left: 15px;
      }
    }
  }
`;
