// state - count : 0
// action - increment, decrement and reset
// reducer - handle logic for increment, decrement and reset
// store - work on dispatch



const { createStore } = require("redux")


// Constant

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

// state
const initialState={
   count : 0
}

// action is a object

const incrementCounterAction=()=>{
  return {
    type : INCREMENT
  }
}
const decrementCounterAction=()=>{
  return {
    type : DECREMENT
  }
}
const resetCounterAction=()=>{
  return {
    type : RESET
  }
}
const incrementCounterByValue=(value)=>{
  return {
    type : INCREMENT_BY_VALUE,
    payload: value
  }
}


// reducer   --> is a pure function

const counterReducer=(state=initialState,action)=>{

  switch(action.type){
      
    case INCREMENT:
      return{
        ...state,    // write this line for best practices. for multiple value have under the state tar jonno ar na hole ata likhar dorkan ney for update all value do not write this line
        count:state.count+1
      }
    case DECREMENT:
      return{
        ...state,
        count:state.count-1
      }
    case RESET:
       return{
        ...state,
        count:0
       }
       case INCREMENT_BY_VALUE:
       return{
        ...state,
        count: state.count + action.payload
       }
    default:
      return state;
  }

}


// store

const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState());   // print the state
})

// dispatch the action

// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(10))