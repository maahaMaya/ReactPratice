var product = ["home", "office", "clothes"]
const element = (
    <>
        <h2>Categoey List</h2>
        <ol>
            {
                // product.map(function (categoey) {
                //     return <li>{categoey}</li>
                // })
                product.map(categoey => 
                    <li>{categoey}</li>)
            }
        </ol>
    </>
);

ReactDOM.render(
    element,
    document.getElementById("container")
)