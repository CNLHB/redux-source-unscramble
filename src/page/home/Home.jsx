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
        <p style={{margin:10,padding:10}}>
        <button  style={{padding:30,margin:30}} onClick={()=>{store.dispatch(addAgeAction)}}>age++</button>
        </p>
        <p>
           {this.state.age}
        </p>
        <div style={{margin:10}}>
            <div  style={{margin:30}}>2

            </div>
            1

        </div>

    </div>
    }
}
export default Home