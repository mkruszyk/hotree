import styled from 'styled-components';

export const Container = styled.div`
  max-width: 730px;
  width: 100%;
  margin: 2rem auto;
  box-shadow: 0 0 7px #ddd;
`;

export const MessageWrapper = styled.div`
  background-color: ${props => props.theme.greenSuccessInfo};
  text-align: left;
  padding: 2em 3em;
`;

export const Info = styled.h2`
  font-weight: 300;
`;

export const Title = styled.h1`
  font-weight: 300;
  color: ${props => props.theme.greenText};
`;
