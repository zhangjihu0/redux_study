import React,{Component} from 'react';
import { createStore } from './redux.js';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
// let reducer = (state ={number:0},action)=>{
//   if(action == undefind) return state;
//   switch(action.type){
//       case INCREASE:
//           return{number:state.number+1};
//       case DECREASE:
//           return {number:state.number-1};
//       default:
//           return state;
//   }
// }
let store = createStore(reducer);
let increase = (amount)=>(//actionCreater
  {
    type:INCREASE,amount
  }
)
export default class Counter extends Component{
  constructor(props){
    super(props)
    this.state={
      number:store.getState().number
    }
  } 
  componentWillMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    })
  } 
  componentwillUnMount(){
    this.unsubscribe()
  }
  render(){
    return(
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch(increase(2))}>+</button> 
        <button onClick={()=>store.dispatch({type:DECREASE})}>-</button>   
      </div>
    )
  }
}