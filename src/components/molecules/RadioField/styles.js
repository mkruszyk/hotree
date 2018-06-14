import styled from "styled-components";

export const Field = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  margin-left: ${props => props.withLeftMargin ? '14px' : '0'}
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const RadioDescription = styled.span`
  margin-right: 15px;
`;
