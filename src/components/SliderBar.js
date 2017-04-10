import React, { Component } from 'react'

class SliderBar extends Component {
  _change = (e) => {
    this.props.alter(e.target.value, this.props.name)
  }

  render () {
    return <input type='range' min='0' max={this.props.max} value={this.props.value} onChange={this._change} onInput={this._change} step={this.props.step} />
  }
}

export default SliderBar
