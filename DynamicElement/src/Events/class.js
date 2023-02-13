class Product extends React.Component
{
InsertClick(e){
alert(`X Position: ${e.clientX}\nName : ${e.target.name}`);
}
render(){
return(
<div>
<button name="btnInsert" onClick={this.InsertClick} className="btn
btn-primary">Insert</button>
</div>
)
}
}
class MainContent extends React.Component
{
render(){
return (
<div className="container-fluid">
<h3>Event Handling</h3>
<Product />
</div>
)
}
}
ReactDOM.render(
<MainContent />,
document.getElementById('container')
);