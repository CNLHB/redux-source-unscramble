import  React, {Component} from 'react';
import {store} from '../../App'
import {addAgeAction} from '../../action'
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            age:store.getState().age
        }
    }
    componentDidMount(){
        store.subscribe(this.update)
    }
    update=()=>{
        this.setState({
            age: store.getState().age
        })
    }
    render(){
    return <div>
        Home

        <button  onClick={()=>{store.dispatch(addAgeAction)}}>age++</button>
        <p>
           {this.state.age}
        </p>
    </div>
    }
}
export default Home