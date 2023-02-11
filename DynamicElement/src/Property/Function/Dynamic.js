const ProductComponent = (props) => (
    <>
        <div className="d-flex">
            {
                props.map(item => (
                    <div className="card m-2">
                        <div className="card-header text-center">
                            <h2>{item.Name}</h2>
                        </div>
                        <div className="card-body text-center">
                            <img width="200" height="200" src={item.Photo} />
                        </div>
                        <div className="card-footer text-center">
                            <h2>{item.Price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
);

const MainComponent = () => (
    <>
        <h2>Product Catalog</h2>
        <div >
            <ProductComponent props={[{Name={'Boy'}, Price={120000}, Photo={'../assets/boy.png'}}]} />
        </div>
    </>
)

ReactDOM.render(
    <>
        <MainComponent />
    </>,
    document.getElementById("container")
)