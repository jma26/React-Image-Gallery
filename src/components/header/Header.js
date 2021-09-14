import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './header.css';

const useStyles = makeStyles({
  root: {
    '& .header-middle .MuiIconButton-root': {
      marginLeft: '0.5em',
      marginRight: '0.5em'
    }
  }
});

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar className="header" position="static" color="transparent">
        <Toolbar className={classes.root}>
          <IconButton
            aria-label="Home page"
            color="inherit"
            onClick={() => window.location.replace('/')}
          >
            <InstagramIcon />
          </IconButton>
          <Typography variant="h6">
            Reactagram
          </Typography>
          <div className="header-middle mid-icons">
            <IconButton aria-label="Home page" color="inherit">
              <HomeIcon />
            </IconButton>
            <IconButton aria-label="Search function" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="Explore Reactagram" color="inherit">
              <ExploreIcon />
            </IconButton>
          </div>
          <div className="header-end account">
            <IconButton aria-label="User messages" color="inherit">
              <MessageIcon />
            </IconButton>
            <IconButton aria-label="User account" color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;