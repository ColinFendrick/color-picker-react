import React, { Component } from 'react'

class Swatch extends Component {
  render () {
    const style = {
      backgroundColor: `hsla(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%, ${this.props.alpha})`
    }

    return <div className='swatch' style={style} />
  }
}

export default Swatch
