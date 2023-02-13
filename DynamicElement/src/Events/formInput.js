class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                Name: '',
                Price: ''
            }
        }
        this.NameChanged = this.NameChanged.bind(this);
        this.PriceChanged = this.PriceChanged.bind(this);
    }
    NameChanged(e){
        this.setState({
            product:{
                Name: e.target.value,
                Price: this.state.product.Price
            }
        })
    }
    PriceChanged(e){
        this.setState({
            product:{
                Price: e.target.value,
                Name: this.state.product.Name
            }
        })
    }
    render() {
        return (
            <>
                <h3>Register Product</h3>
                <dl>
                    <dt>Product Name</dt>
                    <dd><input type="text" onChange={this.NameChanged}/></dd>
                    <dt>Price</dt>
                    <dd><input type="text" onChange={this.PriceChanged}/></dd>
                </dl>
                <h3>Product details</h3>
                <dl className="row">
                    <dt className="col-2">Name</dt>
                    <dd className="col-10">{this.state.product.Name}</dd>
                    <dt className="col-2">Price</dt>
                    <dd className="col-10">{this.state.product.Price}</dd>
                </dl>
            </>
        )
    }
}
class MainContent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Product/>
            </div>
        )
    }
}
ReactDOM.render(
    <MainContent />,
    document.getElementById('container')
);