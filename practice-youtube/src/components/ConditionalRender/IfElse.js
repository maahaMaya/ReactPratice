import React, { Component } from 'react'

class IfElse extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return(
                <div>
                    <div>Welcome Sourav</div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>Welcome Guest</div>
                </div>
            )
        }
    }
}
export default IfElse;