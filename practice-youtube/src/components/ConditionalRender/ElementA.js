import React, { Component } from 'react'

class ElementA extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false
        }
    }
    render(){
        let message;
        if(this.state.isLoggedIn){
            message = <div>Welcome Sourav</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return message
    }
}
export default ElementA;