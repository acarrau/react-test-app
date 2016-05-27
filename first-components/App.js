import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';
import Slider from './Slider';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      sliderRed: 128,
      sliderGreen: 128,
      sliderBlue: 128,
    }
    this.updateSlider = this.updateSlider.bind(this)
  }

  updateSlider(e) {
    this.setState({
      sliderRed: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      sliderGreen: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      sliderBlue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
    })
  }

  updateWidget(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render(){
    return <div>
        <h1>Slider component</h1>
        <Slider ref="red" update={this.updateSlider} />
        {this.state.sliderRed}
        <br />
        <Slider ref="green" update={this.updateSlider} />
        {this.state.sliderGreen}
        <br />
        <Slider ref="blue" update={this.updateSlider} />
        {this.state.sliderBlue}
        <br />
        <h1>Widget component</h1>
        <Widget txt={this.state.txt} cat={this.props.cat} update={this.updateWidget.bind(this)} />
      </div>
  }
}

App.propTypes = {
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default props text',
  cat: 5
}

export default App;
