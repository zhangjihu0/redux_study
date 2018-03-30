import React from 'react';
import {createStore} from '../redux';
const ADD_TODO = 'ADD_TODO';//这是action的类型；add
const DELETE_TODO = 'DELETE_TODO';//delete
let reducer = (state={list:[]},action)=>{
  if(action == undefined) return state;
switch (action.type){
  case ADD_TODO:
    return {list:[...list,action.text]}
  case DELETE_TODO:
  let list = state.list;
  list.splice(action.index,1);
  //我们的状态有不变性,每次都返回一个新的数组
  return {list:[...list]}//返回引用地址已经改变的对象
}

}

let store = createStore(reducer)
export default class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {list:store.getState().list}
  }
  handleKeyDown=(event)=>{
    if(event.keyCode ==13 && event.target.length>0){
      store.dispatch({
        type:ADD_TODO,
        text:event.target.value
      })
      // let list = this.state.list;
      // list.push(event.target.value);
      // this.setState({list});
      // event.target.value = '';
    }
  }
  componentWillMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        list:store.getState().list
      })
    })
  }
  deleteTODO(index){
    store.dispatch({
      type:DELETE_TODO,
      index
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return(
      <div>
        <input type='text' onKeyDown={this.handleKeyDown} />
        <ul>
          {
            this.state.list.map((todo,index)=>{
                <li>{todo}<button onClick ={()=>(this.deleteTODO(index))}>delete</button></li>
            })
          }
        </ul>     
      </div>
    )
  }
}