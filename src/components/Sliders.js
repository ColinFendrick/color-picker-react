import React, { Component } from 'react'

class Sliders extends Component {
  _changeHue = (e) => {
    this.props.alter(e.target.value, 'hue')
  }

  _changeSat = (e) => {
    this.props.alter(e.target.value, 'sat')
  }

  _changeLight = (e) => {
    this.props.alter(e.target.value, 'light')
  }

  _changeAlpha = (e) => {
    this.props.alter(e.target.value, 'alpha')
  }

  render () {
    return <div className='labelContainer'>
      <div className='label'>
        <span className='hueValueLabel'>Hue</span>
      </div>
      <div>
        <input name='hue' type='range' min='0' max='360' value={this.props.hue} onChange={this._changeHue} onInput={this._changeHue} />
      </div>
      <div className='label'>
        <span className='satValueLabel'>Saturation</span>
      </div>
      <div>
        <input name='sat' type='range' min='0' max='100' value={this.props.saturation} onChange={this._changeSat} onInput={this._changeSat} />
      </div>
      <div className='label'>
        <span className='lightValueLabel'>Light</span>
      </div>
      <div>
        <input name='light' type='range' min='0' max='100' value={this.props.lightness} onChange={this._changeLight} onInput={this._changeLight} />
      </div>
      <div className='label'>
        <span className='alphaValueLabel'>Alpha</span>
      </div>
      <div>
        <input name='alpha' type='range' min='0' max='1' step='0.01' value={this.props.alpha} onChange={this._changeAlpha} onInput={this._changeAlpha} />
      </div>
    </div>
  }
}

export default Sliders
