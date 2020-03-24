import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.75em 2em;
  text-decoration: none;
  border-radius: 7px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background-color: rgb(112, 107, 197);
  color: rgb(252, 252, 252);

  &:active {
    background: rgb(81, 61, 180);
    color: #fff;
  }
`;

export default buttonStyles;
