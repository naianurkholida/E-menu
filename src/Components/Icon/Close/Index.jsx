import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
    
);

Close.propTypes = {
  className: PropTypes.string,
};

Close.defaultProps = {
  className: '',
};

export default Close;