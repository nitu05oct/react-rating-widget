import React, { Fragment } from 'react'
import fill from 'lodash/fill'
import times from 'lodash/times'
import PropTypes from 'prop-types'

const IconStyle = color => {
  const stylesMain = { ...{
    width: '0px',
    height: '0px',
    margin: '10px 5px',
    color: color,
    position: 'relative',
    display: 'inline-block',   
    borderRight: '13px solid transparent',
    borderBottomColor: color,
    borderBottom: '9px solid',
    borderLeft: '13px solid transparent',
    cursor: 'pointer' ,
    margin: '0 8px'
  },
  transform: color === '#00bcd5' ? 'rotate(35deg) scale(1.5)' : 'rotate(35deg)',
}

  const stylesBefore = {
    borderBottom: '10px solid',
    borderBottomColor: color,
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    position: 'absolute',
    height: '0px',
    width: '0px',
    top: '-6px',
    left: '-8px',
    transform: 'rotate(-35deg)'
  }

  const stylesAfter = {
    position: 'absolute',
    color: color,
    top: '1.30px',
    left: '-13px',
    width: '0px',
    height: '0px',
    borderRight: '13px solid transparent',
    borderBottom: '8px solid',
    borderBottomColor: color,
    borderLeft: '13px solid transparent',
    transform: 'rotate(-68deg)'
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
            {IconStyleActive && IconStyleActive('#00bcd5')}
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
          {IconStyleInactive && IconStyleInactive('#d3cccc')}
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
