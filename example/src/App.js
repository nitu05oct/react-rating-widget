import React, { PureComponent } from 'react'

import RatingWidget from 'react-rating-widget'

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

export default class App extends PureComponent {

  storeAnswers(answer)
  {
  	console.log("You have rated us " + answer.answer);
  }

  render () {
  	const ratingReactions = {1: "Hated it!", 2: "Disliked it!", 3: "It's OK!", 4: "Liked it!", 5: "Loved it!"};
    
    const reactionStyle = {
    textAlign: 'center',
    padding: '7px 0 4px',
    color: '#72727d',
    font: '700 14px/16px Roboto, sans-serif',
    borderRadius: '20px',
    backgroundColor: '#fdedee',
    width: '97px',
    margin: '20px auto 0',
    transition: '0.2s all ease-in-out',
    };

    return (
    <div style={{position:'relative'}}>
	      <h3 style={{textAlign: 'center' }}>Rating Widget with Reaction Labels</h3>
	      <div>
	        <RatingWidget iconCount={5}  reactionLables={ratingReactions} reactionStyle= {reactionStyle} storeAnswers={this.storeAnswers.bind(this)}/>
	      </div>

	       <h3 style={{textAlign: 'center' , position:'absolute' , left:'30%' , top:'130px' }}>Rating Widget with Customizable icon Styling : Example Stars</h3>
	      <div style={{position:'absolute' , left:'41%' , top:'170px' }}>
	        <RatingWidget IconStyleActive = { ActiveStar } IconStyleInactive =  { InactiveStar } storeAnswers={this.storeAnswers.bind(this)}/>
	      </div>
    </div>
    )
  }
}
