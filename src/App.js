import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    answer: 0,
    from: '',
    to: '',
  }

  convert = (e) => {
    const a = e.target.value * (this.state.from / this.state.to)
    console.log('to: ', this.state.to)
    console.log(this.state.from)
    this.setState({
      answer: a,
    })
  }

  setFrom = (e) => {
    this.setState({
      from: e.target.value,
    })
  }

  setTo = (e) => {
    this.setState({
      to: e.target.value,
    })
  }

  render() {
    return (
      <main>
        <select onChange={this.setFrom} id="length">
          <option value="">From</option>
          <option value="63360">Miles</option>
          <option value="36">Yard</option>
          <option value="12">Feet</option>
          <option value="1">Inches</option>
        </select>
        <select onChange={this.setTo} id="length">
          <option value="">To</option>
          <option value="1">Inches</option>
          <option value="12">Feet</option>
          <option value="36">Yard</option>
          <option value="63360">Miles</option>
        </select>
        <input
          placeholder="Put number here"
          onChange={this.convert}
          type="text"
        />
        <p>Result: {this.state.answer}</p>
      </main>
    )
  }
}

export default App
