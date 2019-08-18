import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.3);
    }

    input {
      display: none;
    }
  }
`;
