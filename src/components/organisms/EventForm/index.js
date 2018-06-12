import React from 'react'

import About from '../../molecules/About/index';
import Coordinator from '../../molecules/Coordinator/index';
import When from '../../molecules/When/index';
import { Container } from './styles';

const EventForm = () => (
  <Container>
    <About />
    <Coordinator />
    <When />
  </Container>
);

export default EventForm;