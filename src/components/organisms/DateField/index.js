import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { dateTimeFieldPropType } from '../../../utils/constants';
import { setData } from '../../../store/actions/formActions';

import formatTime from '../../../utils/formatTime';
import RadioInput from '../../atoms/RadioInput';

import { Field, Container, RadioContainer, DateTimeInput, Label } from './styles';

const DateField = (props) => {
  const {
    date, time, day, error,
  } = props;
  const {
    selected, options,
  } = props.date;
  const getMinimumDate = () => new Date().toISOString().slice(0, 10);
  const handleDateAndTime = () => {
    const fullDate = `${day.value}T${time.value}`;
    props.onChange(date, fullDate);
  };
  const handleTime = (e) => {
    e.preventDefault();
    const formatted = formatTime(props.data.selected, e.target.value);
    props.onChange(time, formatted);
    handleDateAndTime();
  };
  const handleDay = (e) => {
    e.preventDefault();
    props.onChange(day, e.target.value);
    handleDateAndTime();
  };
  const handleAmPm = (e) => {
    const formatted = formatTime(e.target.value, time.value);
    props.setData(date.id, 'selected', e.target.value);
    props.onChange(time, formatted);
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
          onBlur={handleDateAndTime}
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
          onBlur={handleDateAndTime}
        />
        <RadioContainer>
          {options.map(option => (
            <RadioInput
              withLeftMargin={option.id === 'am'}
              key={option.id}
              id={option.id}
              name={option.id}
              checked={option.value === selected}
              desc={option.desc}
              onChange={handleAmPm}
              onClick={handleDateAndTime}
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
});

const mapDispatchToProps = {
  setData,
};

DateField.propTypes = {
  data: dateTimeFieldPropType,
  onChange: PropTypes.func,
  setData: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateField);
