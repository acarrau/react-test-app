import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      category: 0
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render(){
    let propsTxt = this.props.txt
    return <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>State text: {this.state.txt} </h1>
        <h1>Props text: {propsTxt}</h1>
      </div>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  category: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default props text'
}

ReactDOM.render(
  <App category={5} txt="this is the props text" />,
  document.getElementById('app')
);
