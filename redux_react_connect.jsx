import { createStore } from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Provider,connect } from 'react-redux';
//组件
class Counter extends Component{
    render(){
        return{
            <div>
                <span>{this.props.value}</span>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </div>
        }
    }
}
//reducer
const counter = (state={count:0},action)=>{
    let count = state.count;
    switch(action.type){
        case 'increate':
            return {count:count+1};
        case 'decreate':
            return {count:count-1};
        default:
            return state;
    }

}

// store 
let store = createStore(counter);
const mapDispatchToProps=(state)=>{
    return {
        value:state.value
    }
}
// 把dispatch映射成属性
const mapDispatchToProps = (dispatch)=>{
    //返回一个对象，这个对象作为组件的属性
    return {
        onIncrease:dispatch({type:'increase'}),
        onDecrease:dispatch({type:'decrease'})
    }
}
let App = connect(mapStateToProps,mapDispatchToProps)(Counter)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
)