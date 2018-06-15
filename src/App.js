import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { colors } from './utils/styles/colors';
import Navbar from './components/page/Navbar';
import EventForm from './components/page/EventForm';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <div>
          <Navbar />
          <EventForm />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
