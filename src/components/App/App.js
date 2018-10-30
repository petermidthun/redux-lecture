import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Display from '../Display/Display'

class App extends Component {
  countClicksB1 = () => {
    console.log('clicked button one');
    this.props.dispatch( {type: 'BUTTON_ONE_CLICKED'});
  }

  countClicksB2 = () => {
    console.log('clicked button two');
    this.props.dispatch( {type: 'BUTTON_TWO_CLICKED'});
  }

  render() {
    console.log('rendering app');
    return (
      <div>
        <header>
          <h1>Something</h1>
        </header>
      <button onClick={this.countClicksB1}>Button1</button>
      <button onClick={this.countClicksB2}>Button2</button>
      <Display />
      <pre>
        Junky State:
        {JSON.stringify(this.props.reduxState)}
      </pre>
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
