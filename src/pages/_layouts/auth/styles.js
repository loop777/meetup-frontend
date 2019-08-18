import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(#22202c, #402845);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      height: 50px;
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
      padding: 0 15px;
      color: rgba(255, 255, 255, 0.5);
      background: rgba(0, 0, 0, 0.2);
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    button {
      background: #f94d6a;
      height: 50px;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;
      margin-top: 5px;
      font-size: 18px;
    }

    a {
      margin-top: 20px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
