import styled from "styled-components";

import { media } from "../../../utils/constants/mediaQueries";

export const Form = styled.div`
  background-color: ${props => props.theme.formBackground};
  border: none;
  box-shadow: 0 0 7px #ddd;
  border-radius: 5px;
  max-width: 730px;
  margin: 20px 20px;
  padding: 16px 40px;
  width: 88%;
  @media (${media.mobile}) {
    width: 75%;
  }
  @media (${media.smallMobile}) {
    margin: 20px 5px;
  }
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
  margin: 10px auto;
  display: grid;
`;
