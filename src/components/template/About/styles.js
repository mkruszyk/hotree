import styled from "styled-components";

export const Form = styled.div`
  background-color: ${props => props.theme.formBackground};
  border: none;
  box-shadow: 0 0 7px #ddd;
  border-radius: 5px;
  max-width: 730px;
  margin: 20px auto;
  padding: 16px 40px;
`;

export const Header = styled.div`
  font-size: 20px;
  color: ${props => props.theme.blue};
  width: 100%;
  border-bottom: 1px solid grey;
  
  > h4 {
    margin: 10px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  width: 100%;
`;
