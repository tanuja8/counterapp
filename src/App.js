import logo from './logo.svg';
import './App.css';
// import Home from './Component/Home';
import { useState } from 'react';
import Counter from './Component/Counter';

function App() {
  const[countryData,setCountryData]=useState([])
  return (
    <div className="App">
     {/* <Home/> */}
     <Counter/>
    </div>
  );
}

export default App;
