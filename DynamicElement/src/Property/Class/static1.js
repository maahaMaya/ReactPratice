class ProductComponent extends React.Component {
    render() {
        return (
            <>
                <div className="card m-2">
                    <div className="card-header text-center">
                        <h2>{this.props.Name}</h2>
                    </div>
                    <div className="card-body text-center">
                        <img width="200" height="200" src={this.props.Photo} />
                    </div>
                    <div className="card-footer text-center">
                        <h2>{this.props.Price}</h2>
                    </div>
                </div>
            </>
        )
    }
}

class MainComponent extends React.Component
{
    render(){
        return(
            <>
                <div className="d-flex">
                    <ProductComponent Name={'Boy'} Price={120000} Photo={'../assets/boy.png'}/>
                    <ProductComponent Name={'Boy'} Price={120000} Photo={'../assets/boy.png'}/>
                    <ProductComponent Name={'Boy'} Price={120000} Photo={'../assets/boy.png'}/>
                </div>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)
