class ProductComponent extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            title: 'Categories list',
            categories: ["Elec", "Home", "Office"],
            data: [
                {Name: 'Nike', Price: 45000},
                {Name: 'Nike', Price: 45000}
            ]
        }
    }
    render(){
        return(
            <>
                <h2>{this.state.title}</h2>
                <ul>
                    {
                        this.state.categories.map(category =>
                            <li key={category}>{category}</li>
                            )
                    }
                </ul>
                <h2>Product list</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(product =>
                                <tr key={product.Name}>
                                    <td>{product.Name}</td>
                                    <td>{product.Price}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </>
        )
    }
}


ReactDOM.render(
    <ProductComponent/>,
    document.getElementById("container")
)