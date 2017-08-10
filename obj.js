

const createStore = (reducer)=>{
    let state;
    //监听函数数组
    let listeners = [];
    //用来获取最新的状态
    let getState = () => state;
    //向仓库发送action
    let dispatch = (action)=>{
        //传入老的state,和action 返回新的state
      state = reducer(state,action);
      listeners.forEach(listener => listener())
    }
    //订阅仓库内的状态变化事件，当状态发生变化之后调用对应的监听函数；
   //订阅方法执行后会返回一个取消订阅的函数，调用它可以取消订阅；
    let subscribe = (listener)=>{
       listeners.push(listener);
       //如果已存在取消；
       return ()=>{
        listeners = listeners.filter(l=>listener!=l) 
       }
   }
    return{
        getState,//获取最新的状态对象；
        subscribe//订阅状态变化事件；

    }
}