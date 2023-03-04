import { createStore } from 'redux';

// const defaultState = {
//   counter: 0,
// };
const mstate = {
  counter: 0,
};

const reducerFn = (state = mstate, actions) => {
  //update counter
  // Dont mutate
  if (actions.type === 'INCREE') {
    return {
      counter: state.counter + 1,
    };
  }

  if (actions.type === 'DECRE') {
    return {
      counter: state.counter - 1,
    };
  }

  if (actions.type === 'PAYLOAD') {
    return {
      counter: state.counter + actions.payload,
    };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
