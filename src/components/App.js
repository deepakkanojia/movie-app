import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import Moviecard from './Moviecard';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="main">
      <div className="tabs">
       <div className="tab">Movies</div>
        <div className="tab" >Favorites</div> 
        
      </div>
      {/* displaying data on screen */}
      <div className="list">
           {data.map((movie , index )=> (
            <Moviecard movie={movie} key={`movies-${index}`}/>
             ) ) }

        </div>
     </div>
    </div>
    
  );
}

export default App;
