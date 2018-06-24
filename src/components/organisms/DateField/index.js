import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { dateTimeFieldPropType, dataPropType, radioFieldPropType, requiredDataPropType } from '../../../utils/constants';

import formatTime from '../../../utils/formatTime';
import RadioInput from '../../atoms/RadioInput';

import { Field, Container, RadioContainer, DateTimeInput, Label } from './styles';

const DateField = (props) => {
  const {
    date,
    time,
    day,
    midday,
    error,
    handleInput,
    handleRadio,
  } = props;
  const getMinimumDate = () => new Date().toISOString().slice(0, 10);
  const setDateAndTime = () => {
    const fullDate = `${day.value}T${time.value}`;
    handleInput({ target: { id: date.id, value: fullDate } }, date.toValidate);
  };
  const handleTime = (e) => {
    e.preventDefault();
    const formatted = formatTime(date.selected, e.target.value);
    handleInput({ target: { id: time.id, value: formatted } });
    setDateAndTime();
  };
  const handleDay = (e) => {
    handleInput(e);
    setDateAndTime();
  };
  const handleAmPm = (e) => {
    const formatted = formatTime(e.target.value, time.value);
    handleRadio(midday.id, e);
    handleInput({ target: { id: time.id, value: formatted } });
  };
  return (
    <Field>
      <Container>
        <DateTimeInput
          error={error}
          id={day.id}
          name={day.id}
          min={getMinimumDate()}
          type={day.type}
          onChange={handleDay}
          onBlur={setDateAndTime}
        />
        <Label>at</Label>
      </Container>
      <Container>
        <DateTimeInput
          error={error}
          id={time.id}
          min="01:00"
          max="12:59"
          name={time.id}
          type={time.type}
          onChange={handleTime}
          onBlur={setDateAndTime}
        />
        <RadioContainer>
          {midday.options.map(option => (
            <RadioInput
              withLeftMargin={option.id === 'am'}
              key={option.id}
              id={option.id}
              name={option.id}
              checked={option.value === midday.selected}
              desc={option.desc}
              onChange={handleAmPm}
              value={option.value}
            />
        ))}
        </RadioContainer>
      </Container>
    </Field>
  );
};

const mapStateToProps = state => ({
  date: state.form.date,
  time: state.form.time,
  day: state.form.day,
  midday: state.form.midday,
});

DateField.propTypes = {
  date: dateTimeFieldPropType,
  day: dataPropType,
  time: requiredDataPropType,
  midday: radioFieldPropType,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  handleInput: PropTypes.func,
  handleRadio: PropTypes.func,
};

export default connect(mapStateToProps, null)(DateField);
