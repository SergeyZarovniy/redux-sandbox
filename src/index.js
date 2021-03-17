import {createStore} from 'redux';
import {inc,dec,rnd} from './actions';
import reducer from './reducer';



const store = createStore(reducer);

const {dispatch} = store;

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (payload) => dispatch(rnd(payload));

document
 .getElementById('inc')
 .addEventListener('click', incDispatch);

 document
  .getElementById('dec')
  .addEventListener('click', decDispatch);

  document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rndDispatch(payload)
  });
      
   
  const update = () => {
      document
       .getElementById('counter')
       .innerHTML = store.getState();
  };

  store.subscribe(update);
