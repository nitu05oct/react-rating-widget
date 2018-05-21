import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

const Rating = props => {  

const { rating, text , reactionStyle } = props;

const reaction = {...reactionStyle, 
  opacity: rating > 0 ? '1':'0',
  display: rating > 0 ? 'block':'none',   
};

return (
    <div style = {reaction}>
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
