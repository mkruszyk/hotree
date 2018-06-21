import React from 'react';
import { ThemeProvider } from 'styled-components';

import { colors } from './utils/styles/constants';
import Navbar from './components/page/Navbar';
import EventForm from './components/page/EventForm';

const App = () => (
  <ThemeProvider theme={colors}>
    <div>
      <Navbar />
      <EventForm />
    </div>
  </ThemeProvider>
);

export default App;
