import React, { Fragment } from 'react';
import fill from 'lodash/fill';
import times from 'lodash/times';
import PropTypes from 'prop-types';
import s from './styles';

const ActiveStar = props => {

  const styles = {
    width: '50px',
    height: '50px',
    display: 'inline-block',
    background: 'url(./assets/star-hover.svg) no-repeat center center',
    'background-size': '38px 38px',
    }; 

  return <div style={styles} ></div>;
};


const InactiveStar = props => {

  const styles = {
    width: '50px',
    height: '50px',
    background: 'url(./assets/star.svg) no-repeat center center',
    'background-size': '28px 28px',
    transform: 'scale(1)',
    transition: '0.1s all ease-in-out',
    };

  return <div style={styles} ></div>;
};

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localRating: props.rating,
    };
    this.reset = this.reset.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ localRating: nextProps.rating });
  }

  setRating(i, type) {
    i >= this.props.rating ? this.setState({ localRating: i + 1 }) : this.setState({ localRating: this.props.rating });
  }

  reset() {
    this.setState({ localRating: this.props.rating });
  }

  render() {    
    const { starsCount, updateRating , InactiveStar , ActiveStar } = this.props;
    const totalStarsNum = starsCount;
    const stars = fill(times(totalStarsNum, i => 0), 1, 0, this.state.localRating).map((value, index) => {
      const uniqueId = index;
                  console.log(ActiveStar ,InactiveStar );  


      if (value === 1) {

        return (
          <div 
            key={uniqueId}
            onClick={() => updateRating(index + 1)}
            onMouseOver={() => this.setRating(index, 'hover')}
            onMouseOut={this.reset}
            val={value}>
           
                        {ActiveStar && ActiveStar()}

            </div>
          // <ActiveStar key={uniqueId} 
          //  onClick={() => updateRating(index + 1)}
          //  onMouseOver={() => this.setRating(index, 'hover')}
          //  onMouseOut={this.reset} 
          //  val={value}
          //  />
        );
      }
      return (
        <div
          key={uniqueId}
          onClick={() => updateRating(index + 1)}
          onMouseOver={() => this.setRating(index, 'hover')}
          onMouseOut={this.reset}
          val={value}
        >
                        {InactiveStar && InactiveStar()}
   
        </div>

        // <InactiveStar 
        // key={uniqueId}
        // onClick={() => updateRating(index + 1)}
        // onMouseOver={() => this.setRating(index, 'hover')}
        // onMouseOut={this.reset}
        // val={value}
        //  />
      );
    });
    return <Fragment>{stars}</Fragment>;
  }
}

Star.defaultProps = {
  value: -1,
  starsCount: 5,
  ActiveStar: ActiveStar,
  InactiveStar: InactiveStar,
};

Star.propTypes = {
  updateRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  starsCount: PropTypes.number,
  ActiveStar: PropTypes.object,
  InactiveStar: PropTypes.object,
};

export default Star;
