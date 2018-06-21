import React from 'react';
import PropTypes from 'prop-types';

import { Container, MessageWrapper, Title, Info } from './styles';

const Message = props => (
  <Container>
    <MessageWrapper>
      <Title>{props.title}</Title>
      <Info>{props.info}</Info>
    </MessageWrapper>
  </Container>
);

Message.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Message;

