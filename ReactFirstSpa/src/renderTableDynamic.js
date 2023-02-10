var product = [{ Name: "Tv", Price: 45000 }, { Name: "AC", Price: 75000 }]
const element = (
    <>
        <h2 className="text-center bg-primary text-white mt-3">Categoey List</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(categoey =>
                        <tr>
                            <td>{categoey.Name}</td>
                            <td>{categoey.Price}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
);

ReactDOM.render(
    element,
    document.getElementById("container")
)