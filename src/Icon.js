import React, { Fragment } from 'react'
import fill from 'lodash/fill'
import times from 'lodash/times'
import PropTypes from 'prop-types'

const IconStyle = color => {
  const stylesMain = {
    margin: '15px 0',
    color: color,
    position: 'relative',
    display: 'block',
    width: '0px',
    height: '0px',
    borderRight: '20px solid transparent',
    borderBottomColor: color,
    borderBottom: '12px solid',
    borderLeft: '20px solid transparent',
    transform: 'rotate(35deg)',
    cursor: 'pointer' }

  const stylesBefore = {
    borderBottom: '15px solid',
    borderBottomColor: color,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    position: 'absolute',
    height: '0px',
    width: '0px',
    top: '-8px',
    left: '-12px',
    transform: 'rotate(-35deg)'
  }

  const stylesAfter = {
    position: 'absolute',
    display: 'block',
    color: color,
    top: '2px',
    left: '-21px',
    width: '0px',
    height: '0px',
    borderRight: '20px solid transparent',
    borderBottom: '12px solid',
    borderBottomColor: color,
    borderLeft: '20px solid transparent',
    transform: 'rotate(-70deg)'
  }

  return (
    <React.Fragment>
      <div style={stylesMain} >
        <div style={stylesBefore} />
        <div style={stylesAfter} />
      </div>
    </React.Fragment>)
}

class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localRating: props.rating
    }
    this.reset = this.reset.bind(this)
    this.setRating = this.setRating.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ localRating: nextProps.rating })
  }

  setRating(i, type) {
    i >= this.props.rating ? this.setState({ localRating: i + 1 }) : this.setState({ localRating: this.props.rating })
  }

  reset() {
    this.setState({ localRating: this.props.rating })
  }

  render() {
    const { iconCount, updateRating, IconStyleActive, IconStyleInactive } = this.props
    const totalStarsNum = iconCount
    const stars = fill(times(totalStarsNum, i => 0), 1, 0, this.state.localRating).map((value, index) => {
      const uniqueId = index
      if (value === 1) {
        return (
          <div
            key={uniqueId}
            onClick={() => updateRating(index + 1)}
            onMouseOver={() => this.setRating(index, 'hover')}
            onMouseOut={this.reset}
            val={value}>
            {IconStyleActive && IconStyleActive('blue')}
          </div>
        )
      }
      return (
        <div
          key={uniqueId}
          onClick={() => updateRating(index + 1)}
          onMouseOver={() => this.setRating(index, 'hover')}
          onMouseOut={this.reset}
          val={value}
        >
          {IconStyleInactive && IconStyleInactive('red')}
        </div>
      )
    })
    return <Fragment>{stars}</Fragment>
  }
}

Icon.defaultProps = {
  value: -1,
  iconCount: 5,
  IconStyleActive: IconStyle,
  IconStyleInactive: IconStyle
}

Icon.propTypes = {
  updateRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  iconCount: PropTypes.number,
  IconStyleActive: PropTypes.func,
  IconStyleInactive: PropTypes.func
}

export default Icon
