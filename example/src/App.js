import React, { Component } from 'react'

import RatingWidget from 'star-rating-react'

const ActiveStar = () => {

  const styles = {
    width: '50px',
    height: '50px',
    display: 'inline-block',
    background: 'url(./assets/star-hover.svg) no-repeat center center',
    backgroundSize: '38px 38px',
    }; 

  return <div style={styles} ></div>;
};


const InactiveStar = () => {

  const styles = {
    width: '50px',
    height: '50px',
    background: 'url(./assets/star.svg) no-repeat center center',
    backgroundSize: '28px 28px',
    transform: 'scale(1)',
    transition: '0.1s all ease-in-out',
    };

  return <div style={styles} ></div>;
};

export default class App extends Component {



  storeAnswers(answer)
  {
  	console.log("here",answer);
  }

  render () {
  	const ratingReactions = {1: "Hated it!", 2: "Disliked it!", 3: "It's OK!", 4: "Liked it!", 5: "Loved it!" , 6: "Loved it!"};
    
    const reactionStyle = {
    textAlign: 'center',
    padding: '7px 0 4px',
    color: '#72727d',
    font: '700 14px/16px Roboto, sans-serif',
    borderRadius: '20px',
    backgroundColor: '#fdedee',
    width: '97px',
    margin: '30px auto 0',
    transition: '0.2s all ease-in-out',
    };
  
    return (
    <React.Fragment>
      <div>
        <RatingWidget iconCount={6}  reactionLables={ratingReactions} reactionStyle= {reactionStyle} storeAnswers={this.storeAnswers.bind(this)}/>
      </div>

       <h2> Star Rating Widget custom Images and css</h2>
      <div>
        <RatingWidget IconStyleActive = { ActiveStar } IconStyleInactive =  { InactiveStar } storeAnswers={this.storeAnswers.bind(this)}/>
      </div>

    </React.Fragment>


    )
  }
}
