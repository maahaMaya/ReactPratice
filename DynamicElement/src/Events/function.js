function Product(){
    function InsertClick(){
      alert("Record Inserted");
    }
    return (
      <div>
        <button onClick={InsertClick} name="btnInsert" className="btn btn-primary">Insert</button>
      </div>
    )
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
  