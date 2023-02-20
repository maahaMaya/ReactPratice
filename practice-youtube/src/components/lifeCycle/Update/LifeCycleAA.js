import React, { Component } from "react";
import LifeCycleBB from "./LifeCycleBB";

class LifeCycleAA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "sourav"
        }
        console.log("LifeCycleAA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleAA getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleAA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleAA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleAA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleAA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Sourav Kumar'
        })
    }
    render() {
        console.log('LifeCycleAA render')
        return (
            <div>
                <div>LifeCyle AA</div> 
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleBB />
            </div>
        )
    }
}

export default LifeCycleAA;