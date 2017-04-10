import React, { Component } from 'react'

class ValueList extends Component {
  render () {
    let content
    if (this.props.alpha === 0) {
      content = <div><span className='hsla'>hsl</span><span className='valueList'>(<span className='hueValue'>{this.props.hue}</span>, <span className='satValue'>{this.props.saturation}</span>%, <span className='lightValue'>{this.props.lightness}</span>%)
    </span></div>
    } else {
      content = <div><span className='hsla'>hsla</span><span className='valueList'>(<span className='hueValue'>{this.props.hue}</span>, <span className='satValue'>{this.props.saturation}</span>%, <span className='lightValue'>{this.props.lightness}</span>%, <span className='alphaValue'>{this.props.alpha}</span>)
    </span></div>
    }
    return <div id='current'>
      {content}
    </div>
  }
}

export default ValueList
