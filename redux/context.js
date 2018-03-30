import React,{Component} from 'react';
import Styles from './index.less';
export default class Container extends Component{
  getChildContext(){
    return {//返回一个对象，这个对象就是子组件context对象
      color:'red'
    };
  }
  
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div>
        Home
      </div>
    )
  }
}
Container.childContextType = {
  color:PropType.string
}
import React,{Component} from 'react';
import Styles from './index.less';
export default class Child extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <div>
        {
          this.context.color
        }
      </div>
    )
  }
}

Child.ContextTypes = {
  color:PropTypes.string
}
