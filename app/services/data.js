import store from './store.js';
import rx from 'rx';

var updateWords = new Rx.Subject();

var subscription = updateWords.subscribe(
  function(word){
    store.addWord(word);
    store.update();
  },
  function(err){
  },
  function(){
  }
)

export default updateWords;
