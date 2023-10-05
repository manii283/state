import React, {useState} from "react";
import "./App.css";

function App() {
  // let data = "manisha";

  const [data, setData] = useState('Manisha');
  const updateData = () => {
    // data = "nayak";
    // alert(data);
    setData('Nayak')
  };

  return (
    <div className="App">
      <h1>State</h1>
      <h2>{data}</h2>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
