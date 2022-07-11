import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return <input type="text" name="filter" value={value} onChange={onChange} />;
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
