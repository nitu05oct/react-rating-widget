import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Rating from './Rating'
import s from './styles'

class RatingWidget extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    }
    this.updateRating = this.updateRating.bind(this)
  }

  updateRating(rating) {
    this.setState({ rating })
    this.props.storeAnswers({ answer: rating.toString() })
  }

  render() {
    return (
      <div style={s.widgetWapper}>
        <div style={s.ratingIconWrapper}>
          <Icon {...this.props} rating={this.state.rating} updateRating={this.updateRating} />
        </div>
        {this.props.reactionLables && JSON.stringify(this.props.reactionLables) !== '{}' && <Rating rating={this.state.rating} text={this.props.reactionLables[this.state.rating]} reactionStyle={this.props.reactionStyle} />}
      </div>
    )
  }
}
RatingWidget.defaultProps = {
  reactionLables: {}
}

RatingWidget.propTypes = {
  reactionLables: PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.bool
  }),
  storeAnswers: PropTypes.func.isRequired,
  IconStyleActive: PropTypes.func,
  IconStyleInactive: PropTypes.func,
  reactionStyle: PropTypes.object
}

export default RatingWidget
