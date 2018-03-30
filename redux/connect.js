//mapStateToProps把store里的状态映射成为属性
import React,{Component} from 'react';
let connect = (mapStateToProps)=>(_component)={//_表示私有

 class Proxy extends Component{
    constructor(props){
      super(props);
      this.state = mapStateToProps(store.getState())

    }
    render(){
      return <_component {...this.state} {...mapDispatchToProps(store.dispatch)} />
    }
  }
  return Proxy;
}
let mapStateToProps = (state)=>({
  value:state.number
})
let mapDispatchToProps = (dispatch)=>({
  onIncrease:()=>dispatch({type:INCREASE}),
  onDecrease:()=>dispatch({type:DECREASE})
})
connect(mapStateToProps)(Counter2)//Counter2是_component;