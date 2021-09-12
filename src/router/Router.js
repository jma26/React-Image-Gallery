import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Profile from '../components/profile/Profile';
import Home from '../components/home/Home';
import Images from '../components/images/images';

function Router() {
  return (
    <>
      <Switch>
        <Route 
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/signup"
          component={Signup}
        />
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </>
  )
}

export default withRouter(Router);