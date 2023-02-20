import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "sourav"
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCyleA getDrivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    render(){
        console.log('LifeCycleA render')
        return(
            <div>LifeCyle A <LifeCycleB/> </div>
        )
    }
}

// export default LifeCycleA;