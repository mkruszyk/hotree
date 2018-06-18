import React, { Component } from "react";

import { validateInputPayload } from '../../../validation/validateInputPayload';
import { formatTime } from '../../../utils/functions/formatTime';
import { RadioField } from "../../molecules/RadioField";

import { Field, Container, RadioContainer, DateTimeInput, Label } from "./styles";

class DateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      time: '',
      min: '',
      am_pm: '',
    }
  };
  componentDidMount() {
    this.getMinimumDate();
  };
  componentDidUpdate(prevProps) {
    const { selectedValue } = this.props.data;
    if (prevProps.data.selectedValue !== selectedValue) {
      const time = this.state.time;
      console.log('DEBUG bedzie: ', 'bedzie');
    }
  }
  getMinimumDate = () => (
    this.setState({ min: new Date().toISOString().slice(0, 10) })
  );
  handleTime = (e) => {
    const payload = { ...this.props.data };
    payload.time.value = e.target.value;
    payload.time.am_pm = payload.selectedValue;
    const formatted = formatTime(payload);
    const validatedPayload = validateInputPayload(payload.type, formatted);
    this.props.onChange(validatedPayload);
  };
  handleDate = (e) => {
    e.preventDefault();
    const payload = { ...this.props.data };
    payload.date.value = e.target.value;
    const validatedPayload = validateInputPayload(payload.type, payload);
    this.props.onChange(validatedPayload);
  };
  render() {
    const { selectedValue, options, date, time } = this.props.data;
    return (
      <Field>
      <Container>
        <DateTimeInput
          id={date.id}
          data={this.props.data}
          name={date.id}
          min={this.state.min}
          type={date.type}
          onChange={this.handleDate}
          onBlur={this.handleDate}
        />
        <Label>at</Label>
      </Container>
      <Container>
        <DateTimeInput
          id={time.id}
          data={this.props.data}
          min="01:00"
          max="12:59"
          name={time.id}
          type={time.type}
          onChange={this.handleTime}
          onBlur={this.handleTime}
        />
        <RadioContainer>
          {options.map(option => (
            <RadioField
              withLeftMargin={option.id === "am"}
              key={option.id}
              id={option.id}
              data={this.props.data}
              name={option.id}
              checked={option.value === selectedValue}
              desc={option.desc}
              onChange={this.props.onChange}
              value={option.value}
            />
          ))}
        </RadioContainer>
      </Container>
    </Field>
    );
  }
}

export default DateField;



// constructor(props) {
//   super(props);
//   this.state = {
//     data: '',
//     time: '',
//     min: '',
//     am_pm: '',
//   }
// };
// componentDidMount() {
//   this.getMinimumDate();
// };
// // static getDerivedStateFromProps(props, state) {
// //   if (props.data.selectedValue !== state.am_pm) {

// //     return {
// //       am_pm: props.data.selectedValue,
// //     };
// //   }
// //   return null;
// // }
// componentDidUpdate(prevProps) {
//   const { selectedValue } = this.props.data;
//   if (prevProps.data.selectedValue !== selectedValue) {
//     console.log('DEBUG prevProps: ', prevProps.data.selectedValue);
//     console.log('DEBUG selectedValue: ', selectedValue);
//     const time = this.state.time;
//     this.setState({ time: this.formatTime(time)})
//     this.handleOnChange();
//   }
// }
// getMinimumDate = () => (
//   this.setState({ min: new Date().toISOString().slice(0, 10) })
// );
// formatTime = (value) => {
//   console.log('DEBUG value: ', value);
//   const { selectedValue } = this.props.data;
//   const time = value.split(":");
//   console.log('DEBUG time: ', time);
//   let hours = Number(time[0]);
//   console.log('DEBUG hours: ', hours);
//   let minutes = Number(time[1]);
//   console.log('DEBUG minutes: ', minutes);
//   console.log('DEBUG selectedValue: ', selectedValue);
//   if (selectedValue === "pm" && hours < 12) { hours = hours + 12 };
//   if (selectedValue === "am" && hours === 12) { hours = hours - 12 };
//   if (hours < 10) { hours = `0${hours}`};
//   if (minutes < 10) { minutes = `0${minutes}`};
//   const newHours = hours;
//   const newMinutes = minutes;
//   console.log('DEBUG hours: ', newHours);
//   console.log('DEBUG minutes: ', minutes);
//   console.log('DEBUG `${hours}:${minutes}`: ', `${hours}:${minutes}`);
//   // this.setState({
//   //   time: `${newHours}:${newMinutes}`
//   // });
//   return `${newHours}:${newMinutes}`;

  
// }
// handleTime = (e) => {
//   const { selectedValue } = this.props.data;
//   const time = e.target.value.split(":");
//   let hours = Number(time[0]);
//   let minutes = Number(time[1]);
//   if (selectedValue === "pm" && hours < 12) { hours = hours + 12 };
//   if (selectedValue === "am" && hours === 12) { hours = hours - 12 };
//   if (hours < 10) { hours = `0${hours}`};
//   if (minutes < 10) { minutes = `0${minutes}`};
//   console.log(`${hours}:${minutes}`);
//   this.setState({
//     time: `${hours}:${minutes}`
//   });
//   this.handleOnChange();
// };
// handleDate = (e) => {
//   e.preventDefault();
//   this.setState({
//     date: e.target.value
//   })
//   this.handleOnChange();
// };
// handleOnChange = () => {
//   const { date, time } = this.state;
//   const payload = { ...this.props.data };
//   payload.value = `${date}T${time}`;
//   console.log(payload.value);
//   const validatedPayload = validateInputPayload(payload.type, payload);
//   this.props.onChange(validatedPayload);
// };