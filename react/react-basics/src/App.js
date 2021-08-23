import './App.css';
import ListView from './components/component';

function App() {

  var message = " Hello bitch ";
  var nums = [1,4,65,3,7,3,65,0.67];
  return (

    <>
    <nav className="nav">
      <ul>
        <li>{nums.join(" - ")}</li>
        <li>Notas</li>
        <li></li>
      </ul>
      
    </nav>

    <div >
        <ListView msg="Hello from App prop and local variable: " localVar={message}/>
    </div>
    </>
  );

}

export default App;
