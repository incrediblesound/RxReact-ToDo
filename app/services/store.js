var immutable = require('immutable');

class Store {
  constructor(){
    this.store = immutable.fromJS(
      { words: [] }
    )
    this.callbacks = [];
  }
  addWord(word){
    this.store = this.store.set('words', this.store.get('words').push(word));
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
