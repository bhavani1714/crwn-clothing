import React from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage.component';
import {Switch,Route,Link} from 'react-router-dom';


const HatsPage = (props) =>{
  console.log(props)
  return (
<div>
  <h1>
    <button onClick={() => props.history.push('/')}>homepage</button>
    HATS PAGE
  </h1>
</div>

);
  };




function App() {
  return (
    <div>
      <Link to='/hats'>HATS</Link>
      <Route  exact path='/' component={HomePage}></Route>
     <Route exact path='/shop/hats' component={HatsPage}></Route>

    </div>
  );
}

export default App;
