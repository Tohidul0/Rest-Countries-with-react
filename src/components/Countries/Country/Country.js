import React from 'react';
import './Country.css'
import { fakeDb } from '../../../Utilities/fakeDb';

const Country = (props) => {
      // ----------use distercering-----------------------------

      const show =props.name;
      console.log(show)
      //adtocard part function---------------------------
      function adToCard(id){
        fakeDb(id);
      }
      return(
        <div className='countries-container col-lg-3 g-2 d-flex justify-content-center'>
          <div className='text-center'>
           <img style={{width: "250px"}} src={show.flags.png}/>
           <h3>Name : {show.name.common}</h3>
           <h3>Area : {show.area}</h3>
           <button onClick={()=>adToCard(show.name.common)}>Load country</button>
          </div>
        </div>
      )
};

export default Country;