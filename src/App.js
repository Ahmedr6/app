
import './App.css';
import KitchenSinkExample from './Product';

function App() {

 
  const firstName = prompt("type your first name");
  return (
    <div className="App">
       <p className='hello'> Hello {firstName ||'there' } </p>
       <br></br>
       {/* <p>  {firstName ? "" : "  there"} </p> */}
       <div className='card'><KitchenSinkExample /></div> 
      
    </div>
  );
}

export default App;
