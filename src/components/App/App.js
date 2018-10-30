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

  addPerson = () => {
    console.log("add person button clicked");
    this.props.dispatch({ type: 'ADD_PERSON', payload: {name:'Christy', color: 'white'}});
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
      <button onClick={this.addPerson}>Add Person</button>

      <Display />
            <pre>
            The people are {JSON.stringify(this.props.reduxState.personReducer)}
            </pre>
            {this.props.reduxState.personReducer.map(( person, index) =>
            <p key={index}> {person.name} likes {person.color} </p>)}

      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}

export default connect(mapReduxStateToProps)(App);
