var immutable = require('immutable');

class Store {
  constructor(){
    this.store = immutable.fromJS(
      { todos: [] }
    )
    this.callbacks = [];
  }
  addToDo(todo){
    this.store = this.store.set('todos', this.store.get('todos').push(todo));
    this.update();
  }
  removeToDo(todo){
    var todos = this.store.get('todos');
    this.store = this.store.set(
      'todos',
      todos.delete(todos.indexOf(todo))
    )
    this.update();
  }
  update(){
    _.each(this.callbacks, (cb) => {
      cb();
    })
  }
  onUpdate(fn){
    this.callbacks.push(fn);
  }
  toJSON(){
    return this.store.toJSON();
  }
}

var store = new Store();

export default store;
