import React from 'react';
import rx from 'rx';
import store from '../services/store';
import { addToDo, removeToDo } from '../services/data';
import _ from 'lodash';
import styles from './layout.css';


var Navbar = React.createClass({
  render: function(){
    return(
      <div className='navbar'>
        <h2 className='title'>"To Do" App with RxJS and React</h2>
      </div>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div className='footer'>
        <p className='footer-text'>
        By <a href="http://www.github.com/incrediblesound">James Edwards</a>
        2016
        </p>
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
    addToDo.onNext(this.state.value);
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
  removeToDo: function(todo){
    removeToDo.onNext(todo)
  },
  printToDos: function(){
    var todos = _.map(this.props.todos, (todo, idx) => {
        return (
          <div key={idx}>
            <h3>{todo}</h3>
            <span className="remove" onClick={_.partial(this.removeToDo, todo)}>
              Remove
            </span>
          </div>
        )
      }
    )
    return todos;
  },
  render: function(){
    return (
      <div className='right'>
      <h2> Things to Do: </h2>
      {this.printToDos()}
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
      <Right todos={this.props.todos}/>
      <Footer/>
      </div>
    )
  }
})
