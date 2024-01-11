import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &.good {
    background-color: #4caf50;
    color: #fff;
  }

  &.neutral {
    background-color: #ffeb3b;
    color: #fff; // Жовтий текст на чорному фоні
  }

  &.bad {
    background-color: #f44336;
    color: #fff;
  }


  &:hover,
  &:focus {
    background-color: ${props => (props.className ? 'inherit' : '#fff')};
    color: ${props => (props.className ? 'inherit' : '#2196f3')};
  }

  &:active {
    scale: 0.95;
  }
`;