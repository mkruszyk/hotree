import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from '../../theme/globalStyle';
import Navbar from "../organisms/Navbar/index";
import EventForm from "../organisms/EventForm/index";
import "normalize.css/normalize.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Navbar />
          <EventForm />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
