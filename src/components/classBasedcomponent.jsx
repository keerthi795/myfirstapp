import React from 'react'

class ClassBasedcomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    dec=()=>{
        if(this.state.count>0){
            return(
                this.setState({count:this.state.count-1})
            )
        }
    }

render(){
    return(
        <div>
        <h1> This is {this.props.name}</h1>
        <button onClick={()=>{this.inc()}}>Inc</button>
        <h1>count is {this.state.count}</h1>
        <button onClick={()=>{this.dec()}}>Dec</button>
     
        </div>
    );
}
}

export default ClassBasedcomponent;