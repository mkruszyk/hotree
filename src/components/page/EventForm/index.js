import React, { Component } from 'react'
import { connect } from 'react-redux';

import About from '../../template/About';
import Coordinator from '../../template/Coordinator';
import When from '../../template/When';
import { Container } from './styles';
import { setData } from '../../../actions/formActions';


class EventForm extends Component {
  publishEvent = () => {
  }
  render() {
    return (
      <Container>
        <About 
          onChange={this.props.setData}
          data={this.props.state}
        />
        <Coordinator 
          onChange={this.props.setData}
          data={this.props.state}
        />
        <When 
          onChange={this.props.setData}
          data={this.props.state}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    state: state.form
});

const mapDispatchToProps = {
  setData
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);