import React from 'react';
import PropTypes from 'prop-types';

import {
  dataPropType,
  requiredDataPropType,
  radioFieldPropType,
  dateTimeFieldPropType,
  FieldType,
} from '../../../utils/constants';

import Input from '../../atoms/Input';
import NumberInput from '../../atoms/NumberInput';
import Title from '../../atoms/Title';
import Tooltip from '../../atoms/Tooltip';

import SelectField from '../../molecules/SelectField';
import TextareaField from '../../molecules/TextareaField';

import SelectData from '../SelectData';
import PaymentField from '../PaymentField';
import DateField from '../DateField';

import { Field } from './styles';

const FormField = ({
  titleDesc,
  titleMandatory,
  type,
  data,
  isError,
  errorInfo,
  ...other
}) => (
  <Field>
    <Title desc={titleDesc} error={isError} mandatory={titleMandatory} />
    {type === FieldType.INPUT && (
      <Input data={data} error={isError} {...other} />
    )}
    {type === FieldType.NUMBER_INPUT && (
      <NumberInput data={data} {...other} />
    )}
    {type === FieldType.TEXTAREA && (
      <TextareaField data={data} error={isError} {...other} />
    )}
    {type === FieldType.SELECT && (
      <SelectField data={data} {...other} />
    )}
    {type === FieldType.SELECT_DATA && (
      <SelectData data={data} {...other} />
    )}
    {type === FieldType.PAYMENT && (
      <PaymentField data={data} error={isError} {...other} />
    )}
    {type === FieldType.DATE && (
      <DateField data={data} error={isError} {...other} />
    )}
    {!isError && <Tooltip isVisible={isError} text={errorInfo} />}
  </Field>
);

FormField.propTypes = {
  data: PropTypes.oneOfType([
    dataPropType,
    requiredDataPropType,
    radioFieldPropType,
    dateTimeFieldPropType,
  ]),
  titleDesc: PropTypes.string,
  titleMandatory: PropTypes.string,
  type: PropTypes.string,
  isError: PropTypes.bool,
  errorInfo: PropTypes.string,
};

export default FormField;
