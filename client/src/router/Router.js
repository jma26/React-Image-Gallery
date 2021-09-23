import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import HomeContainer from '../components/home/HomeContainer';

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
          component={HomeContainer}
        />
      </Switch>
    </>
  )
}

export default withRouter(Router);