import React from 'react';
import Widget from './Widget';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render(){
    return <div>
        <Widget txt={this.state.txt} cat={this.props.cat} update={this.update} />
        <Widget txt={this.state.txt} cat={this.props.cat} update={this.update} />
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
