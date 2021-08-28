import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import './signup.css';

const useStyles = makeStyles({
  root: {
    '& .MuiGrid-root': {
      margin: '0 auto',
    },
    '& .MuiTextField-root': {
      padding: '0.25em 0',
      width: '100%',
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
      margin: '1em 0 0.5em',
      width: '100%'
    }
  },
  link: {
    '& .MuiTypography-colorPrimary': {
      color: '#0095F6',
      fontWeight: '600'
    }
  }
});

function Signup() {
  const classes = useStyles();
  return (
    <>
    <Container maxWidth="md" className="signup">
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
          <p>Sign up to see photos and videos from your friends.</p>
          <hr />
          <TextField
            label="Email"
            size="small"
            variant="filled"
          >
          </TextField>
          <TextField
            label="Full Name"
            size="small"
            variant="filled"
          >
          </TextField>
          <TextField
            label="Username"
            size="small"
            variant="filled"
          >
          </TextField>
          <TextField
            label="Password"
            size="small"
            variant="filled"
          >
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="small"
          >
            Sign up
          </Button>
          <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          className={classes.link}
        >
          <p>Have an account? <Link href="/">Log in</Link></p>
        </Grid>

      

      </Grid>
    </Container>
    </>
  );
}

export default Signup;