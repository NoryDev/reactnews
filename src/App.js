import React, { Component } from 'react';
import './App.css';
import SourceSelection from './SourceSelection';
import Newslist from './Newslist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { source: '' }
    this.sourceChanged = this.sourceChanged.bind(this)
  }

  sourceChanged(source) {
    this.setState({source: source})
  }

  render() {
    return (
      <div className="container" id="app">
        <SourceSelection sourceChanged={this.sourceChanged}></SourceSelection>
        <Newslist source={this.state.source}></Newslist>
      </div>
    );
  }
}

export default App;
