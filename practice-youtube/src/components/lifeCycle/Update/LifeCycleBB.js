import React, { Component } from "react";

class LifeCycleBB extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "sourav"
        }
        console.log("LifeCycleBB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleBB getDrivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleBB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleBB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleBB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleBB componentDidUpdate')
    }

    render(){
        console.log('LifeCycleBB render')
        return(
            <div>LifeCyle BB  </div>
        )
    }
}

export default LifeCycleBB;