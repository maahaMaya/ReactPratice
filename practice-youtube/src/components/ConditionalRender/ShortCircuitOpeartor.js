import React, { Component } from 'react'

class ShortCircuitOpeartor extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        return this.state.isLoggedIn && <div>Welcome Sourav</div> ;
    }
}
export default ShortCircuitOpeartor;