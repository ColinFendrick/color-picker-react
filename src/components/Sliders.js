import React, { Component } from 'react'
import SliderBar from './SliderBar.js'

class Sliders extends Component {
  render () {
    return <div className='labelContainer'>
      <div className='label'>
        <span className='hueValueLabel'>Hue</span>
      </div>
      <div>
        <SliderBar alter={this.props.alter} name='hue' max='360' value={this.props.hue} />
      </div>
      <div className='label'>
        <span className='satValueLabel'>Saturation</span>
      </div>
      <div>
        <SliderBar alter={this.props.alter} name='saturation' max='100' value={this.props.saturation} />
      </div>
      <div className='label'>
        <span className='lightValueLabel'>Lightness</span>
      </div>
      <div>
        <SliderBar alter={this.props.alter} name='lightness' max='100' value={this.props.lightness} />
      </div>
      <div className='label'>
        <span className='alphaValueLabel'>Alpha</span>
      </div>
      <div>
        <SliderBar alter={this.props.alter} name='alpha' max='1' step='0.01' value={this.props.alpha} />
      </div>

    </div>
  }
}

export default Sliders
