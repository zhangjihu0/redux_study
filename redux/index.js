import {createStore} from './redux';
import $ from 'jquery';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
$('document.body').append(`<p id="counter"></p><button id="increaseBtn">+</button>`);
//state 是状态树可以是任意的结构
let reducer = (state ={number:0},action)=>{
    if(action == undefind) return state;
    switch(action.type){
        case INCREASE:
            return{number:state.number+1};
        case DECREASE:
            return {number:state.number-1};
        default:
            return state;
    }
}
//{
//    getState,subscribe,dispatch
//}
let store = createStore(reducer);
let render = ()=>{
    document.querySelector('#counter').innerHTML = store.getState().number;
}
store.subscribe(render);
$('#increaseBtn').click(()=>store.dispatch({type:INCREASE}));
console.log(store.getState());
// render();