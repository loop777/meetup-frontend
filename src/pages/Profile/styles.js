import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
      padding: 20px 15px;
      color: rgba(255, 255, 255, 0.5);
      background: rgba(0, 0, 0, 0.2);
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0 20px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        background: #f94d6a;
        border-radius: 4px;
        border: 0;
        color: #fff;
        font-weight: bold;
        margin-top: 5px;
        font-size: 16px;
        padding: 12px 20px;

        svg {
          margin-right: 15px;
        }
      }
    }
  }
`;
