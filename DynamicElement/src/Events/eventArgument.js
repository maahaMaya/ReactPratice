class Product extends React.Component
{
 
    // DataOperations(SyntheticEvent){
    //     for(var property in SyntheticEvent.target){
    //         document.write(property +"<br>")
    //     }
    // }
  DataOperations(e){
 	switch(e.target.value)
 	{
   	case "Insert":
   	alert("Record Inserted");
   	break;
   	case "Update":
   	alert("Record Updated");
   	break;
   	case "Delete":
   	alert("Record Deleted");
   	break;
 	}
  }
  render(){
	return(
  	<div>
    	<div className="btn-group">
    	<button name="btnInsert" value="Insert" onClick={this.DataOperations} className="btn btn-primary">Insert</button>
    	<button name="btnUpdate" value="Update" onClick={this.DataOperations} className="btn btn-success">Update</button>
    	<button name="btnDelete" value="Delete" onClick={this.DataOperations} className="btn btn-danger">Delete</button>
    	</div>
    	<h2 align="center"></h2>
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
