# react-rating-widget

> A simple, highly customisable rating component with Test

[![NPM](https://img.shields.io/npm/v/react-rating-widget.svg)](https://www.npmjs.com/package/react-rating-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Demo](//nitu05oct.github.io/react-rating-widget/)

## Why it's better

 - Support Theme Customization
 - Support Callback Handlers
 - Thoroughly tested on all browsers
 - Responsive
 - With Tests

## Install

```bash
npm install --save react-rating-widget
```

## Usage

```jsx
import React, { PureComponent } from 'react'

import RatingWidget from 'react-rating-widget'

const ActiveStar = () => {

  const styles = {
    width: '50px',
    height: '50px',
    background: 'url(./assets/star-hover.svg) no-repeat center center',
    ...
    }; 

  return <div style={styles} ></div>;
};


const InactiveStar = () => {

  const styles = {
    width: '50px',
    height: '50px',
    background: 'url(./assets/star.svg) no-repeat center center',
    ...
    };

  return <div style={styles} ></div>;
};

const ratingReactions = {1: "Hated it!", 2: "Disliked it!", 3: "It's OK!", 4: "Liked it!", 5: "Loved it!"};
    
const reactionStyle = {
    textAlign: 'center',
    padding: '7px 0 4px',
    ...
    };

export default class App extends PureComponent {

  /* onClick Handler to store/process rating selected by user */ 
  storeAnswers(answer)
  {
  	console.log("You have rated us " + answer.answer);
  	...
  }

  render () {
    return (
    <div>
        <RatingWidget 
		iconCount={6}
		IconStyleActive = { ActiveStar }
		IconStyleInactive =  { InactiveStar }
		storeAnswers={this.storeAnswers.bind(this)}
		reactionLables={ratingReactions}
		reactionStyle= {reactionStyle}
        />
    </div>
    )
  }
}
```

## Props

### iconCount  (optional)

Type: Number Default: 5

Number of icons(for eg. stars) to rate with

### IconStyleActive  (optional)

Type: React Component  Default: React component

React Stateless component for icon styling when selected

### IconStyleInactive  (optional)

Type: React Component  Default: React component

React Stateless component for icon styling when not selected

### storeAnswers (required)

Type: Function  Default: undefined

A handler function that gets called when user rates(clicks the icon)

### reactionLables (optional) 

Type: Object  Default: undefined 

An object of reaction text to show when rating is chosen by user

### reactionStyle (optional) 

Type: Object  Default: undefined 

Style object for reaction text

## License

MIT © [nitu05oct](https://github.com/nitu05oct)
