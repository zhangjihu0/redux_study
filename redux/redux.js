//创建仓库
const createStore = (reducer)=>{
    let state;
    //监听函数数组

    let listeners=[];

    let getState = ()=>state//用来获取最新的状态
   // 向仓库发送action
    let dispatch=(action)=>{
        //传入老的state和action，返回新的state
        state = reducer(state,action);
        listeners.forEach(listener=>listener()) 
    }
    //订阅仓库内的状态变化事件，当状态发生变化后会调用对相应的监听函数
    //订阅函数执行后会返回一个取消订阅的函数，调用它取消订阅；
    let subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(l=>listener!=l);
        }
    }
    return {
        getState,//获取最新的状态对象
        dispatch,//
        subscribe//原来订阅状态变化事件

    }
}

export {
    createStore
}