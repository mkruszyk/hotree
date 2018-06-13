import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background-color: #f6f6f6;
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-family: 'Lato', sans-serif;
  }

  input, select, textarea {
    box-sizing: border-box;
    font-weight: 300;
    outline-width: thin;
    padding: 10px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid #a3a3a3;
    color: #2D2D2D,
    &::placeholder {
      color: #a3a3a3;
    }
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
`;

