import React, { Component } from 'react'

import StarRating from 'star-rating-react'

const ActiveStar = () => {

  const styles = {
    width: '50px',
    height: '50px',
    display: 'inline-block',
    background: 'url(./assets/star-hover.svg) no-repeat center center',
    'background-size': '38px 38px',
    border: '1px solid red',
    }; 

  return <div style={styles} ></div>;
};


const InactiveStar = () => {

  const styles = {
    width: '50px',
    height: '50px',
    background: 'url(./assets/star.svg) no-repeat center center',
    'background-size': '28px 28px',
    transform: 'scale(1)',
    transition: '0.1s all ease-in-out',
    border: '1px solid blue',
    };

  return <div style={styles} ></div>;
};

export default class App extends Component {

  storeAnswers(answer)
  {
  	console.log("here",answer);
  }

  render () {
  	const ratingReactions = {1: "Hated it!", 2: "Disliked it!", 3: "It's OK!", 4: "Liked it!", 5: "Loved it!"};
  	const QuestionText = "Please rate your Experience with us";

    return (
    <React.Fragment>
      <h2> Star Rating Widget with Question Label and Rating Reaction</h2>
      <div>
        <StarRating title={QuestionText} choices={ratingReactions} storeAnswers={this.storeAnswers.bind(this)} />
      </div>

      <h2> Star Rating Widget without Question Label and Rating Reaction</h2>
      <div>
        <StarRating starsCount={6}  storeAnswers={this.storeAnswers.bind(this)}/>
      </div>

       <h2> Star Rating Widget custom Images and css</h2>
      <div>
        <StarRating ActiveStar= { ActiveStar } InactiveStar={ InactiveStar } storeAnswers={this.storeAnswers.bind(this)}/>
      </div>

    </React.Fragment>


    )
  }
}
