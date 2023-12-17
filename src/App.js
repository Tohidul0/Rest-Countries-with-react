import { useEffect, useState } from 'react';
import './App.css';
import Boost from './components/Boost/Boost';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
     
      <Boost></Boost>

      <h1>All Countries Details</h1>
      <Countries></Countries>
    </div>
  );
}
// -----------------Boost part start here--------------------


// function Boost(){

//   // useState use like a function in react when upadte event hendeler
//   const [count, setCount] = useState(0);
//   const increase = () =>{
//     const newCount=count+1;
//     setCount(newCount)
//   }
//   return(
//     <div>
//       <h2>power : {count}</h2>
//       <button onClick={increase}>Boost</button>
//     </div>
//   )
//   }


// componently add Boost part..thats it is comment here the Boost portion--------------------------------

  // function Countries(){
  //   const [countries, setCountries] =useState([])
  //   useEffect( () =>{

  //   fetch('https://restcountries.com/v3.1/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  //   },[])
  //   return(
  //     <div>
  //       <h1>{countries.length}</h1>
  //        <div className='row  '>
  //        {
  //         countries.map(country => <Country name={country}></Country> )
  //         // countries.map(country => <Country name={country.name.common} area={country.area} image={country.flags.png}></Country> )
  //        }
  //        </div>
        
  //     </div>
  //   )
  // }


  
  // function Country(props){
  //   // ----------use distercering-----------------------------
  //   const show =props.name;
  //   return(
  //     <div className='countries-container col-lg-3 g-2 d-flex justify-content-center'>
  //       <div className='text-center'>
  //        <img style={{width: "250px"}} src={show.flags.png}/>
  //        <h3>Name : {show.name.common}</h3>
  //        <h3>Area : {show.area}</h3>
  //       </div>
  //     </div>
  //   )
  // }

export default App;
