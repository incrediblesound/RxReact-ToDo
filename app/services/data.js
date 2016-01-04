import store from './store.js';
import rx from 'rx';

var addToDo = new Rx.Subject();

var addSubscription = addToDo.subscribe(
  function(todo){
    store.addToDo(todo);
  },
  function(err){
  },
  function(){
  }
);


var removeToDo = new Rx.Subject();

var removeSubscription = removeToDo.subscribe(
  function(todo){
    store.removeToDo(todo);
  },
  function(err){
  },
  function(){
  }
);

export { addToDo, removeToDo }
