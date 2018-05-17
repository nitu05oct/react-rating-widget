const styles = {};

styles.question = {
      padding: '20',
      'text-align': 'center',
      color: 'black',
    };

styles.ratingStars = {
      width: '100%',
      display: 'flex',
      'justify-content': 'center',
    };

styles.widget = {
      padding: '20px 0 0',
      display: 'flex',
      'flex-direction': 'column',
      'border-sizing': 'border-box',
    };

styles.widgetWapper = {
      display: 'flex',
      'flex-direction': 'column',
      'text-align': 'center',
    };


styles.starActive = {
      width: '50px',
      height: '50px',
      display: 'inline-block',
      background: 'url(./assets/star-hover.svg) no-repeat center center',
      'background-size': '38px 38px',
      border: '1px solid red',
    };    
    
styles.starInactive = {
        width: '50px',
        height: '50px',
        background: 'url(./assets/star.svg) no-repeat center center',
        'background-size': '28px 28px',
        transform: 'scale(1)',
        transition: '0.1s all ease-in-out',
        border: '1px solid blue',
    };    


styles.reactionShow = {
  'text-align': 'center',
  padding: '7px 0 4px',
  color: '#72727d',
  font: '700 14px/16px Roboto, sans-serif',
  'border-radius': '20px',
  'background-color': '#fdedee',
  width: '97px',
  margin: '30px auto 0',
  opacity: 1,
  display: 'block',
  transition: '0.2s all ease-in-out',
  };

styles.reactionHide = {
  'textAlign': 'center',
  padding: '7px 0 4px',
  color: '#72727d',
  font: '700 14px/16px Roboto, sans-serif',
  'border-radius': '20px',
  'background-color': '#fdedee',
  width: '97px',
  margin: '30px auto 0',
  opacity: 0,
  display: 'none',
  transition: '0.2s all ease-in-out',
  };    


export default styles;
