import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
import movies from '../reducers';
import { addMovies } from '../actions';

class App extends React.Component {

  componentDidMount(){
    // console.log('did mount');
    //3rd call 
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPdated');
      this.forceUpdate();
    })
    // make an api call
    // dispatch the function
  store.dispatch(addMovies(data));
// 4th call 
    console.log("STATE" ,store.getState());
  }
  // 5th call
  render(){
  const movies = this.props.store.getState();
  console.log('render');
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
           {movies.map((movie , index )=> (
            <Moviecard movie={movie} key={`movies-${index}`}/>
             ) ) }

        </div>
     </div>
    </div>
    
  );
}
}
export default App;
