class ProductComponent extends React.Component {
    Name = "Nike";
    Price = 5000;
    Photo = "../assets/boy.png";
    render() {
        return (
            <>
                <div className="card m-2">
                    <div className="card-header text-center">
                        <h2>{this.Name}</h2>
                    </div>
                    <div className="card-body text-center">
                        <img width="200" height="200" src={this.Photo} />
                    </div>
                    <div className="card-footer text-center">
                        <h2>{this.Price}</h2>
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
                    <ProductComponent/>
                </div>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)