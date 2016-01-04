import React from 'react';
import rx from 'rx';
import store from '../services/store';
import updateWords from '../services/data';
import _ from 'lodash';
import styles from './layout.css';


var Navbar = React.createClass({
  render: function(){
    return(
      <div className='navbar'>
      </div>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div className='footer'>
      </div>
    )
  }
})

var Left = React.createClass({
  getInitialState: function(){
    return {
      value: null
    }
  },
  updateValue: function(e){
    this.setState({
      value: e.target.value
    })
  },
  submitValue: function(){
    updateWords.onNext(this.state.value);
  },
  render: function(){
    return (
      <div className='left'>
        <input onChange={this.updateValue}/>
        <button onClick={this.submitValue}>Submit</button>
      </div>
    )
  }
})

var Right = React.createClass({
  render: function(){
    return (
      <div className='right'>
      {_.map(this.props.words, (word) => { return (<h2>{word}</h2>) })}
      </div>
    )
  }
})

export default React.createClass({
  render: function(){
    return (
      <div className='layout'>
      <Navbar/>
      <Left/>
      <Right words={this.props.words}/>
      <Footer/>
      </div>
    )
  }
})
