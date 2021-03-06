import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.5);
      padding: 0 20px;
      margin-bottom: 10px;

      &::placeholder {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      max-width: 100%;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.5);
      padding: 20px;
      margin-bottom: 10px;
      font-family: 'Helvetica', sans-serif;

      &::placeholder {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #fff;
      font-weight: bold;
      margin-bottom: 10px;
    }

    div#btn {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      button {
        display: flex;
        align-items: center;
        padding: 12px 20px;
        color: #fff;
        background: #f94d6a;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;

        svg {
          margin-right: 15px;
        }
      }
    }
  }
`;
