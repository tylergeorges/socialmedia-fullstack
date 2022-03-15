import { useEffect } from 'react';
import { fetchSm } from './actions/actions';
import { connect } from 'react-redux';
import './App.css';
import Welcome from './components/Welcome';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifactions';

function App(props) {

  useEffect(()=>{
    props.fetchSm()
  },[])
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/search/:user" component={Search}/>
        <Route path="/:user" component={UserProfile}/>
        <Route path="/notifactions" component={Notifications}/>
        <Route path='/' component={Welcome} />
      </Switch>
    </div>
  );
}

export default connect(null, {fetchSm})(App);
