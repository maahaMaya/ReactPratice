import React, { Component } from "react";

class LifeCycleB extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "sourav"
        }
        console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDrivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    render(){
        console.log('LifeCycleB render')
        return <div>LifeCyle B</div>
    }
}

// export default LifeCycleB;