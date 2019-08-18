import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;

  header {
    height: 92px;
    max-width: 940px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
      display: flex;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        margin-right: 30px;

        strong {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
        }

        a {
          color: #999;
          font-size: 14px;
        }
      }

      button {
        background: #d44059;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 12px 20px;
      }
    }
  }
`;
