import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import Rating from './Rating';
import s from './styles';

// const fetchImage = props => {
//   const img = ['hunkydory.svg', 'hunkydory-1.svg', 'hunkydory-2.svg', 'hunkydory-3.svg', 'hunkydory-4.svg', 'hunkydory-5.svg'];
//   return img[props];
// };

class StarRating extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.updateRating = this.updateRating.bind(this);
  }

  updateRating(rating) {
    // console.log("hreeeee",rating);
    this.setState({ rating });
    this.props.storeAnswers({ answer: rating.toString() });
  }

  render() {

    
   // console.log("choices-->",this.props.choices , this.props.choices.length, this.state.rating);

    return (
      <div style={s.widgetWapper}>
        <div style={s.widget}>
          {this.props.title && <div style={s.question}>{this.props.title}</div>}
          <div style={s.ratingStars}>
            <Star {...this.props} rating={this.state.rating} updateRating={this.updateRating} />
          </div>
          {this.props.choices && JSON.stringify(this.props.choices) !== '{}' && <Rating rating={this.state.rating} text={this.props.choices[this.state.rating]} />}
        </div>
      </div>
    );
  }
}
StarRating.defaultProps = {
  startsCount: 5,
  choices: {},
  title: "",  
};

StarRating.propTypes = {
  // id: PropTypes.string.isRequired,
  title: PropTypes.string,
  choices: PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.bool,
  }),
  storeAnswers: PropTypes.func.isRequired,
  starsCount: PropTypes.number,
  activeStar: PropTypes.object.isRequired,
  inactiveStar: PropTypes.object.isRequired,
};

export default StarRating;
