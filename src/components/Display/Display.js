import React, { Component } from 'react';
import './Display.css';
import {connect} from 'react-redux';

class Display extends Component {


  render() {
    console.log('rendering app');
    return (
      <div>
 
      <p>Button 1 was clicked {this.props.reduxState.buttonOneReducer.clickCount} times.</p>
       <p>Button 1 was clicked {this.props.reduxState.buttonTwoReducer.clickCount} times.</p>
       <p>Total clicks {this.props.reduxState.totalClicksReducer.clickCount} times.</p>

      </div>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({ 
  reduxState
})

export default connect(mapReduxStateToProps)(Display);
