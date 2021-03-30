import React from 'react';
import './App.css';
import HomePage from './pages/homepages/homepage.component';
import {Switch,Route,Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';


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




class App extends React.Component {

  constructor()
  {
    super();

    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
        <Route  exact path='/' component={HomePage}></Route> 
        <Route exact path='/shop/hats' component={HatsPage}></Route>
        <Route exact path='/shop/' component={ShopPage}></Route>
        <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;
