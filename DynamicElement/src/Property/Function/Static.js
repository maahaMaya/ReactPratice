const ProductComponent = (props) => (
    <>
        <div className="card m-2">
            <div className="card-header text-center">
                <h2>{props.Name}</h2>
            </div>
            <div className="card-body text-center">
                <img width="200" height="200" src={props.Photo}/>
            </div>
            <div className="card-footer text-center">
                <h2>{props.Price}</h2>
            </div>
        </div>
    </>
);

const MainComponent = () => (
    <>
    <h2>Product Catalog</h2>
        <div className="d-flex">
            <ProductComponent Name={'Boy'} Price={120000} Photo={'../assets/boy.png'}/>
            <ProductComponent Name={'Boy'} Price={120000} Photo={'../assets/boy.png'}/>
            <ProductComponent Name={'Girl'} Price={120000} Photo={'../assets/girl.png'}/>
        </div>
    </>
)

ReactDOM.render(
    <>
        <MainComponent/>
    </>,
    document.getElementById("container")
)