import React, { Component } from 'react'

class ValueList extends Component {
  render () {
    return <div id='current'>
      <span className='hsla'>hsla</span>
      <span className='valueList'>(<span className='hueValue'>{this.props.hue}</span>, <span className='satValue'>{this.props.saturation}</span>%, <span className='lightValue'>{this.props.lightness}</span>%, <span className='alphaValue'>{this.props.alpha}</span>)
      </span>
    </div>
  }
}

export default ValueList
