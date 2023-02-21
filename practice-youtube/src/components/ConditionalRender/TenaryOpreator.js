import React, { Component } from 'react'

class TenaryOpreator extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        return this.state.isLoggedIn ? <div>Welcome Sourav</div> : <div>Welcome Guest</div>;

    }
}
export default TenaryOpreator;