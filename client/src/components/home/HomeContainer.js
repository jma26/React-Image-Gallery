import { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Home from './Home';
import { auth } from '../../firebase/firebase';


const useStyles = makeStyles({
  root: {
    marginTop: '2em'
  }
});

function HomeContainer() {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    let user = auth.currentUser;
    if (!user) {
      history.push('/login');
    }
  }, [])
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="home">
        <Grid
          container
          spacing={4}
          className={classes.root}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:username" component={Profile} />
          </Switch>
        </Grid>
      </Container>
    </>
  );
}

export default HomeContainer;