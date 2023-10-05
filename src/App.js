import logo from './logo.svg';
import './App.css';

function App() {

  let data = 'manisha'

  const updateData = () => {
    data = 'nayak'
    alert(data)
  }

  return (
    <div className="App">
   <h1>State</h1>
   <h2>{data}</h2>
   <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
