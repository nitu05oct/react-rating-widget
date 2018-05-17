import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

const Rating = props => {  

const { rating, text } = props;
  return (
    <div style = {rating > 0 ? s.reactionShow : s.reactionHide}>
      <span>{text}</span>
    </div>
  );
};
Rating.defaultProps = {
  text: '',
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string,
};

export default Rating;
