# star-rating-react [![NPM](https://img.shields.io/npm/v/star-rating-react.svg)](https://www.npmjs.com/package/react-rating-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


> A simple, highly customisable rating component with Test

[Demo](//nitu05oct.github.io/react-rating-widget/)

## Why it's better

 - Customizable
 - Tested on all major Bowsers
 - Thoroughly tested

## Install

```bash
npm install --save star-rating-react
```

## Usage

```jsx
import React, { PureComponent } from 'react'

import RatingWidget from 'star-rating-react'


export default class App extends PureComponent {

  /* onClick Handler to store/process rating selected by user */ 
  storeAnswers(answer)
  {
  	console.log("here",answer);
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