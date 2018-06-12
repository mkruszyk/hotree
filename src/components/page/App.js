import React, { Component } from 'react';

import Navbar from '../organisms/Navbar/index';
import EventForm from '../organisms/EventForm/index';
// import 'normalize.css/normalize.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <EventForm />
      </div>
    );
  }
}

export default App;
