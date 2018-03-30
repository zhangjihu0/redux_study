let combineReducers =(reducers)=>(state={counter:{number:0},todo:{list:[]}},action)=>{
  let newState = {};
  for(var key in reducers){ //counter todo
    newState[key] = reducers[key](state[key],action)//每个reducer中含有state的初始值，当第一次执行时，newState就
    //拿到了初始的state的值
  }
  return newState;
}
combineReducers({
  counter,
  todo
})