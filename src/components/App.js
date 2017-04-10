import React, { Component } from 'react'
import Sliders from './Sliders.js'
import Swatch from './Swatch.js'
import ValueList from './ValueList.js'

class App extends Component {
  state = {
    hue: 180,
    saturation: 50,
    lightness: 50,
    alpha: 0.5
  }

  alter = (e, name) => {
    if (name === 'hue') {
      this.setState({hue: Number(e)})
    }
    if (name === 'sat') {
      this.setState({saturation: Number(e)})
    }
    if (name === 'light') {
      this.setState({lightness: Number(e)})
    }
    if (name === 'alpha') {
      this.setState({alpha: Number(e)})
    }
  }

  render () {
    return <div className='container'>An HSL Color Picker.
      <Swatch {...this.state} />
      <ValueList {...this.state} />
      <Sliders {...this.state} alter={this.alter} />
    </div>
  }
}

export default App
