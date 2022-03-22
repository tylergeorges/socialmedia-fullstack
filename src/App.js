import { useEffect } from 'react';
import { fetchSm , fetchHome} from './actions/actions';
import { connect } from 'react-redux';
import './App.css';
import Welcome from './pages/Welcome';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import UserProfile from './pages/UserProfile';
import Notifications from './pages/Notifictions';
import Post from './pages/Post';

function App(props) {

  // useEffect(()=>{
  //   props.fetchHome()
  // },[])
  return (
      <Switch>
        <Route  path="/register" component={Register}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/home" component={Home}/>
        <Route  path="/:user/post/:postid" component={Post}/>
        <Route  path="/notifications" component={Notifications}/>
        <Route  path="/search/:user" component={Search}/>
        <Route  path="/:user" component={UserProfile} />
        <Route  path='/' component={Welcome} />
      </Switch>
  );
}

export default connect(null, {fetchSm, fetchHome})(App);
