var userName = "Sourav";
const element = (
    // <div>
    //     <h2>Hi</h2>
    //     <h2>By</h2>
    // </div>
    <>
        <h2>Hi {userName}</h2>
        <h2>By</h2>
    </>
);

ReactDOM.render(
    element,
    document.getElementById("container")
)