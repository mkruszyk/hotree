import { injectGlobal, ThemeProvider } from 'styled-components';


injectGlobal`
  body {
    background-color: #f6f6f6;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-family: 'Lato', sans-serif;
  }

  input, select, textarea {
    font-weight: 300;
    outline-width: thin;
    padding: 8px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid #a3a3a3;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
`;

export const theme = {
  darkBlue: '#1B376C',
  blue: '#305595',
  lightBlue: '#8AA0BF',
  orange: '#FD8C25',
  formBg: '#FFF',
  greenText: '#70BE75',
  greenSuccessInfo: '#EFFBF2',
  greyText: '#F7F7F7'
};

