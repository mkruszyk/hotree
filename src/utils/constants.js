import PropTypes from 'prop-types';

export const dataPropType = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
});

export const requiredDataPropType = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  isValid: PropTypes.objectOf(PropTypes.shape({
    status: PropTypes.bool,
    info: PropTypes.string,
  })),
});

export const radioFieldPropType = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
  selected: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    desc: PropTypes.string,
    value: PropTypes.string,
  })),
});

export const dateTimeFieldPropType = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  selected: PropTypes.string,
  isValid: PropTypes.objectOf(PropTypes.shape({
    status: PropTypes.bool,
    info: PropTypes.string,
  })),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    desc: PropTypes.string,
    value: PropTypes.string,
  })),
});

export const FieldType = {
  INPUT: 'input',
  NUMBER_INPUT: 'numberInput',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  SELECT_DATA: 'selectData',
  PAYMENT: 'payment',
  DATE: 'date',
};

