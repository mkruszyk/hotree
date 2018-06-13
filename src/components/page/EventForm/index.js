import React from 'react'

import About from '../../template/About';
import Coordinator from '../../template/Coordinator';
import When from '../../template/When';
import { Container } from './styles';

const EventForm = () => (
  <Container>
    <About />
    <Coordinator />
    <When />
  </Container>
);

export default EventForm;