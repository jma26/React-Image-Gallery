import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import FormControls from '../form/formControls';
import './login.css';

const useStyles = makeStyles({
  root: {
    '& .MuiGrid-root': {
      margin: '0 auto',
    },
    '& .MuiTextField-root': {
      padding: '0.25em 0',
      width: '100%'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#8E8E8E'
    },
    '& .MuiFilledInput-root': {
      background: '#FAFAFA',
      color: '#8E8E8E'
    },
    '& .MuiFilledInput-root:hover': {
      background: '#FAFAFA',
      color: '#8E8E8E'
    },
    '& .MuiFilledInput-root.Mui-focused': {
      background: '#FAFAFA',
      border: '1px solid #F0F0F0',
      color: '#8E8E8E'
    },
    '& .MuiFilledInput-underline': {
      border: '1px solid #F0F0F0'
    },
    '& .MuiFilledInput-underline:before': {
      border: 'none'
    },
    '& .MuiFilledInput-underline:after': {
      border: '1px solid #F0F0F0'
    },
    '& .MuiButton-containedPrimary': {
      backgroundColor: '#0095F6',
      marginTop: '1em',
      marginBottom: '2em',
      width: '100%'
    },
    '& .MuiButton-contained.Mui-disabled': {
      backgroundColor: '#B2DFFC',
      color: '#FFFFFF'
    }
  },
  link: {
    '& .MuiTypography-colorPrimary': {
      color: '#0095F6',
      fontWeight: '600'
    }
  }
});

function Login() {
  const classes = useStyles();
  const { 
    handleInputChange,
    handleLogin,
    formIsValid,
  } = FormControls();
  return (
    <>
    <Container maxWidth="md" className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <Grid 
          container
          direction="column"
          justifyContent="center"
          className={classes.root}
        >
          <Grid
            item
            xs={6}
            sm={3}
          >
            <h1>Reactagram</h1>
            <TextField
              label="Email"
              name="email"
              size="small"
              variant="filled"
              onChange={handleInputChange}
            >
            </TextField>
            <TextField
              label="Password"
              name="password"
              size="small"
              variant="filled"
              onChange={handleInputChange}
            >
            </TextField>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              disabled={!formIsValid()}
            >
              Log In
            </Button>
          </Grid>
          <Grid
            color="textPrimary"
            className={classes.link}
          >
            <hr />
            <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  );
}

export default Login;