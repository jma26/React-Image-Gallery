import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Home from '../components/home/Home';

function Router() {
  return (
    <>
      <Route
        exact
        path='/'
        component={Login}
      />
      <Route
        exact
        path='/signup'
        component={Signup}
      />
      <Route
        exact
        path='/home'
        component={Home}
      />
    </>
  )
}

export default withRouter(Router);