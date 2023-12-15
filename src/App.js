import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Boost></Boost>

      <h1>All Countries Details</h1>
      <Countries></Countries>
    </div>
  );
}

function Boost(){

  // useState use like a function in react when upadte event hendler
  const [count, setCount] = useState(0);
  const increase = () =>{
    const newCount=count+1
    setCount(newCount)
  }
  return(
    <div>
      <h2>power : {count}</h2>
      <button onClick={increase}>Boost</button>
    </div>
  )
  }

  function Countries(){
    const [countries, setCountries] =useState([])
    useEffect( () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    },[])
    return(
      <div>
        <h1>{countries.length}</h1>
         <div className='row  '>
         {
          countries.map(country => <Country name={country.name.common} area={country.area} image={country.flags.png}></Country> )
         }
         </div>
        
      </div>
    )
  }
  function Country(props){
    console.log(props)
    return(
      <div className='countries-container col-lg-3 g-2'>
        <div>
        <img style={{width: "250px"}} src={props.image}/>
        <h3>Name : {props.name}</h3>
        <h3>Area : {props.area}</h3>
        </div>
      </div>
    )
  }

export default App;
